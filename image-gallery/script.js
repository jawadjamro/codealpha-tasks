const images = [
    'images/islambad.jpg',
    'images/islambad1.jpg',
    'images/islambad2.jpg',
    'images/islambad3.jpg',
    'images/islambad4.jpg'
];

let currentIndex = 0;

const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumbnailsContainer = document.getElementById('thumbnails');

function updateGallery() {
    galleryImage.src = images[currentIndex];
    document.querySelectorAll('.thumbnails img').forEach((img, idx) => {
        img.classList.toggle('active', idx === currentIndex);
    });
}

function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
}

function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
}

// Create thumbnails
galleryImage.onload = function() {
    thumbnailsContainer.innerHTML = '';
    images.forEach((src, idx) => {
        const thumb = document.createElement('img');
        thumb.src = src;
        thumb.alt = `Thumbnail ${idx+1}`;
        thumb.classList.add(idx === currentIndex ? 'active' : '');
        thumb.addEventListener('click', () => {
            currentIndex = idx;
            updateGallery();
        });
        thumbnailsContainer.appendChild(thumb);
    });
};

galleryImage.src = images[currentIndex];

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// Initial load
updateGallery(); 