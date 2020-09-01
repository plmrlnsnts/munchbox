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

    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function getInstructionsAttribute()
    {
        return '<p>' . str_replace('<br>', '</p><p>', $this->attributes['instructions']) . '</p>';
    }
}
