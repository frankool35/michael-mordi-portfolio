
/* =========================================
   MICHAEL MORDI PORTFOLIO
   Interactive functionality
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    // Mobile navigation
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("is-open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        // Close the mobile menu after a navigation link is selected.
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
                menuToggle.textContent = "☰";
            });
        });

        // Close the menu if the browser returns to desktop width.
        window.addEventListener("resize", () => {
            if (window.innerWidth > 700) {
                navLinks.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
                menuToggle.textContent = "☰";
            }
        });
    }

    // Automatically display the current year in the footer.
    const currentYear = document.getElementById("current-year");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Report a missing profile photo in the browser console.
    const profilePhoto = document.querySelector(".profile-photo");

    if (profilePhoto) {
        profilePhoto.addEventListener("error", () => {
            console.warn(
                "Profile photo could not be loaded. Check the image filename and path."
            );
        });
    }
});
