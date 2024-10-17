
const imagenes = [
    { img: "/Benenatti Automotores/img/auto3ford.webp", titulo:"Ford Taunus" },
    { img: "/Benenatti Automotores/img/Fiat-Cronos.jpg", titulo:"Fiat Cronos" },
    { img: "/Benenatti Automotores/img/toyota-hilux.jpg", titulo:"Toyota Hilux" },
];

const carouselImage = document.getElementById('carousel-image');
const tituloElement = document.createElement('h5'); 
tituloElement.classList.add('carousel-title'); 
carouselImage.parentElement.appendChild(tituloElement); 
const nextButton = document.querySelector('.siguiente');
const prevButton = document.querySelector('.atras');

let currentIndex = 0;
let resetTimeout; 

function mostrarImg(index) {
    carouselImage.src = imagenes[index].img;
    tituloElement.textContent = imagenes[index].titulo;
}

nextButton.addEventListener('click', (event) => {
    event.preventDefault();
    currentIndex = (currentIndex + 1) % imagenes.length; 
    mostrarImg(currentIndex);
    resetAutoSlide(); 
});

prevButton.addEventListener('click', (event) => {
    event.preventDefault();
    currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length; 
    mostrarImg(currentIndex);
    resetAutoSlide(); 
});


function autoAdvance() {
    currentIndex = (currentIndex + 1) % imagenes.length; 
    mostrarImg(currentIndex);
    
}

function resetAutoSlide() {
    
    clearInterval(autoSlideInterval);
    clearTimeout(resetTimeout);

    resetTimeout = setTimeout(() => {
        autoSlideInterval = setInterval(autoAdvance, 3000);
    }, 4000);
}

const autoSlideInterval = setInterval(autoAdvance, 3000);

window.addEventListener('load', () => {
    mostrarImg(currentIndex); 
});
