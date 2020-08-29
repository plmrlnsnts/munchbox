<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="The way to build modern laravel applications.">
    <meta property="og:image" content="{{ asset('banner.jpg') }}">
    <meta property="og:title" content="Oh baby, you're gonna love this!" />
    <meta property="og:description" content="The way to build modern laravel applications." />
    <title>Munchbox</title>
    <link href="https://fonts.googleapis.com/css2?family=Chewy&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ mix('css/main.css') }}">
    <script src="{{ mix('js/app.js') }}" defer></script>
    @routes
</head>
<body>
    @inertia
</body>
</html>
