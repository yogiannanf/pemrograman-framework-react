# **Laporan Praktikum: Components, JSX, dan Props**
---

## Nama  : Yogianna Nur Febrianti
## Kelas : TI 3A
## Absen : 23

### Praktikum 1: Mendefinisikan Komponen

### Langkah 1: Buat Folder Baru

Buatlah folder baru bernama 03-belajar-komponen lalu di dalam folder tersebut, jalankan terminal dengan mengetikkan perintah berikut:

<img src = public/images/000807.png>

Perhatian: Anda perlu membuat repo baru di GitHub dengan nama yang sama yaitu 03-belajar-komponen.

### Langkah 2: Buat Komponen Baru

Buatlah folder baru dan file baru di src/components/profile.tsx lalu ketik kode berikut ini.

<img src = public/images/langkh2.png>

Kode tersebut menggunakan komponen Image bawaan dari Next.js.

Komponen React adalah fungsi JavaScript biasa, tetapi nama mereka harus dimulai dengan huruf kapital atau tidak akan berfungsi!

### Langkah 3: Import Komponen

Lakukan import komponen Profile ke src/app/page.tsx

```
import Profile from "../components/profile";
```

### *Soal 1*

Ubah isi kode Home() sehingga dapat tampil seperti berikut dengan memanfaatkan komponen Profile() yang tadi sudah dibuat dari langkah 1 tersebut!

Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana Anda solve error tersebut?

<img src = public/images/002517.png>

<img src = public/images/soal1.png>

**Yang saya pelajari:**
1. Membuat dan menggunakan komponen React
2. Mengatur layout menggunakan flexbox CSS
3. Menggunakan next/image untuk optimasi gambar
4. Konfigurasi domain gambar di Next.js

**Cara mengatasi error:**
1. Error "hostname not configured": Menambahkan domain 'i.imgur.com' di next.config.js
2. Error layout: Menggunakan flexbox untuk mengatur posisi gambar
3. Error styling: Menambahkan text-align center untuk judul