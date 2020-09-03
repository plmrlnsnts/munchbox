<?php

namespace Tests\Feature;

use App\Recipe;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LikesTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_user_can_like_a_model()
    {
        $this->signIn();

        $recipe = factory(Recipe::class)->create();

        $this->post("recipes/{$recipe->id}/likes");

        $this->assertCount(1, $recipe->likes);
    }

    /** @test */
    public function a_user_can_unlike_a_model()
    {
        $this->signIn();

        $recipe = factory(Recipe::class)->create();

        $recipe->liked();

        $this->assertCount(1, $recipe->likes);

        $this->delete("recipes/{$recipe->id}/likes");

        $this->assertCount(0, $recipe->fresh()->likes);
    }
}
