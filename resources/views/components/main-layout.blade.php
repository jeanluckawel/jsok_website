<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0" />
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>{{ $title ?? "Jsok" }}</title>
</head>
<body class="">
    <x-main-nav/>
    <hr>
    <main class="container mx-auto mt-8">
        {{ $slot }}
    </main>
</body>
</html>
