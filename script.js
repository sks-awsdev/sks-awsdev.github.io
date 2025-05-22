// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  // Fade in cards one by one on scroll
  const cards = document.querySelectorAll(".glassy-card");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      } else {
        card.style.opacity = 0;
        card.style.transform = "translateY(40px)";
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial call on load
});
