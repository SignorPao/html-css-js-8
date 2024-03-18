// mobile menu show/close
const menuBtn = document.querySelector(".burger"),
  mobileMenuList = document.querySelector(".mobile-menu"),
  menuBtnIcon = menuBtn.querySelector("img"),
  link = mobileMenuList.querySelectorAll('li');

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
