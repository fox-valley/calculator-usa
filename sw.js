{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 const CACHE_NAME = 'usa-calc-v1'; const ASSETS = [ 'index.html', 'manifest.json' ]; self.addEventListener('install', (e) => \{ e.waitUntil( caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)) ); \}); self.addEventListener('fetch', (e) => \{ e.respondWith( caches.match(e.request).then((response) => response || fetch(e.request)) ); \});}