<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $products = [
    [
        "id" => 1,
        "designation" => "Apple Mac Book Pro",
        "price" => 1200,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/1/400"
    ],
    [
        "id" => 2,
        "designation" => "Dell XPS 13",
        "price" => 1100,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/2/400"
    ],
    [
        "id" => 3,
        "designation" => "HP Spectre x360",
        "price" => 1300,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/3/400"
    ],
    [
        "id" => 4,
        "designation" => "Lenovo ThinkPad X1 Carbon",
        "price" => 1400,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/4/400"
    ],
    [
        "id" => 5,
        "designation" => "Microsoft Surface Laptop 4",
        "price" => 1000,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/5/400"
    ],
    [
        "id" => 6,
        "designation" => "Asus ZenBook 14",
        "price" => 900,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/6/400"
    ],
    [
        "id" => 7,
        "designation" => "Acer Swift 3",
        "price" => 800,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/7/400"
    ],
    [
        "id" => 8,
        "designation" => "Razer Blade Stealth 13",
        "price" => 1500,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/8/400"
    ],
    [
        "id" => 9,
        "designation" => "Google Pixelbook Go",
        "price" => 850,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/9/400"
    ],
    [
        "id" => 10,
        "designation" => "Samsung Galaxy Book Flex",
        "price" => 950,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/10/400"
    ],
    [
        "id" => 11,
        "designation" => "Huawei MateBook X Pro",
        "price" => 1100,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/11/400"
    ],
    [
        "id" => 12,
        "designation" => "LG Gram 17",
        "price" => 1200,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/12/400"
    ],
    [
        "id" => 13,
        "designation" => "Apple Mac Book Air",
        "price" => 1000,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/13/400"
    ],
    [
        "id" => 14,
        "designation" => "Dell Inspiron 15",
        "price" => 700,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/14/400"
    ],
    [
        "id" => 15,
        "designation" => "HP Envy 13",
        "price" => 850,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/15/400"
    ],
    [
        "id" => 16,
        "designation" => "Lenovo Yoga C940",
        "price" => 950,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/16/400"
    ],
    [
        "id" => 17,
        "designation" => "Microsoft Surface Pro 7",
        "price" => 750,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/17/400"
    ],
    [
        "id" => 18,
        "designation" => "Asus ROG Zephyrus G14",
        "price" => 1400,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/18/400"
    ],
    [
        "id" => 19,
        "designation" => "Acer Aspire 5",
        "price" => 500,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/19/400"
    ],
    [
        "id" => 20,
        "designation" => "Razer Blade 15",
        "price" => 1600,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/20/400"
    ],
    [
        "id" => 21,
        "designation" => "Google Pixelbook",
        "price" => 950,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/21/400"
    ],
    [
        "id" => 22,
        "designation" => "Samsung Chromebook 4",
        "price" => 400,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/22/400"
    ],
    [
        "id" => 23,
        "designation" => "Huawei MateBook D 14",
        "price" => 600,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/23/400"
    ],
    [
        "id" => 24,
        "designation" => "LG Gram 14",
        "price" => 1000,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/24/400"
    ],
    [
        "id" => 25,
        "designation" => "Apple Mac Mini",
        "price" => 800,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/25/400"
    ],
    [
        "id" => 26,
        "designation" => "Dell G5 15",
        "price" => 900,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/26/400"
    ],
    [
        "id" => 27,
        "designation" => "HP Omen 15",
        "price" => 1300,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/27/400"
    ],
    [
        "id" => 28,
        "designation" => "Lenovo Legion Y540",
        "price" => 1200,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/28/400"
    ],
    [
        "id" => 29,
        "designation" => "Microsoft Surface Go 2",
        "price" => 600,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/29/400"
    ],
    [
        "id" => 30,
        "designation" => "Asus TUF Gaming A15",
        "price" => 1000,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/30/400"
    ],
    [
        "id" => 31,
        "designation" => "Acer Nitro 5",
        "price" => 800,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/31/400"
    ],
    [
        "id" => 32,
        "designation" => "Razer Blade Pro 17",
        "price" => 2000,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/32/400"
    ],
    [
        "id" => 33,
        "designation" => "Google Pixel Slate",
        "price" => 900,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/33/400"
    ],
    [
        "id" => 34,
        "designation" => "Samsung Notebook 9 Pro",
        "price" => 1100,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/34/400"
    ],
    [
        "id" => 35,
        "designation" => "Huawei MateBook 13",
        "price" => 950,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/35/400"
    ],
    [
        "id" => 36,
        "designation" => "LG Gram 15",
        "price" => 1100,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/36/400"
    ],
    [
        "id" => 37,
        "designation" => "Asus VivoBook S15",
        "price" => 750,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/37/400"
    ],
    [
        "id" => 38,
        "designation" => "Acer Chromebook Spin 713",
        "price" => 650,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/38/400"
    ],
    [
        "id" => 39,
        "designation" => "Dell Latitude 7420",
        "price" => 1500,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/39/400"
    ],
    [
        "id" => 40,
        "designation" => "HP Pavilion x360",
        "price" => 700,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/40/400"
    ],
    [
        "id" => 41,
        "designation" => "Lenovo IdeaPad Flex 5",
        "price" => 650,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/41/400"
    ],
    [
        "id" => 42,
        "designation" => "Microsoft Surface Book 3",
        "price" => 2000,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/42/400"
    ],
    [
        "id" => 43,
        "designation" => "Asus Chromebook Flip C434",
        "price" => 600,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/43/400"
    ],
    [
        "id" => 44,
        "designation" => "Acer Predator Helios 300",
        "price" => 1200,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/44/400"
    ],
    [
        "id" => 45,
        "designation" => "Dell Precision 5550",
        "price" => 2100,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/45/400"
    ],
    [
        "id" => 46,
        "designation" => "HP ZBook Studio G7",
        "price" => 2200,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/46/400"
    ],
    [
        "id" => 47,
        "designation" => "Lenovo ThinkPad T14s",
        "price" => 1300,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/47/400"
    ],
    [
        "id" => 48,
        "designation" => "Microsoft Surface Studio 2",
        "price" => 3500,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/48/400"
    ],
    [
        "id" => 49,
        "designation" => "Asus ExpertBook B9450",
        "price" => 1400,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/49/400"
    ],
    [
        "id" => 50,
        "designation" => "Acer TravelMate P6",
        "price" => 1000,
        "stock" => rand(0, 199),
        "photoUrl" => "https://picsum.photos/id/50/400"
    ]
];
    return inertia('Home', [
        'products' => $products
    ]);
});
