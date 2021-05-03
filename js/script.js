{
    const welcome = () => {
        console.log("Cześć! Witam na mojej pierwszej stronie");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const button__jsthemeName = document.querySelector(".button__jsthemeName");
        body.classList.toggle("button__whiteBackground");
        button__jsthemeName.innerText = body.classList.contains("button__whiteBackground") ? "szare" : "białe";
    };

    const deleteHeader = () => {
        const body__header = document.querySelector(".body__header");
        body__header.remove();
    };

    const init = () => {
        const button = document.querySelector(".js-changeBackground");
        button.addEventListener("click", toggleBackground);
        const removeHeader = document.querySelector(".js-removeHeader");
        removeHeader.addEventListener("click", deleteHeader);

        welcome();
    };

    init();
}


















