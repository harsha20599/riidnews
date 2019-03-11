importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');
// importScripts('./node_modules/workbox-sw/build/workbox-sw.js');
const staticAssets = [
    './',
    './styles.css',
    './app.js',
    './fallback.json',
    './images/logo.png'
];

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

// wb.precache(staticAssets);

workbox.precaching.precacheAndRoute([
    './',
    './styles.css',
    './app.js',
    './fallback.json',
    './images/logo.png'
]);