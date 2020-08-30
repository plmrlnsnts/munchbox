<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{
    public function store(Request $request)
    {
        $request->validate(['file' => 'required|mimes:jpeg,bmp,jpg,png']);

        $path = $request->file('file')->store('uploads');

        return response()->json([
            'url' => Storage::url($path),
        ]);
    }
}
