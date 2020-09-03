<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class MediaUploadTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_user_can_upload_an_image()
    {
        Storage::fake();

        $this->signIn();

        $file = UploadedFile::fake()->image('photo.jpg');

        $response = $this->json('post', route('media.store'), compact('file'));

        Storage::assertExists("uploads/{$file->hashName()}");
    }
}
