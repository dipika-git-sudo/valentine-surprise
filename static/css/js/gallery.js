(function () {
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const closeBtn = document.getElementById("lbClose");
  const imgs = document.querySelectorAll(".gimg");

  if (!lightbox || !lbImg || !closeBtn) return;

  function open(src) {
    lbImg.src = src;
    lightbox.classList.add("show");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function close() {
    lightbox.classList.remove("show");
    lightbox.setAttribute("aria-hidden", "true");
    lbImg.src = "";
  }

  imgs.forEach((img) => img.addEventListener("click", () => open(img.src)));
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
})();
