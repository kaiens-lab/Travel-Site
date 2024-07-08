class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector(".site-header__menu-icon");
    this.menuContent = document.querySelector(".site-header__menu-content");
    this.siteHeader = document.querySelector(".site-header"); // 修改选择器
    if (this.menuIcon && this.menuContent && this.siteHeader) {
      this.event();
    } else {
      console.error("Menu icon or menu content not found.");
    }
  }

  event() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
  }

  toggleTheMenu() {
    if (this.menuContent) {
      this.menuContent.classList.toggle(
        "site-header__menu-content--is-visible"
      );
    } else {
      console.error("Menu content not found.");
    }
    if (this.siteHeader) {
      this.siteHeader.classList.toggle("site-header--is-expanded");
    } else {
      console.error("Site header not found.");
    }
    if (this.menuIcon) {
      this.menuIcon.classList.toggle("site-header__menu-icon--close-x");
    } else {
      console.error("Site header not found.");
    }
  }
}

export default MobileMenu;
