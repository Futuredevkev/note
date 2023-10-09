document.addEventListener('DOMContentLoaded', function () {
    const noteTextArea = document.getElementById('popup-note-text');
    const paletaButton = document.getElementById('paleta');
    const colorPickerContainer = document.getElementById('color-picker-container');

    const colorPicker = new iro.ColorPicker(colorPickerContainer, {
        width: 150,
  color: "rgb(255, 0, 0)",
  borderWidth: 0,
  borderColor: "#fff",
  margin: 10,
  layout: [
    {
      component: iro.ui.Box,
    },
    {
      component: iro.ui.Slider,
      options: {
        id: 'hue-slider',
        sliderType: 'hue'
      }
    }
  ]
});

    // Ocultar el selector de colores al principio

    colorPickerContainer.style.display = 'none';

    // Evento para abrir el selector de colores al hacer clic en el botón de la paleta

    paletaButton.addEventListener('click', () => {
        if (colorPickerContainer.style.display === 'none') {
            colorPickerContainer.style.display = 'block';
        } else {
            colorPickerContainer.style.display = 'none';
        }
    });

    // Evento que se dispara cuando se selecciona un color en el selector de colores

    colorPicker.on("color:change", function (color) {
        noteTextArea.style.color = color.hexString;
    });
});
