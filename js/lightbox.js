const photos = document.querySelectorAll('.img-galery')
const imageneslightbox = document.querySelector('.agregar-imagen')
const contenedorlight = document.querySelector('.imagen-light')
const hamburger1 = document.querySelector(".hamburger") 

console.log(photos)
console.log(imageneslightbox)
console.log(contenedorlight)


photos.forEach(photos =>{

        photos.addEventListener('click', ()=>{
            
             aparecerImagen(photos.getAttribute('src'))
           


        })






})



contenedorlight.addEventListener('click', (e)=>{
    if(e.target !== imageneslightbox){

        contenedorlight.classList.toggle('show')
    imageneslightbox.classList.toggle('showImage')
    hamburger1.style.opacity = '1'



    }


})





const aparecerImagen = (photos)=>{
    imageneslightbox.src = photos;
    contenedorlight.classList.toggle('show')
    imageneslightbox.classList.toggle('showImage')
    hamburger1.style.opacity = '0'
}