//cambio de modo Dark-light
const modoOscuro = document.getElementById("darkMode").addEventListener("click", cambiarModoOscuro);

function cambiarModoOscuro() {
    const main = document.querySelector("html");
    let btn = document.getElementById("darkMode")
    let atributo = main.getAttribute("data-bs-theme");
    if (atributo == "light") {
        main.setAttribute("data-bs-theme", "dark");
        btn.innerHTML = '<i class="bi bi-brightness-high"></i>'
    }
    else {
        main.setAttribute("data-bs-theme", "light");
        btn.innerHTML = '<i class="bi bi-moon-stars-fill"></i>'
    }
};

// boton arriba
let goUp = document.getElementById("goUp");
window.onscroll = () => {
    if (window.scrollY < 200) {
        goUp.classList.replace("scrollDown", "scrollUp");
    }
    else {
        goUp.classList.replace("scrollUp", "scrollDown");
    }
}
const arriba = document.getElementById("goUp").addEventListener("click", () => { window.scrollTo(0, 0); });
