function setActiveNav() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    const isActive =
      href === current ||
      (current === "" && href === "index.html") ||
      (current === "index.html" && href === "index.html");
    link.classList.toggle("active", isActive);
  });
}

function setCopyrightYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
}

setActiveNav();
setCopyrightYear();
