let currentIndex = 0;
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
});