function welcome() {
    console.log("Cześć! Witam na mojej pierwszej stronie");
}

welcome();


let removeHeader = document.querySelector(".js-removeHeader");
let body__header = document.querySelector(".body__header");

removeHeader.addEventListener("click", () => {

    body__header.remove();
});


let button = document.querySelector(".js-changeBackground");
let body = document.querySelector(".body");
let button__jsthemeName = document.querySelector(".button__jsthemeName");

button.addEventListener("click", () => {
    body.classList.toggle("button__whiteBackground");

    button__jsthemeName.innerText = body.classList.contains("button__whiteBackground") ? "szare" : "białe";
});
