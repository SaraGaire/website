// script.ts — handles theme toggle and smooth scroll

const themeToggle = document.getElementById("theme-toggle") as HTMLButtonElement;

function setTheme(mode: "light" | "dark") {
  document.body.classList.toggle("light", mode === "light");
  localStorage.setItem("theme", mode);
}

function toggleTheme() {
  const current = document.body.classList.contains("light") ? "light" : "dark";
  setTheme(current === "light" ? "dark" : "light");
}

themeToggle?.addEventListener("click", toggleTheme);

// Load saved theme
const saved = localStorage.getItem("theme");
if (saved === "light") document.body.classList.add("light");

// Smooth scroll for nav links
document.querySelectorAll(".nav a").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const id = (e.target as HTMLAnchorElement).getAttribute("href");
    if (id && id.startsWith("#")) {
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
  });
});
