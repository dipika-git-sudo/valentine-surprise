(function () {
  // ===== Music Toggle =====
  const audio = document.getElementById("bgAudio");
  const btn = document.getElementById("audioBtn");

  if (audio && btn) {
    let playing = false;

    btn.addEventListener("click", async () => {
      try {
        if (!playing) {
          audio.volume = 0.9;
          await audio.play(); // must be user click
          playing = true;
          btn.textContent = "🔊 Music On";
        } else {
          audio.pause();
          playing = false;
          btn.textContent = "🔈 Music";
        }
      } catch (e) {
        btn.textContent = "Tap again 🔊";
        console.log("Audio play blocked:", e);
      }
    });
  }

  // ===== Confetti Burst =====
  window.__confettiBurst = function () {
    const count = 90;
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

  // ===== Extra Hearts Burst =====
  window.__heartBurst = function () {
    const container = document.getElementById("hearts");
    if (!container) return;

    for (let i = 0; i < 22; i++) {
      const heart = document.createElement("div");
      heart.className = "heart";

      const left = 40 + Math.random() * 20; // center-ish
      const size = 14 + Math.random() * 22;
      const duration = 2 + Math.random() * 2;
      const drift = Math.random() * 160 - 80;

      heart.style.left = left + "vw";
      heart.style.width = size + "px";
      heart.style.height = size + "px";
      heart.style.animationDuration = duration + "s";
      heart.style.setProperty("--drift", drift + "px");

      container.appendChild(heart);
      setTimeout(() => heart.remove(), duration * 1000);
    }
  };

  // ===== Proposal (No button runs away + Yes celebration) =====
  const noBtn = document.getElementById("noBtn");
  const msg = document.getElementById("proposalMsg");

  if (noBtn) {
    noBtn.addEventListener("mouseenter", () => {
      const x = Math.random() * 240 - 120;
      const y = Math.random() * 120 - 60;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  window.sayYes = function () {
    if (msg) msg.textContent = "Yayyy! 💖 I knew it — forever starts now ✨";
    if (window.__confettiBurst) window.__confettiBurst();
    if (window.__heartBurst) window.__heartBurst();
  };
})();
