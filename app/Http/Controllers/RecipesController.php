<?php

namespace App\Http\Controllers;

use App\Recipe;
use App\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RecipesController extends Controller
{
    public function __construct()
    {
        Auth::loginUsingId(1);

        $this->middleware('auth');
    }

    public function index()
    {
        return Recipe::query()
            ->with('author')
            ->latest('updated_at')
            ->paginate(5)
            ->setPath('/recipes');
    }

    public function create()
    {
        return Inertia::render('Recipes/Create');
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'instructions' => ['required', 'string'],
            'thumbnail' => ['nullable', 'string', 'url'],
            'tags' => ['required', 'array'],
            'tags.*' => ['required', 'string', 'max:255'],
            'ingredients' => ['required', 'array'],
            'ingredients.*.name' => ['required', 'string', 'max:255'],
            'ingredients.*.quantity' => ['required', 'string', 'max:255'],
            'ingredients.*.unit' => ['required', 'string', 'max:255'],
        ]);

        $attributes['user_id'] = auth()->id();

        $recipe = Recipe::create(Arr::except($attributes, ['tags', 'ingredients']));

        collect($attributes['tags'])->each(function ($name) use ($recipe) {
            $recipe->tags()->save(Tag::firstOrCreate(compact('name')));
        });

        collect($attributes['ingredients'])->each(function ($ingredient) use ($recipe) {
            $recipe->ingredients()->create($ingredient);
        });

        return redirect()->route('home');
    }

    public function show(Recipe $recipe)
    {
        $recipe->load(['author', 'ingredients', 'tags']);

        return Inertia::render('Recipes/Show', compact('recipe'));
    }
}
