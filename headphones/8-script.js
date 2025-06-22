const toggleButton = document.querySelector(".toggle_button")
const toggleButtonIcon = document.querySelector(".toggle_button span")
const dropDownMenu = document.querySelector(".dropdown-menu")

toggleButton.addEventListener('click', function () {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");

    // Toggle between menu and close icons
    toggleButtonIcon.textContent = isOpen ? "close" : "menu";
});

//  Close dropdown if a link is clicked within it
dropDownMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        dropDownMenu.classList.remove("open");
        toggleButtonIcon.textContent = "menu"; // Reset icon
        document.body.style.overflow = "auto"; // Re-enable scrolling
    });
});