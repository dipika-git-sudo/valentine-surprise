(function () {
  const audio = document.getElementById("bgAudio");
  const btn = document.getElementById("audioBtn");

  if (audio && btn) {
    let playing = false;

    btn.addEventListener("click", async () => {
      try {
        if (!playing) {
          await audio.play(); // works after user click
          playing = true;
          btn.textContent = "🔊 Music On";
        } else {
          audio.pause();
          playing = false;
          btn.textContent = "🔈 Music Off";
        }
      } catch (e) {
        btn.textContent = "Tap again 🔊";
      }
    });
  }

  // Tiny confetti (no library)
  window.__confettiBurst = function () {
    const count = 80;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "confetti";
      p.style.left = Math.random() * 100 + "vw";
      p.style.top = "-10px";
      p.style.transform = `rotate(${Math.random() * 360}deg)`;
      p.style.animationDuration = 1.2 + Math.random() * 1.2 + "s";
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 2500);
    }
  };
})();
