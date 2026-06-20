
// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.onclick = function () {
  navMenu.classList.toggle("active");
};

// Menutup menu setelah link diklik
const navLinks = document.querySelectorAll(".nav-menu a");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = function () {
    navMenu.classList.remove("active");
  };
}



// FILTER EVENT
const filterButtons = document.querySelectorAll(".filter-btn");
const eventCards = document.querySelectorAll(".event-card");

for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].onclick = function () {
    
    // Menghapus class active dari semua tombol
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }

    // Menambahkan class active ke tombol yang diklik
    filterButtons[i].classList.add("active");

    const filterValue = filterButtons[i].getAttribute("data-filter");

    for (let k = 0; k < eventCards.length; k++) {
      const status = eventCards[k].getAttribute("data-status");

      if (filterValue === "all" || filterValue === status) {
        eventCards[k].style.display = "block";
      } else {
        eventCards[k].style.display = "none";
      }
    }
  };
}



// LIGHTBOX GALERI
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

for (let i = 0; i < galleryImages.length; i++) {
  galleryImages[i].onclick = function () {
    lightbox.style.display = "flex";
    lightboxImg.src = galleryImages[i].src;
  };
}

closeLightbox.onclick = function () {
  lightbox.style.display = "none";
};

lightbox.onclick = function (event) {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
};


// VALIDASI FORM KONTAK
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.onsubmit = function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || subject === "" || message === "") {
    formMessage.innerHTML = "Semua field wajib diisi.";
    formMessage.style.color = "red";
    return;
  }

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    formMessage.innerHTML = "Format email tidak valid.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.innerHTML = "Pesan berhasil dikirim!";
  formMessage.style.color = "green";

  contactForm.reset();
};


// COUNTER ANIMASI
const counters = document.querySelectorAll(".counter");
let sudahJalan = false;

function jalankanCounter() {
  for (let i = 0; i < counters.length; i++) {
    let target = Number(counters[i].getAttribute("data-target"));
    let angka = 0;
    let tambah = target / 100;

    let interval = setInterval(function () {
      angka = angka + tambah;

      if (angka >= target) {
        counters[i].innerHTML = target;
        clearInterval(interval);
      } else {
        counters[i].innerHTML = Math.floor(angka);
      }
    }, 20);
  }
}

window.onscroll = function () {
  const about = document.getElementById("about");
  const posisiAbout = about.offsetTop;

  if (window.scrollY >= posisiAbout - 400 && sudahJalan === false) {
    jalankanCounter();
    sudahJalan = true;
  }
};