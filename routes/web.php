<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Home page
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

// About Us pages
Route::prefix('about')->group(function () {
    Route::get('/history', function () {
        return Inertia::render('about/history');
    })->name('about.history');
    
    Route::get('/vision-mission', function () {
        return Inertia::render('about/vision-mission');
    })->name('about.vision-mission');
    
    Route::get('/leadership', function () {
        return Inertia::render('about/leadership');
    })->name('about.leadership');
    
    Route::get('/organization', function () {
        return Inertia::render('about/organization');
    })->name('about.organization');
});

// What We Do pages
Route::get('/services', function () {
    return Inertia::render('services');
})->name('services');

Route::get('/products', function () {
    return Inertia::render('products');
})->name('products');

Route::get('/partners', function () {
    return Inertia::render('partners');
})->name('partners');

Route::get('/market-customers', function () {
    return Inertia::render('market-customers');
})->name('market-customers');

Route::get('/competitive-advantages', function () {
    return Inertia::render('competitive-advantages');
})->name('competitive-advantages');

// Pages
Route::get('/blog', function () {
    return Inertia::render('blog');
})->name('blog');

Route::get('/galleries', function () {
    return Inertia::render('galleries');
})->name('galleries');

// Dashboard (authenticated)
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';