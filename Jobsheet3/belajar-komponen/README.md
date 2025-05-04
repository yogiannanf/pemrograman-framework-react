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

### Praktikum 2: Mengimpor dan Mengekspor Komponen

### Langkah 1: Buat Komponen Baru

Buatlah file baru di src/components/gallery.tsx berisi kode seperti berikut:

![alt text](public/images/compt-gallery.png)

### Langkah 2: Impor Komponen

Lakukan impor komponen di src/app/page.tsx seperti berikut ini. Hapus kode komponen lama Profile, lalu sesuaikan dengan komponen baru Gallery yang telah dibuat.

![alt text](public/images/page-gallery.png)

### *Soal 2*

Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

![alt text](public/images/004930.png)

**Yang saya pelajari:**
1. Cara membuat komponen terpisah (Gallery) yang menggunakan komponen lain (Profile)
2. Penggunaan export dan import untuk berbagi komponen
3. Penggunaan className untuk styling dengan Tailwind CSS
4. Konsep komponen reusable dalam React

**Tampilan saat ini:**
- Menggunakan class columns-3 dari Tailwind untuk layout 3 kolom
- Komponen Gallery membungkus 3 komponen Profile
- Struktur komponen menjadi lebih modular dan maintainable
- Layout tetap responsive dengan Tailwind CSS

### Menulis Markup dengan JSX

Mengubah atribut di markup yang sudah ada bisa menjadi membosankan. Disarankan untuk menggunakan converter untuk mengubah HTML dan SVG-mu menjadi JSX. Konverter sangat berguna dalam praktiknya, namun tetap ada baiknya Anda perlu memahami kodenya sehingga Anda dapat menulis JSX sendiri dengan nyaman.

Berikut hasil jadinya:

- components/soaltiga.tsx

![alt text](public/images/percobaansoal3.png)

- app/page.tsx

![alt text](public/images/page_percobaansoal3.png)

- hasilnya :

![alt text](public/images/011922.png)

### *Soal 3*

Silakan perbaiki kode JSX berikut ini. Anda boleh menggunakan konverter atau perbaiki secara manual.

- components/soaltiga.tsx

![alt text](public/images/compt_soal3.png)

#### Perbaikan yang Dilakukan:

1. **Menambahkan Parent Element**
   - Membungkus semua konten dalam `<div className="intro">`
   - Memastikan hanya ada satu root element

2. **Menutup Semua Tag**
   - Mengganti `<br>` menjadi `<br />`
   - Memastikan semua tag memiliki closing tag

3. **Menggunakan camelCase**
   - Mengubah `class` menjadi `className`
   - Mengikuti konvensi penamaan React

4. **Memperbaiki Nested Tags**
   - Memastikan tag bersarang ditutup dengan benar
   - Menghindari tag yang tumpang tindih

- hasilnya :

![alt text](public/images/012825.png)

### Praktikum 3: Menggunakan JSX dinamis

### Langkah 1: Buat Komponen Baru

Buatlah file baru di src/components/todolist.tsx berisi kode seperti berikut:

![alt text](public/images/todolist_lngkh1.png)

### *Soal 4*

Kode di atas masih terdapat error, silakan diperbaiki.

![alt text](public/images/todolist_soal.png)

**Error yang diperbaiki:**
1. `{person}` tidak bisa langsung dirender karena merupakan object
2. Mengakses properti name dengan `{person.name}`

### Langkah 2: Impor Komponen

Lakukan impor komponen di src/app/page.tsx seperti berikut ini.

![alt text](public/images/importkomponen_langkah2.png)

### *Soal 5*

Buka file src/components/todolist.tsx lakukan ekstrak URL gambar ke dalam objek person.

![alt text](public/images/soal5.png)

Apakah ada perbedaan pada tampilan web saat ini?

**Perbedaan Tampilan:**
- Tidak ada perbedaan visual pada tampilan web
- Perubahan hanya pada struktur kode untuk maintainability yang lebih baik

- Hasilnya :
![alt text](public/images/015531.png)

### Langkah 3: Ubah ekspresi URL di src

Tetap di file src/components/todolist.tsx ubahlah objek person dan tambah variabel baseUrl seperti di bawah ini. URL lengkap gambar dibagi menjadi empat bagian: URL dasar, imageId, imageSize, dan ekstensi file.

Kita ingin URL gambar menggabungkan atribut-atribut ini bersama-sama: URL dasar (selalu 'https://i.imgur.com/'), imageId ('7vQD0fP'), imageSize ('s'), dan ekstensi file (selalu '.jpg'). Namun, ada yang salah dengan atribut src.

Bisakah anda memperbaikinya?

![alt text](public/images/kodesebelum_langkah3.png)

Perbaikannya :

![alt text](public/images/kodesesudah_langkah3.png)

### *Soal 6*

Perbaiki kode tersebut pada bagian atribut src. Kode lainnya dapat Anda sesuaikan dari jawaban soal sebelumnya. Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

**Kode yang Diperbaiki:**
```tsx
// filepath: src/components/todolist.tsx
<img
  className="avatar"
  src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
  alt={person.name}
/>
```

**Yang Saya Pelajari:**
1. Penggunaan template literal (``) untuk menggabungkan string dan variabel
2. Cara menggabungkan beberapa bagian URL menjadi satu string
3. Penggunaan kurung kurawal {} untuk ekspresi JavaScript di JSX
4. Pemisahan URL menjadi komponen yang lebih kecil untuk memudahkan maintenance

### Catatan:

Untuk memeriksa apakah perbaikan Anda berhasil, coba ubah nilai dari imageSize menjadi 'b'. Gambar harus menyesuaikan ukuran setelah diubah.

![alt text](public/images/022358.png)

untuk ukuran gambar Gregorio Y. Zara lebih besar.