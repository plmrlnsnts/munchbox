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
        User::create([
            'name' => 'Paul Santos',
            'email' => 'paulmarlonsantos@gmail.com',
            'password' => bcrypt('password'),
        ]);

        $recipes = json_decode(File::get(database_path('recipes.json')), true);

        $users = collect($recipes)
            ->map(fn ($recipe) => $recipe['author'])
            ->unique(fn ($user) => $user['email'])
            ->map(fn ($user) => User::create([
                'name' => $user['name'],
                'email' => $user['email'],
                'password' => bcrypt('password'),
            ]));

        collect($recipes)->each(function ($data) use ($users) {
            $recipe = new Recipe(Arr::except($data, ['author', 'ingredients']));
            $recipe->user_id = $users->firstWhere('email', $data['author']['email'])->id;
            $recipe->save();

            $recipe->ingredients()->createMany($data['ingredients']);
        });
    }
}
