<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function ingredients()
    {
        return $this->hasMany(Ingredient::class);
    }

    public function likes()
    {
        return $this->morphMany(Like::class, 'model');
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function liked()
    {
        return $this->likes()->firstOrCreate([
            'user_id' => auth()->id(),
        ]);
    }

    public function unliked()
    {
        $this->likes()
            ->whereUserId(auth()->id())
            ->delete();
    }

    public function scopeWithIsLiked($query)
    {
        return $query->addSelect(['is_liked' => Like::query()
            ->selectRaw('count(*)')
            ->whereColumn('model_id', 'recipes.id')
            ->where('user_id', auth()->id())
            ->limit(1)
        ])->withCasts(['is_liked' => 'boolean']);
    }
}
