const menuButton = document.querySelector(".menu-toggle");
const siteHeader = document.querySelector(".site-header");
const siteNavigation = document.querySelector("#site-navigation");

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  siteHeader.classList.toggle("menu-open", !isExpanded);
});

siteNavigation.addEventListener("click", (event) => {
  if (event.target.closest("a") && menuButton.getAttribute("aria-expanded") === "true") {
    menuButton.click();
  }
});

siteHeader.classList.add("menu-ready");
