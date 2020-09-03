<?php

namespace Tests\Feature;

use App\Recipe;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RecipesTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_user_can_create_a_recipe()
    {
        $this->signIn();

        $stub = factory(Recipe::class)->raw();

        $this->post(route('recipes.store'), array_merge($stub, [
            'tags' => ['Foo'],
            'ingredients' => [[
                'quantity' => '1',
                'unit' => 'Piece',
                'name' => 'Chimken'
            ]],
        ]));

        $this->assertDatabaseHas('recipes', $stub);

        tap(Recipe::first(), function (Recipe $recipe) {
            $this->assertCount(1, $recipe->tags);
            $this->assertCount(1, $recipe->ingredients);
        });
    }
}
