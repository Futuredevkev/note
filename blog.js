const ObtenerInfo = async() => {
    const response = await fetch('./clientes.json')
    const data = await response.json();

    return data;
}

async function crearComentarios() {
    const container = document.getElementById('blog');
    const data = await ObtenerInfo();

    data.forEach((comentario) => {
        container.innerHTML += `
        <div class="comentarios">

        <div class="foto-estrella">
    
            <div class="imagen-estrella">
                <img src="${comentario.image}" alt="${comentario.nombre}">
            </div>
    
            </div>
            
    
        <div class="comentario">
    
            <div class="estrellas">
                <h2>${comentario.nombre}</h2>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
    
            <div class="opinion">
            <p>${comentario.comentario}</p>
        </div>
    
        </div>
    </div>
    
        `;
    });

    

 
}

crearComentarios();