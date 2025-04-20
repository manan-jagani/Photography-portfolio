const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

// Image data array
const images = [
  { src: 'images/photo1.jpg', category: 'landscape' },
  { src: 'images/photo2.jpg', category: 'street' },
  { src: 'images/photo3.jpg', category: 'nature' },
  { src: 'images/photo4.jpg', category: 'landscape' },
  { src: 'images/photo5.jpg', category: 'street' },
  { src: 'images/photo6.jpg', category: 'nature' },
  { src: 'images/photo7.jpg', category: 'landscape' },
  { src: 'images/photo8.jpg', category: 'street' },
  { src: 'images/photo9.jpg', category: 'landscape' },
  { src: 'images/photo10.jpg', category: 'nature' },
  { src: 'images/photo11.jpg', category: 'landscape' },
  { src: 'images/photo12.jpg', category: 'street' },
  { src: 'images/photo13.jpg', category: 'nature' },
  { src: 'images/photo14.jpg', category: 'street' },
  { src: 'images/photo15.jpg', category: 'landscape' },
  { src: 'images/photo16.jpg', category: 'nature' },
  { src: 'images/photo17.jpg', category: 'landscape' },
  { src: 'images/photo18.jpg', category: 'street' },
  { src: 'images/photo19.jpg', category: 'nature' },
  { src: 'images/photo20.jpg', category: 'street' },
  { src: 'images/photo21.jpg', category: 'landscape' },
  { src: 'images/photo22.jpg', category: 'nature' },
  { src: 'images/photo23.jpg', category: 'landscape' },
  { src: 'images/photo24.jpg', category: 'street' },
  { src: 'images/photo25.jpg', category: 'nature' },
  { src: 'images/photo26.jpg', category: 'landscape' },
  { src: 'images/photo27.jpg', category: 'street' },
  { src: 'images/photo28.jpg', category: 'nature' },
  { src: 'images/photo29.jpg', category: 'landscape' },
  { src: 'images/photo30.jpg', category: 'street' },
  { src: 'images/photo31.jpg', category: 'nature' },
  { src: 'images/photo32.jpg', category: 'landscape' },
  { src: 'images/photo33.jpg', category: 'street' },
  { src: 'images/photo34.jpg', category: 'nature' },
  { src: 'images/photo35.jpg', category: 'landscape' },
  { src: 'images/photo36.jpg', category: 'street' },
  { src: 'images/photo37.jpg', category: 'nature' },
  { src: 'images/photo38.jpg', category: 'landscape' },
  { src: 'images/photo39.jpg', category: 'street' },
];
// Function to render images based on the filter
function renderImages(filter = 'all') {
  gallery.innerHTML = ''; // Clear the gallery

  // Filter the images based on the selected category or show all
  const filtered = filter === 'all' ? images : images.filter(img => img.category === filter);

  // Loop through filtered images and create image elements
  filtered.forEach(img => {
    const image = document.createElement('img');
    image.src = img.src;
    image.alt = img.category;
    image.loading = 'lazy'; // Enable lazy loading
    image.classList.add('gallery-item');

    // Click event to open the modal
    image.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
    });

    gallery.appendChild(image); // Append image to gallery
  });
}

// Event listener for filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons and add it to the clicked one
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Render images based on the selected filter
    renderImages(btn.dataset.filter);
  });
});

// Close the modal when clicking the close button
closeBtn.onclick = function () {
  modal.style.display = 'none';
};

// Close the modal when clicking anywhere outside of the modal image
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Initial gallery load with all images
renderImages();
