// ===== BACK TO TOP =====
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== GALLERY =====
const galleryImages = [
  "screenshot1.png",
  "screenshot2.png",
  "screenshot3.png",
  "screenshot4.png",
  "screenshot5.png",
  "screenshot6.png",
  "screenshot7.png"
];
let currentIndex = 0;
const galleryModal = document.getElementById("galleryModal");
const galleryImg = document.getElementById("galleryImg");
const openGalleryBtn = document.getElementById("openGalleryBtn");
const closeGalleryBtn = document.getElementById("closeGalleryBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

openGalleryBtn.addEventListener("click", () => {
  galleryModal.style.display = "block";
  galleryImg.src = galleryImages[currentIndex];
});

closeGalleryBtn.addEventListener("click", () => {
  galleryModal.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  galleryImg.src = galleryImages[currentIndex];
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  galleryImg.src = galleryImages[currentIndex];
});

window.addEventListener("click", (e) => {
  if (e.target == galleryModal) {
    galleryModal.style.display = "none";
  }
});

// ===== FADE IN ON SCROLL =====
const fadeSections = document.querySelectorAll(".fade-in-section");
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);
fadeSections.forEach(section => fadeObserver.observe(section));
