<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Recipe;
use App\User;
use Faker\Generator as Faker;

$factory->define(Recipe::class, function (Faker $faker) {
    return [
        'user_id' => auth()->id() ?? factory(User::class),
        'name' => $faker->word,
        'description' => $faker->sentence,
        'instructions' => $faker->paragraph,
        'thumbnail' => $faker->imageUrl,
    ];
});
