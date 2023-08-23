const imagenes = document.querySelectorAll(', img.galeria')
const imageneslight = document.querySelector(',agragar-imagen')
const contenedorlight = document.querySelector(',imagen-light')
const hambuguer1 =document.querySelector ('.hamburguer')


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
}  )

contenedorlight.addEventListener('click' , (e)=>{
    if(e.target !== imageneslight){
        contenedorlight.classlist.toggle('show')
        imageneslight.classlist.toggle('showImage')
        hambuguer1.atyle.opacity = '1';
    }
    }
)

const aparecerImagen = (imagen) =>{
    imageneslight.src = imagen;
    contenedorlight.classList.toggle('show');
    imageneslight.classList.toggle('showImagen');
    hambuguer1.atyle.opacity = '0';
}