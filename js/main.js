// mobile menu show/close
const menuBtn = document.querySelector(".burger"),
  mobileMenuList = document.querySelector(".mobile-menu"),
  menuBtnIcon = menuBtn.querySelector("img"),
  link = mobileMenuList.querySelectorAll("li");

menuBtn.addEventListener("click", () => {
  mobileMenuList.classList.toggle("open");
  const isOpen = mobileMenuList.classList.contains("open");
  menuBtnIcon.setAttribute(
    "src",
    isOpen ? "/img/close.svg" : "/img/menu-burger.svg"
  );
});

// remove mobile menu when mobile menu link click
link.forEach((l) =>
  l.addEventListener("click", () => {
    mobileMenuList.classList.remove("open");
    menuBtnIcon.setAttribute("src", "/img/menu-burger.svg");
  })
);

// scroll to top
const scrollUp = () => {
  const scrollUp = document.querySelector(".scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
