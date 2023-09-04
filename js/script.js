const burgerMenu = document.querySelector('.burger-btn');
const navigation = document.querySelector('.navigation');

burgerMenu.addEventListener('click', () => {
	burgerMenu.classList.toggle('burger-btn__open');
	navigation.classList.toggle('navigation__open');
    // document.body.classList.toggle('scroll-lock');
    // TODO:
    // naprawic zeby nie przenosilo na sama gore strone
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.img');

    images.forEach(function (image) {
        if (image.complete) {
            saveImageToCache(image.src);
        } else {
            image.addEventListener('load', function () {
                saveImageToCache(image.src);
            });
        }
    });

    function saveImageToCache(imageSrc) {
        const imageCache = new Image();
        imageCache.src = imageSrc;

        imageCache.onload = function () {
            console.log(`Obraz został zapisany w pamięci podręcznej: ${imageSrc}`);
        };

        imageCache.onerror = function () {
            console.error(`Błąd podczas wczytywania obrazu: ${imageSrc}`);
        };
    }
});