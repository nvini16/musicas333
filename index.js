
class mobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log("bone"));
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}


const mobileNavbarInstance = new mobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNavbarInstance.init();