document.addEventListener('DOMContentLoaded', function () {
    const fontSizeButton = document.getElementById('font-size-button');
    const fontSizeOptions = document.getElementById('font-size-options');
    
  
    fontSizeButton.addEventListener('click', function () {
      fontSizeOptions.style.display = (fontSizeOptions.style.display === 'block') ? 'none' : 'block';
    });
  
    fontSizeOptions.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        const fontSize = e.target.getAttribute('data-size');
        noteTextArea.style.fontSize = fontSize + 'px';
        fontSizeOptions.style.display = 'none';
      }
    });
  
    document.addEventListener('click', function (e) {
      if (e.target !== fontSizeButton && e.target !== fontSizeOptions) {
        fontSizeOptions.style.display = 'none';
      }
    });
  });
  