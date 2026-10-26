Nama : Rifan Maulana
NIM : 2430511018

Cara Menjalankan Project:

1. Buka folder project di VS Code.
2. Buka terminal di VS Code, pastikan berada di folder project.
3. Ketik perintah: npx expo start -c
4. Jika menggunakan Android Emulator, tekan huruf 'a' di terminal setelah muncul QR Code.

Fitur yang Diselesaikan:

- Expo Router dengan Root Stack dan Bottom Tabs.
- Shared state entries dan Like menggunakan `EntriesContext`.
- Home dengan pencarian dan dynamic route Detail.
- Screen Tambah, Pengaturan, Favorites, dan About.
- Sinkronisasi Like antara Home, Favorites, dan Detail.

Struktur Route:

- `app/(tabs)/index.js`: Home
- `app/(tabs)/create.js`: Tambah
- `app/(tabs)/settings.js`: Pengaturan
- `app/detail/[id].js`: Detail dengan dynamic route dan route parameter
- `app/favorites.js`: Favorites
- `app/about.js`: About

`app/_layout.js` menggunakan Stack sebagai root navigator. Folder `app/(tabs)` menggunakan Bottom Tabs untuk Home, Tambah, dan Pengaturan. Route `detail/[id].js` membaca `id` dari route parameter, sedangkan `EntriesContext` menyediakan shared state untuk entries dan Like.
