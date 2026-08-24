const comingSoon = document.getElementById("coming-soon");
const pendaftaran = document.getElementById("pendaftaran");
const countdown = document.getElementById("countdown");

// Waktu pembukaan:
// Selasa, 25 Agustus 2026 pukul 19:00 WIB
const target = new Date("2026-08-25T19:00:00+07:00");

function cekWaktu() {

    const sekarang = new Date();

    const selisih = target - sekarang;

    // Jika sudah mencapai 19:00 WIB
    if (selisih <= 0) {

        comingSoon.style.display = "none";
        pendaftaran.style.display = "block";

        return;
    }

    // Hitung jam
    const jam = Math.floor(
        selisih / (1000 * 60 * 60)
    );

    // Hitung menit
    const menit = Math.floor(
        (selisih % (1000 * 60 * 60)) / (1000 * 60)
    );

    // Hitung detik
    const detik = Math.floor(
        (selisih % (1000 * 60)) / 1000
    );

    countdown.textContent =
        `${String(jam).padStart(2, "0")}:` +
        `${String(menit).padStart(2, "0")}:` +
        `${String(detik).padStart(2, "0")}`;
}

// Jalankan saat halaman dibuka
cekWaktu();

// Perbarui setiap 1 detik
setInterval(cekWaktu, 1000);