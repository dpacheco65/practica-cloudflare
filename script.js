// Mostrar fecha/hora de carga
const lastLoadEl = document.getElementById("last-load");
if (lastLoadEl) {
  const now = new Date();
  lastLoadEl.textContent = now.toLocaleString("es-AR", {
    dateStyle: "long",
    timeStyle: "short",
  });
}

// Toggle de tema claro/oscuro con persistencia
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const saved = localStorage.getItem("theme");
if (saved === "light") root.setAttribute("data-theme", "light");

themeToggle?.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") === "light";
  if (isLight) {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "dark");
  } else {
    root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});
