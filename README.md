<img width="393" height="237" alt="Screenshot 2026-10-28 090059" src="https://github.com/user-attachments/assets/5e6b6231-bc32-446d-b531-7a21b8a5e262" /># Lab 6 - JavaScript DOM dan Event Handling

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

<img width="588" height="317" alt="Screenshot 2026-10-28 074158" src="https://github.com/user-attachments/assets/a6f2865f-5d85-4fa6-8d9b-03108c898e5a" />

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

<img width="602" height="322" alt="Screenshot 2026-10-28 074604" src="https://github.com/user-attachments/assets/1beb170c-14a7-43d8-bdc4-919496125fb6" />

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

<img width="608" height="332" alt="Screenshot 2026-10-28 075801" src="https://github.com/user-attachments/assets/425c4932-fb3c-45d2-b597-c4e440929cb7" />

**Hasil setelah diklik:**

<img width="597" height="327" alt="Screenshot 2026-10-28 075521" src="https://github.com/user-attachments/assets/b4a1c00e-d365-453a-8489-5b711a7ec19d" />


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

<img width="238" height="81" alt="Screenshot 2026-10-28 082151" src="https://github.com/user-attachments/assets/2f489df5-d747-4964-af64-5a8cd9875e03" />

**Hasil sesudah diklik:**

<img width="375" height="142" alt="Screenshot 2026-10-28 082231" src="https://github.com/user-attachments/assets/34f073c8-7695-400e-9aa1-00f0dcfd0347" />


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

<img width="296" height="75" alt="Screenshot 2026-10-28 083250" src="https://github.com/user-attachments/assets/591c480b-1207-4942-b9f3-2868e59c2958" />

<img width="286" height="85" alt="Screenshot 2026-10-28 083302" src="https://github.com/user-attachments/assets/70e47498-1124-4d83-a2ba-2493a524f48a" />

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

<img width="832" height="82" alt="Screenshot 2026-10-28 084143" src="https://github.com/user-attachments/assets/eaa9e73a-bfc3-4403-992f-1b373805ae08" />


**Hasil Nama kosong:**

<img width="817" height="96" alt="Screenshot 2026-10-28 084255" src="https://github.com/user-attachments/assets/3cbcb6d7-b6cb-4dc2-acd3-6e643a2a97c5" />

**Hasil Email tidak valid:**

<img width="836" height="77" alt="Screenshot 2026-10-28 084417" src="https://github.com/user-attachments/assets/b05e8b43-1006-434b-9ddf-1c89b7b2aec4" />

**Hasil Usia di bawah 17:**

<img width="815" height="93" alt="Screenshot 2026-10-28 084459" src="https://github.com/user-attachments/assets/6b42dbb5-ca3b-4632-a57a-4c92eb8e2743" />

**Hasil Semua valid:**

<img width="827" height="42" alt="Screenshot 2026-10-28 084536" src="https://github.com/user-attachments/assets/cf41e65d-e5d9-4f52-9b50-2ddfdb6e54ea" />

<img width="318" height="50" alt="Screenshot 2026-10-28 084552" src="https://github.com/user-attachments/assets/a04ac95d-8a5c-4c08-a015-71db27963bf9" />

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

<img width="416" height="130" alt="Screenshot 2026-10-28 085915" src="https://github.com/user-attachments/assets/c28c2a09-9fd1-44fd-a67b-9c4bbdb3897e" />


**Hasil — Menandai selesai:**

<img width="393" height="237" alt="Screenshot 2026-10-28 090059" src="https://github.com/user-attachments/assets/c7a78e7a-e73a-4e59-95b7-fa80fe93c05d" />


---
