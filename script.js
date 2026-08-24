const comingSoon = document.getElementById("coming-soon");
const pendaftaran = document.getElementById("pendaftaran");
const countdown = document.getElementById("countdown");

function cekWaktu() {
    const sekarang = new Date();

    // Target pukul 19:00 WIB
    const target = new Date();

    target.setHours(19, 0, 0, 0);

    const selisih = target - sekarang;

    // Jika sudah pukul 19:00
    if (selisih <= 0) {
        comingSoon.style.display = "none";
        pendaftaran.style.display = "block";

        countdown.textContent = "Pendaftaran dibuka!";

        return;
    }

    // Hitung jam, menit, detik
    const jam = Math.floor(selisih / (1000 * 60 * 60));
    const menit = Math.floor(
        (selisih % (1000 * 60 * 60)) / (1000 * 60)
    );
    const detik = Math.floor(
        (selisih % (1000 * 60)) / 1000
    );

    // Tampilkan countdown
    countdown.textContent =
        `${String(jam).padStart(2, "0")}:` +
        `${String(menit).padStart(2, "0")}:` +
        `${String(detik).padStart(2, "0")}`;
}

// Jalankan pertama kali
cekWaktu();

// Update setiap 1 detik
setInterval(cekWaktu, 1000);