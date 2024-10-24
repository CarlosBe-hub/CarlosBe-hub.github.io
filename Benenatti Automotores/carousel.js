
const imagenes = [
    { img: "/Benenatti Automotores/img/auto3ford.webp", titulo: "Ford Taunus" },
    { img: "/Benenatti Automotores/img/audi600x392.jpg", titulo: "Audi A3" },
    { img: "/Benenatti Automotores/img/amarok600x392.jpg", titulo: "Volkswagen Amarok" },
    { img: "/Benenatti Automotores/img/golTrend600x392.jpg",titulo: "Gol Trend" },
    { img: "/Benenatti Automotores/img/audia4600x392.jpg", titulo: "Audi A4" },
    { img: "/Benenatti Automotores/img/corolla600x392.jpg", titulo: "Toyota Corolla" },
    { img: "/Benenatti Automotores/img/auto3chevrolet.jpg", titulo:"Chevrolet Silverado" },
    { img: "/Benenatti Automotores/img/sanderors600x392.jpg", titulo: "Renault Sandero RS" },
    { img: "/Benenatti Automotores/img/golf600x392.jpg", titulo: "Volkswagen Golf"} ,
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

let autoSlideInterval = setInterval(autoAdvance, 3000);

window.addEventListener('load', () => {
    mostrarImg(currentIndex); 
});
