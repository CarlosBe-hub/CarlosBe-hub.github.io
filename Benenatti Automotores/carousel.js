

const imagenes = [
    { img:"/Benenatti Automotores/img/auto3ford.webp"},

    { img:"/Benenatti Automotores/img/Fiat-Cronos.jpg"},

    { img:"/Benenatti Automotores/img/toyota-hilux.jpg"}
];

const carouselImage = document.getElementById('carousel-image');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let index = 0;

function mostrarImg(index){
    carouselImage.src = imagenes[index].img;

}

nextButton.addEventListener('click',(event) => {
    event.preventDefault();
    index =(index + 1) %imagenes.length;
    mostrarImg(index);

});

prevButton.addEventListener('click', (event) =>{
    event.preventDefault();
    index = (index - 1 + imagenes.length) % imagenes.length;
    mostrarImg(index);
});

window.addEventListener('load', () => {
    mostrarImg(index);
});





/* let currentIndex = 0;
const images = document.querySelectorAll('.carousel-inner img');
const totalImages = images.length;


function updateCarousel() {
    const offset = -currentIndex * 100; 
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}


document.querySelector('.carousel-siguiente').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages; 
    updateCarousel();
});


document.querySelector('.carousel-atras').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; 
    updateCarousel();
});


function autoAdvance() {
    currentIndex = (currentIndex + 1) % totalImages; 
    updateCarousel();
}


const autoSlideInterval = setInterval(autoAdvance, 2500);


document.querySelector('.carousel-siguiente').addEventListener('click', () => {
    clearInterval(autoSlideInterval); 
});

document.querySelector('.carousel-atras').addEventListener('click', () => {
    clearInterval(autoSlideInterval); 
}); */