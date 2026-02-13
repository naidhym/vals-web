let currentPage = 1;
const totalPages = 7;

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

function confettiEffect() {
  for (let i = 0; i < 30; i++) {
    const conf = document.createElement("div");
    conf.innerText = "💖";
    conf.style.position = "fixed";
    conf.style.left = Math.random() * window.innerWidth + "px";
    conf.style.top = "-20px";
    conf.style.fontSize = "20px";
    conf.style.animation = "fall 3s linear forwards";
    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 3000);
  }
}

document.getElementById("yesBtn").addEventListener("click", () => {
  confettiEffect();
  nextPage();
});

const text = document.getElementById("typingText");

if (text) {
  const original = text.innerHTML;
  text.innerHTML = "";
  let i = 0;

  function typeWriter() {
    if (i < original.length) {

      if (original.substring(i, i+4) === "<br>") {
        text.innerHTML += "<br>";
        i += 4;
      } else {
        text.innerHTML += original.charAt(i);
        i++;
      }

      setTimeout(typeWriter, 55);
    }
  }

  setTimeout(typeWriter, 1500);
}

// ===== UNLOCK LOGIC =====

const holdBtn = document.getElementById("holdButton");
const progressBar = document.querySelector(".progress-bar");

let holdTime = 0;
let holdInterval;
const requiredHold = 2000; // 2 detik
const circumference = 2 * Math.PI * 85;

if (holdBtn) {

  holdBtn.addEventListener("mousedown", startHold);
  holdBtn.addEventListener("touchstart", startHold);

  holdBtn.addEventListener("mouseup", resetHold);
  holdBtn.addEventListener("mouseleave", resetHold);
  holdBtn.addEventListener("touchend", resetHold);

  function startHold() {
    holdInterval = setInterval(() => {
      holdTime += 50;
      const progress = holdTime / requiredHold;
      progressBar.style.strokeDashoffset = circumference - (progress * circumference);

      if (holdTime >= requiredHold) {
        clearInterval(holdInterval);
        goToLongtext();
      }

    }, 50);
  }

  function resetHold() {
    clearInterval(holdInterval);
    holdTime = 0;
    progressBar.style.strokeDashoffset = circumference;
  }

  function goToLongtext() {
  clearInterval(holdInterval);

  currentPage = 6; // langsung ke longtext
  showPage(currentPage);

  resetHold();
  }
}
