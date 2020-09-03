<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');

Route::get('explore', fn () => Inertia::render('Explore'))->name('explore');
Route::get('notifications', fn () => Inertia::render('Notifications'))->name('notifications');
Route::get('calendar', fn () => Inertia::render('Calendar'))->name('calendar');

Route::get('recipes', 'RecipesController@index')->name('recipes.index');
Route::get('recipes/{recipe}', 'RecipesController@show')->name('recipes.show');
Route::get('recipes/create', 'RecipesController@create')->name('recipes.create');
Route::post('recipes', 'RecipesController@store')->name('recipes.store');

Route::post('media', 'MediaController@store')->name('media.store');
