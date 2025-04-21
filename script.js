const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

// Image data array
const images = [
  { src: 'images/photo1.JPG', category: 'landscape' },
  { src: 'images/photo2.JPG', category: 'street' },
  { src: 'images/photo3.JPG', category: 'nature' },
  { src: 'images/photo4.JPG', category: 'landscape' },
  { src: 'images/photo5.JPG', category: 'street' },
  { src: 'images/photo6.JPG', category: 'nature' },
  { src: 'images/photo7.JPG', category: 'landscape' },
  { src: 'images/photo8.JPG', category: 'street' },
  { src: 'images/photo9.JPG', category: 'landscape' },
  { src: 'images/photo10.JPG', category: 'nature' },
  { src: 'images/photo11.JPG', category: 'landscape' },
  { src: 'images/photo12.JPG', category: 'street' },
  { src: 'images/photo13.JPG', category: 'nature' },
  { src: 'images/photo14.JPG', category: 'street' },
  { src: 'images/photo15.JPG', category: 'landscape' },
  { src: 'images/photo16.JPG', category: 'nature' },
  { src: 'images/photo17.JPG', category: 'landscape' },
  { src: 'images/photo18.JPG', category: 'street' },
  { src: 'images/photo19.JPG', category: 'nature' },
  { src: 'images/photo20.JPG', category: 'street' },
  { src: 'images/photo21.JPG', category: 'landscape' },
  { src: 'images/photo22.JPG', category: 'nature' },
  { src: 'images/photo23.JPG', category: 'landscape' },
  { src: 'images/photo24.JPG', category: 'street' },
  { src: 'images/photo25.JPG', category: 'nature' },
  { src: 'images/photo26.JPG', category: 'landscape' },
  { src: 'images/photo27.JPG', category: 'street' },
  { src: 'images/photo28.JPG', category: 'nature' },
  { src: 'images/photo29.JPG', category: 'landscape' },
  { src: 'images/photo30.JPG', category: 'street' },
  { src: 'images/photo31.JPG', category: 'nature' },
  { src: 'images/photo32.JPG', category: 'landscape' },
  { src: 'images/photo33.JPG', category: 'street' },
  { src: 'images/photo34.JPG', category: 'nature' },
  { src: 'images/photo35.JPG', category: 'landscape' },
  { src: 'images/photo36.JPG', category: 'street' },
  { src: 'images/photo37.JPG', category: 'nature' },
  { src: 'images/photo38.JPG', category: 'landscape' },
  { src: 'images/photo39.JPG', category: 'street' },
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


// Section scroll animations
const revealSections = () => {
  const about = document.querySelector('.about');
  const contact = document.querySelector('.contact');
  const triggerPoint = window.innerHeight * 0.85;

  [about, contact].forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < triggerPoint) {
      section.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections); // On first load
