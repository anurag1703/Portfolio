function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (menu && icon) {
    const isOpen = menu.classList.toggle("open");
    icon.classList.toggle("open");

    // Accessibility: Update aria-expanded
    icon.setAttribute("aria-expanded", isOpen);
  } else {
    console.error("Menu or Hamburger Icon element not found.");
  }
}
