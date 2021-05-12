{
    const welcome = () => {
        console.log("Cześć! Witam na mojej pierwszej stronie");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const buttonText = document.querySelector(".js-button__text");
        body.classList.toggle("body__whiteBackground");
        buttonText.innerText = body.classList.contains("body__whiteBackground") ? "szare" : "białe";
    };

    const deleteHeader = () => {
        const bodyHeader = document.querySelector(".js-body__header");
        bodyHeader.remove();
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackground");
        changeBackgroundButton.addEventListener("click", toggleBackground);
        const removeButton = document.querySelector(".js-removeHeader");
        removeButton.addEventListener("click", deleteHeader);

        welcome();
    };

    init();
}


















