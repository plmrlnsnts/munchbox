<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Munchbox</title>
    <meta property="og:image" content="{{ asset('banner.jpg') }}">
    <meta property="og:title" content="Oh baby, you're gonna love this!" />
    <meta property="og:description" content="You're in for a ride! We'll build laravel applications using the best tools out there." />
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <link rel="stylesheet" href="{{ mix('css/main.css') }}">
    <script src="{{ mix('js/app.js') }}" defer></script>
    @routes
</head>
<body class="text-gray-900 antialiased font-sans">
    @inertia
</body>
</html>
