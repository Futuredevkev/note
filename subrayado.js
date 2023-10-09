let subrayadoActivado = false;
const underlineButton = document.getElementById("underline");

underlineButton.addEventListener('click', () => {
    subrayadoActivado = !subrayadoActivado;

    if (subrayadoActivado) {
        noteTextArea.style.textDecoration = "underline";
    } else {
        noteTextArea.style.textDecoration = "none";
    }
});
