"use strict";
const themeToggle = document.getElementById("theme-toggle");
function setTheme(mode) {
  document.body.classList.toggle("light", mode === "light");
  localStorage.setItem("theme", mode);
}
function toggleTheme() {
  const current = document.body.classList.contains("light") ? "light" : "dark";
  setTheme(current === "light" ? "dark" : "light");
}
themeToggle?.addEventListener("click", toggleTheme);
const saved = localStorage.getItem("theme");
if (saved === "light") document.body.classList.add("light");
document.querySelectorAll(".nav a").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    if (id && id.startsWith("#")) {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
  });
});
