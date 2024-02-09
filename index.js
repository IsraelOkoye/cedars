
let burgerMenu = document.getElementById("burger_menu");
burgerMenu.addEventListener("click", () => {
    let cancel_burger = document.getElementById("cancel_burger");
    let nav_links = document.getElementById("nav_links");
    cancel_burger.style.display = "flex";
    nav_links.style.display = "flex";
    nav_links.style.backgroundColor = "#f1e856";
})

let q = 3;
console.log(q);