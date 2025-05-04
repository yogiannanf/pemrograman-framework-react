# **Laporan Praktikum: Membuat Project Pertama ReactJS**
---

## Nama  : Yogianna Nur Febrianti
## Kelas : TI 3A
## Absen : 23

### Praktikum

### Langkah 1: Buat Folder Baru

Buatlah folder baru bernama belajar-react lalu di dalam folder tersebut, jalankan terminal dengan mengetikkan perintah berikut:

```
npx create-next-app
```

### Langkah 2: Buat project baru

<img src = public/images/222339.png>

<img src = public/images/222351.png>

### *Soal 1*

Pada gambar tersebut, silakan Anda browsing apa yang dimaksud dengan:

a. **TypeScript**
   - TypeScript adalah bahasa pemrograman yang merupakan superset dari JavaScript
   - Menambahkan fitur static typing pada JavaScript
   - Memungkinkan pendeteksian error lebih awal saat development
   - Memberikan IntelliSense yang lebih baik di editor kode

b. **ESLint**
   - Tool untuk menganalisis kode JavaScript/TypeScript
   - Membantu menemukan dan memperbaiki masalah dalam kode
   - Menjaga konsistensi style coding
   - Mencegah bug dan error umum dalam kode

c. **Tailwind CSS**
   - Framework CSS utility-first
   - Menyediakan class-class kecil yang dapat digunakan untuk styling
   - Memungkinkan styling langsung dalam HTML/JSX
   - Sangat customizable dan mudah dioptimasi

d. **App Router**
   - Sistem routing baru di Next.js 13+
   - Berbasis file-system routing
   - Mendukung server components secara default
   - Menyediakan fitur loading, error handling, dan nested layouts

e. **Import alias**
   - Cara untuk membuat shortcut dalam import module
   - Memudahkan import dari folder yang dalam
   - Menghindari import path yang panjang (../../)
   - Dikonfigurasi dalam tsconfig.json atau jsconfig.json

### Langkah 3: Buka dengan VS Code

Setelah selesai proses langkah sebelumnya, ketik per baris di terminal seperti berikut untuk masuk ke folder project dan dibuka dengan VS Code.

```
cd hello-world
(enter)
```
```
code . 
(enter)
```

Maka VS Code akan membuka project react Anda yang telah dibuat bernama hello-world.

Perhatikan struktur file dan folder project react yang telah kita buat ini. Terlihat bahwa inisial Git dalam project ini sudah termasuk, sehingga Anda cukup membuat repository di akun GitHub lalu mengonekkan dengan project ini. Silakan cari tau bagaimana setup link repository ke project ini.

### *Soal 2*

Struktur project Next.js dan kegunaannya:

1. **Folder .next/**
   - Berisi hasil build dari aplikasi
   - Menyimpan cache dan output kompilasi
   - Digunakan untuk production deployment
   - Tidak perlu dimodifikasi secara manual

2. **Folder node_modules/**
   - Menyimpan semua dependencies/package yang diinstall
   - Dikelola oleh package manager (npm/yarn)
   - Terdaftar dalam package.json
   - Tidak perlu diversion control (masuk .gitignore)

3. **Folder public/**
   - Menyimpan asset statis seperti gambar, font, dll
   - Dapat diakses langsung melalui root URL
   - File-file disini tidak akan diproses oleh webpack
   - Berguna untuk robots.txt, favicon.ico, dll

4. **Folder src/app/**
   - Berisi komponen-komponen React
   - Menggunakan sistem App Router Next.js 13+
   - File page.tsx adalah root page
   - Mendukung nested routing dan layouts

5. **File .eslintrc.json**
   - Konfigurasi ESLint
   - Mengatur aturan linting
   - Menentukan code style
   - Dapat dikustomisasi sesuai kebutuhan

6. **File .gitignore**
   - Menentukan file/folder yang tidak masuk version control
   - Mengabaikan node_modules, .next, dll
   - Mencegah file yang tidak perlu masuk ke repository

7. **File next.config.js**
   - Konfigurasi Next.js
   - Mengatur fitur Next.js
   - Setting build time
   - Konfigurasi routing dan optimasi

8. **File package.json**
   - Mendefinisikan dependencies project
   - Menyimpan script untuk development
   - Metadata project
   - Konfigurasi project

9. **File README.md**
   - Dokumentasi project
   - Instruksi instalasi dan penggunaan
   - Informasi penting tentang project
   - Best practices dan guidelines

10. **File tailwind.config.ts**
    - Konfigurasi Tailwind CSS
    - Customisasi theme
    - Menentukan content yang akan di-parse
    - Setting plugin Tailwind

11. **File tsconfig.json**
    - Konfigurasi TypeScript
    - Mengatur compiler options
    - Menentukan path aliases
    - Setting type checking

### Langkah 4: Run

Sekarang kita coba running project pertama kita dengan menjalankan perintah berikut di terminal VS Code.

<img src = public/images/222655.png>

Tunggu proses kompilasi hingga selesai. Lalu Anda dapat membuka alamat localhost di browser: http://localhost:3000/

Browser telah tampil seperti gambar berikut ini

<img src = public/images/222646.png>

### *Soal 3*

Gantilah teks pada bagian atas dengan Nama - NIM Anda. 

Jawaban dibuktikan dengan hasil screenshot.

<img src = public/images/soal3.png>

Ketika Anda telah berhasil mengganti teks tersebut, Anda tidak perlu menjalankan perintah npm run dev dan tidak juga diperlukan me-reload halaman di browser. Tiba-tiba perubahan itu tampil, Mengapa terjadi demikian? Jelaskan!

Karena Fast Refresh di Next.js memungkinkan perubahan kode langsung terlihat di browser tanpa reload manual. Saat kode diubah, Next.js otomatis mengompilasi ulang bagian yang berubah dan memperbarui tampilan sambil mempertahankan state aplikasi, sehingga sangat membantu dalam proses pengembangan.

