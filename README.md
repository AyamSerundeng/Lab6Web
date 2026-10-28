# Lab 6 - JavaScript DOM dan Event Handling

**Nama:** Khairi Ramadhan Yudhatama (312510099)  
**Kelas:** Pemrograman Web (I251A)  
**Dosen:** Agung Nugroho, S.Kom., M.Kom.

---

## Tujuan Praktikum

1. Memahami DOM sebagai representasi dokumen HTML yang dapat diakses melalui JavaScript.
2. Menggunakan id, class, dan selector CSS untuk memilih elemen HTML.
3. Mengubah teks, atribut, kelas CSS, dan gaya elemen melalui JavaScript.
4. Menangani event pengguna menggunakan `addEventListener()`.
5. Membuat validasi form dan menampilkan pesan sesuai kondisi input.
6. Mengembangkan halaman interaktif dengan minimal tiga fungsi yang berjalan benar.

---

## Persiapan Praktikum

1. Buat folder kerja bernama `lab6_dom_event`.
2. Buat file `index.html`, `style.css`, dan `script.js`.
3. Hubungkan file CSS dan JavaScript dari `index.html`.
4. Buka halaman di browser dan aktifkan Developer Tools/Console.
5. Kerjakan latihan secara bertahap dan periksa hasil setiap langkah.

### Kerangka Awal `index.html`

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Praktikum DOM dan Event</title>
    <link rel="stylesheet" href="style.css" />
    <script src="script.js" defer></script>
  </head>
  <body>
    <h1 id="judul">Latihan DOM</h1>
    <p id="pesan">Belum ada tindakan.</p>
    <button id="tombolAksi" type="button">Klik Saya</button>
  </body>
</html>
```

Atribut `defer` membuat JavaScript dijalankan setelah HTML selesai diparsing, sehingga elemen yang dipilih sudah tersedia.

**Hasil di browser (tampilan awal):**

![Screenshot - Tampilan awal](screenshots/00-tampilan-awal.png)

---

## Latihan 1 Mengubah teks dengan DOM

Pilih elemen HTML berdasarkan id dan ubah kontennya.

Isi `script.js` dengan kode berikut:

```javascript
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";
```

**Langkah uji:**

- Jalankan `index.html` di browser.
- Pastikan judul dan paragraf berubah.
- Ubah pesan menjadi kalimat lain dan amati hasilnya.

**Hasil di browser:**

![Screenshot Latihan 1 - Mengubah teks dengan DOM](screenshots/01-mengubah-teks-dom.png)

---

## Latihan 2 Event click

Saat tombol diklik, ubah teks paragraf dan tampilkan waktu saat tindakan dilakukan.

Perbarui `script.js` (nonaktifkan/ubah bagian textContent sebelumnya jika perlu):

```javascript
const judul = document.getElementById("judul");
// const pesan = document.getElementById("pesan");
judul.textContent = "Belajar JavaScript DOM";
// pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

const tombol = document.getElementById("tombolAksi");
const pesan = document.getElementById("pesan");
tombol.addEventListener("click", function () {
  pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});
```

**Langkah uji:**

- Uji dengan menekan tombol beberapa kali dan pastikan pesan diperbarui dengan waktu klik.

**Hasil sebelum diklik:**

![Screenshot Latihan 2 - Sebelum diklik](screenshots/02-event-click-sebelum.png)

**Hasil setelah diklik:**

![Screenshot Latihan 2 - Setelah diklik](screenshots/02-event-click-sesudah.png)

---

## Latihan 3 Mengubah kelas dan gaya CSS

Tambahkan aturan CSS berikut ke `style.css`:

```css
.highlight {
  color: #173f75;
  background-color: #e6f1ff;
  border-left: 4px solid #3478c8;
  padding: 12px;
}
.teks-besar {
  font-size: 1.4rem;
}
```

Tambahkan elemen di `index.html` (di dalam `<body>`):

```html
<p id="teksGaya">Teks ini akan berubah gaya.</p>
<button id="tombolGaya" type="button">Ubah Gaya</button>
```

Tambahkan event listener di `script.js`:

```javascript
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");
tombolGaya.addEventListener("click", function () {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar");
});
```

**Langkah uji:**

- Amati perbedaan `classList.add()`, `classList.remove()`, dan `classList.toggle()`.
- Klik tombol "Ubah Gaya" untuk melihat perubahan kelas.

**Hasil sebelum diklik:**

![Screenshot Latihan 3 - Sebelum ubah gaya](screenshots/03-ubah-gaya-sebelum.png)

**Hasil sesudah diklik:**

![Screenshot Latihan 3 - Sesudah ubah gaya](screenshots/03-ubah-gaya-sesudah.png)

---

## Latihan 4 Event input dan penghitung karakter

Tambahkan di `index.html`:

```html
<label for="namaInput">Nama:</label>
<input type="text" id="namaInput" maxlength="40" />
<p>Jumlah karakter: <span id="jumlahKarakter">0</span></p>
```

Tambahkan di `script.js`:

```javascript
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");
namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});
```

**Langkah uji:**

- Uji dengan mengetik, menghapus, dan menempelkan teks.
- Pastikan jumlah karakter diperbarui secara real-time.

**Hasil di browser:**

![Screenshot Latihan 4 - Penghitung karakter](screenshots/04-penghitung-karakter.png)

---

## Latihan 5 Validasi form pendaftaran

Buat form di `index.html`:

```html
<form id="formPendaftaran" novalidate>
  <label for="nama">Nama lengkap</label>
  <input id="nama" name="nama" type="text" />
  <label for="email">Email</label>
  <input id="email" name="email" type="email" />
  <label for="usia">Usia</label>
  <input id="usia" name="usia" type="number" min="17" max="100" />
  <button type="submit">Daftar</button>
</form>
<p id="pesanForm" aria-live="polite"></p>
```

Tambahkan event listener di `script.js`:

```javascript
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const usiaInput = document.getElementById("usia").value;
  const usia = Number(usiaInput);
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nama === "") {
    pesanForm.textContent = "Nama wajib diisi.";
  } else if (!polaEmail.test(email)) {
    pesanForm.textContent = "Masukkan email yang valid.";
  } else if (
    usiaInput === "" ||
    !Number.isInteger(usia) ||
    usia < 17 ||
    usia > 100
  ) {
    pesanForm.textContent = "Usia harus berupa bilangan bulat 17–100.";
  } else {
    pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
    form.reset();
  }
});
```

**Langkah uji (minimal lima kondisi):**

- Semua kosong
- Nama kosong
- Email tidak valid
- Usia di bawah 17
- Semua input valid

**Hasil — Semua kosong:**

![Screenshot Latihan 5 - Semua kosong](screenshots/05-validasi-semua-kosong.png)

**Hasil Nama kosong:**

![Screenshot Latihan 5 - Nama kosong](screenshots/05-validasi-nama-kosong.png)

**Hasil Email tidak valid:**

![Screenshot Latihan 5 - Email tidak valid](screenshots/05-validasi-email-tidak-valid.png)

**Hasil Usia di bawah 17:**

![Screenshot Latihan 5 - Usia di bawah 17](screenshots/05-validasi-usia-bawah.png)

**Hasil Semua valid:**

![Screenshot Latihan 5 - Semua valid](screenshots/05-validasi-berhasil.png)

---

## Latihan 6 Daftar tugas sederhana (To-do List)

Buat section di `index.html`:

```html
<section>
  <h2>Daftar Tugas</h2>
  <label for="inputTugas">Tugas baru</label>
  <input id="inputTugas" type="text" />
  <button id="tambahTugas" type="button">Tambah</button>
  <p id="pesanTugas" aria-live="polite"></p>
  <ul id="daftarTugas"></ul>
</section>
```

Tambahkan di `script.js`:

```javascript
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
  const teks = inputTugas.value.trim();
  if (teks === "") {
    pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
    return;
  }
  const item = document.createElement("li");
  const label = document.createElement("span");
  const selesai = document.createElement("button");
  label.textContent = teks + " ";
  selesai.type = "button";
  selesai.textContent = "Tandai selesai";
  selesai.addEventListener("click", function () {
    item.classList.toggle("selesai");
    selesai.textContent = item.classList.contains("selesai")
      ? "Batalkan selesai"
      : "Tandai selesai";
  });
  item.append(label, selesai);
  daftarTugas.appendChild(item);
  inputTugas.value = "";
  pesanTugas.textContent = "Tugas ditambahkan.";
  inputTugas.focus();
});
```

Tambahkan di `style.css`:

```css
.selesai span {
  text-decoration: line-through;
  color: #687386;
}
li {
  margin-bottom: 8px;
}
```

**Langkah uji:**

- Masukkan tugas baru → muncul di daftar.
- Klik "Tandai selesai" → teks bergaris dan tombol berubah.
- Klik lagi untuk membatalkan.

**Hasil — Menambahkan tugas:**

![Screenshot Latihan 6 - Menambah tugas](screenshots/06-todo-tambah.png)

**Hasil — Menandai selesai:**

![Screenshot Latihan 6 - Tandai selesai](screenshots/06-todo-selesai.png)

---
