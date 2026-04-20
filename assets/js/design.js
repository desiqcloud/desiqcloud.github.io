// FILTER FUNCTION
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".design-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    cards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 100);
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.8)";
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });

  });
});