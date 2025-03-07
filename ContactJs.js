document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll("input, textarea");
    const contactContainer = document.querySelector(".contact-container");

    // Efek focus pada input
    inputs.forEach(input => {
        input.addEventListener("focus", function () {
            this.style.borderColor = "#ff1493";
            this.style.boxShadow = "0 0 12px rgba(255, 20, 147, 0.7)";
        });

        input.addEventListener("blur", function () {
            this.style.borderColor = "#ff69b4";
            this.style.boxShadow = "none";
        });
    });

    // Validasi form sebelum submit
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah form terkirim langsung

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Harap isi semua kolom sebelum mengirim pesan!");
            return;
        }

        // Animasi efek sukses saat form dikirim
        contactContainer.style.animation = "pulse 0.5s ease-in-out";
        setTimeout(() => {
            contactContainer.style.animation = "";
        }, 500);

        // Menampilkan pesan sukses
        alert("Pesan Anda telah terkirim! Saya akan segera menghubungi Anda 😊");

        // Mengosongkan form setelah terkirim
        form.reset();
    });

    // Efek mengapung dan glowing
    let floating = 0;
    let direction = 1;
    setInterval(() => {
        floating += direction;
        if (floating > 10 || floating < -10) {
            direction *= -1;
        }
        contactContainer.style.transform = `translateY(${floating}px)`;
        contactContainer.style.boxShadow = `0 0 30px rgba(255, 20, 147, 0.4)`;
    }, 100);
});
