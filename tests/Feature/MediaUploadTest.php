<?php

namespace Tests\Feature;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class MediaUploadTest extends TestCase
{
    /** @test */
    public function a_user_can_upload_an_image()
    {
        Storage::fake();

        $file = UploadedFile::fake()->image('photo.jpg');

        $response = $this->json('post', route('media.store'), compact('file'));

        Storage::assertExists("uploads/{$file->hashName()}");
    }
}
