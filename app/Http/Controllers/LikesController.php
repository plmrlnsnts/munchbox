<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Relations\Relation;

class LikesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function store($model, $id)
    {
        $likeable = Relation::getMorphedModel($model)::findOrFail($id);

        $likeable->liked();

        return response()->noContent();
    }

    public function destroy($model, $id)
    {
        $likeable = Relation::getMorphedModel($model)::findOrFail($id);

        $likeable->unliked();

        return response()->noContent();
    }
}
