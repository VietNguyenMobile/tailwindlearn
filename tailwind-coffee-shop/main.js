document.addEventListener("click", (e) => {
  const topMenu = document.getElementById("ct-top-menu");
  const toggleTopMenuIcon = document.getElementById("ct-toggle-top-menu-icon");
  // console.log("handleToggleTopMenu e: ", e.target);
  // console.log("toggleTopMenuIcon", toggleTopMenuIcon);
  if (toggleTopMenuIcon.contains(e.target)) {
    topMenu.classList.toggle("ct-top-menu-expanded");
    topMenu.classList.toggle("hidden");
  } else {
    console.log("handleToggleTopMenu else");
    if (topMenu.classList.contains("ct-top-menu-expanded")) {
      console.log("handleToggleTopMenu else if");
      topMenu.classList.remove("ct-top-menu-expanded");
      topMenu.classList.add("hidden");
    }
  }
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 1024px)").matches) {
    const topMenu = document.getElementById("ct-top-menu");
    topMenu.classList.remove("ct-top-menu-expanded");
    topMenu.classList.add("hidden");
  }
});
