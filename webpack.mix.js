const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

mix.scripts([
   'resources/js/jquery-3.2.min.js',
   'resources/js/popper.min.js',
   'resources/js/main.js',
   'resources/js/jquery.mask.min.js',
   'resources/js/pace.js'  
], 'public/js/main.js');

mix.styles([
   'resources/css/main.css' 
], 'public/css/main.css');
