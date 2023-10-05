const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('#enlarged-image');
const closeModal = document.querySelector('.close');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const imageSrc = thumbnail.querySelector('img').src;
        modalImage.src = imageSrc;
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});