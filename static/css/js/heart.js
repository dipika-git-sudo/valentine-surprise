(function () {
  const container = document.getElementById("hearts");
  if (!container) return;

  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";

    const left = Math.random() * 100;
    const size = 10 + Math.random() * 18;
    const duration = 4 + Math.random() * 4;
    const drift = Math.random() * 60 - 30;

    heart.style.left = left + "vw";
    heart.style.width = size + "px";
    heart.style.height = size + "px";
    heart.style.animationDuration = duration + "s";
    heart.style.setProperty("--drift", drift + "px");

    container.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
  }

  setInterval(createHeart, 220);
})();
