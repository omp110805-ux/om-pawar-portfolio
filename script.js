const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section");

menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});

links.forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.remove("active"));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add("active");
    }
  });
}, { threshold: 0.45 });

sections.forEach(section => navObserver.observe(section));
document.getElementById("year").textContent = new Date().getFullYear();
