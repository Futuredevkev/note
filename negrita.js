
const boldButton = document.getElementById("bold");
let negritaActivada = false;


boldButton.addEventListener('click', () => {
    negritaActivada = !negritaActivada;

    if (negritaActivada) {
        noteTextArea.style.fontWeight = "bold";
    } else {
        noteTextArea.style.fontWeight = "normal";
    }

});
