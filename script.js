let currentPage = 1;
const totalPages = 6;

const music = document.getElementById("bgMusic");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const nextBtns = document.querySelectorAll(".nextBtn");

function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + page).classList.add("active");
}

yesBtn.addEventListener("click", () => {
  currentPage = 2;
  showPage(currentPage);
  music.play().catch(() => {});
});

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
