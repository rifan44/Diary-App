Nama : Rifan Maulana
NIM : 2430511018

Cara Menjalankan Project:

1. Buka folder project di VS Code.
2. Buka terminal di VS Code, pastikan berada di folder project.
3. Ketik perintah: npx expo start
4. Jika menggunakan Android Emulator, tekan huruf 'a' di terminal setelah muncul QR Code.

Fitur yang Diselesaikan:

- Pembuatan Design Tokens di src/styles/tokens.js
- Refactoring komponen DiaryCard menjadi interaktif (Pressable).
- Pembuatan komponen DiaryDetailModal.
- Penerapan layout responsif FlatList pada DiaryListScreen (1 kolom ke 2 kolom).
- Penambahan 2 entri data baru.

Penjelasan Breakpoint 600px:
Aplikasi menggunakan hook useWindowDimensions() dari React Native untuk mendeteksi lebar layar. Jika lebar (width) < 600px, state twoCols bernilai false sehingga FlatList merender 1 kolom. Jika lebar >= 600px, twoCols bernilai true sehingga FlatList mengubah numColumns menjadi 2, mengubah layout menjadi grid untuk memanfaatkan layar lebar.
