<?php

use App\Ingredient;
use App\Recipe;
use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $recipes = json_decode(File::get(database_path('recipes.json')), true);

        User::insert(
            collect($recipes)
                ->map(fn ($recipe) => $recipe['author'])
                ->unique(fn ($user) => $user['id'])
                ->map(fn ($user) => array_merge($user, [
                    'password' => bcrypt('password'),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]))
                ->sortBy('id')
                ->all()
        );

        collect($recipes)->each(function ($data) {
            $recipe = Recipe::create(Arr::except($data, ['author', 'ingredients']));
            $recipe->ingredients()->createMany($data['ingredients']);
        });
    }
}
