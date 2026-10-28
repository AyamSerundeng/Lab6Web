
const form = document.getElementById("formDaftar");
const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const sesiSelect = document.getElementById("sesi");

const jumlahKarakter = document.getElementById("jumlahKarakter");
const ringNama = document.getElementById("ringNama");
const ringEmail = document.getElementById("ringEmail");
const ringSesi = document.getElementById("ringSesi");

const pesanForm = document.getElementById("pesanForm");
const tombolReset = document.getElementById("tombolReset");


namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
    ringNama.textContent = namaInput.value.trim() === "" ? "-" : namaInput.value;
});


emailInput.addEventListener("input", function () {
    ringEmail.textContent = emailInput.value.trim() === "" ? "-" : emailInput.value;
});


sesiSelect.addEventListener("change", function () {
    const teksSesi = sesiSelect.options[sesiSelect.selectedIndex].text;
    ringSesi.textContent = sesiSelect.value === "" ? "-" : teksSesi;
});


function tampilkanPesan(teks, tipe) {
    pesanForm.textContent = teks;
    pesanForm.className = "pesan " + tipe;
}


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = namaInput.value.trim();
    const email = emailInput.value.trim();
    const sesi = sesiSelect.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        tampilkanPesan("Nama wajib diisi.", "error");
    } else if (!polaEmail.test(email)) {
        tampilkanPesan("Masukkan email yang valid.", "error");
    } else if (sesi === "") {
        tampilkanPesan("Pilih sesi workshop terlebih dahulu.", "error");
    } else {
        tampilkanPesan("Pendaftaran berhasil! Selamat datang, " + nama + ".", "success");
    }
});


tombolReset.addEventListener("click", function () {
    form.reset();
    jumlahKarakter.textContent = "0";
    ringNama.textContent = "-";
    ringEmail.textContent = "-";
    ringSesi.textContent = "-";
    pesanForm.className = "pesan";
    pesanForm.textContent = "";
    namaInput.focus();
});