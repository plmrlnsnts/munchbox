<?php

namespace App\Providers;

use Enl\Flysystem\Cloudinary\ApiFacade as CloudinaryClient;
use Enl\Flysystem\Cloudinary\Converter\TruncateExtensionConverter;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\ServiceProvider;
use League\Flysystem\Filesystem;

class CloudinaryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Storage::extend('cloudinary', function ($app, $config) {
            $client = new CloudinaryClient([
                'cloud_name' => $config['name'],
                'api_key' => $config['key'],
                'api_secret' => $config['secret'],
                'overwrite' => true,
            ], new TruncateExtensionConverter);

            return new Filesystem(new CloudinaryAdapter($client));
        });
    }
}

class CloudinaryAdapter extends \Enl\Flysystem\Cloudinary\CloudinaryAdapter
{
    public function getUrl($path)
    {
        return cloudinary_url($path);
    }
}
