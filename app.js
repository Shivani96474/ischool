const hamberger = document.querySelector(".hamberger_icon");
const cross_icon = document.querySelector(".cross_icon");
const navlink = document.querySelector(".mobile_nav_links");
const link = document.querySelectorAll(".mobile_nav_links a");

hamberger.addEventListener("click", () => {
    navlink.classList.toggle("hidden");
    navlink.classList.toggle("transform");
});

cross_icon.addEventListener("click", () => {
    navlink.classList.toggle("hidden");
    navlink.classList.toggle("transform");
});
link.forEach((element) => {
    element.addEventListener("click", () => {
        navlink.classList.toggle("hidden");
        navlink.classList.toggle("transform");
    });
});