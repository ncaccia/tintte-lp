const images = [
    '/images/02.png',
    '/images/03.png',
    '/images/04.png',
    '/images/05.png',
    '/images/06.png',
    '/images/01.png',
];

// Get reference to the image element
const heroImage = document.getElementById('hero-image');

// Function to randomly change the image source and apply transition
function changeImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    heroImage.src = randomImage;
}

setInterval(changeImage, 4000); // Change image every 5 seconds
