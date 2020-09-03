<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Model::unguard();

        Relation::morphMap(['recipes' => 'App\Recipe']);

        Inertia::version(fn () => md5_file(public_path('mix-manifest.json')));

        Inertia::share('flash', fn() => ([
            'success' => session()->get('success'),
            'error' => session()->get('error'),
        ]));

        Inertia::share('errors', fn () => (
            session()->get('errors')
                ? session()->get('errors')->getBag('default')->getMessages()
                : (object) []
        ));
    }
}
