function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const currentLeft = menu.style.left;
    menu.style.left = currentLeft === '0px' ? '-250px' : '0px';
}

let currentIndex = 0;

function moveCarousel(direction) {
    const carouselContainer = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Update the current index
    currentIndex += direction;

    // Wrap around if the index goes out of bounds
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    // Move the carousel
    const offset = -currentIndex * 100; // Each item is 100% width
    carouselContainer.style.transform = `translateX(${offset}%)`;
}
