<?php

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

Route::get('/', fn () => Inertia::render('Home'))->name('home');
Route::get('explore', fn () => Inertia::render('Explore'))->name('explore');
Route::get('notifications', fn () => Inertia::render('Notifications'))->name('notifications');
Route::get('calendar', fn () => Inertia::render('Calendar'))->name('calendar');
