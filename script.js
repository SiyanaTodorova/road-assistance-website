function toggleMenu() {
    const overlayMenu = document.getElementById("overlay-menu");
    if (overlayMenu.style.width === "100%") {
        overlayMenu.style.width = "0";
    } else {
        overlayMenu.style.width = "100%";
    }
}

