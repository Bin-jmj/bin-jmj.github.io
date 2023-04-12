const canvas = document.getElementById('poster');
const ctx = canvas.getContext('2d');
const photo = document.getElementById('photo');
const photoUpload = document.getElementById('photo-upload');
const downloadBtn = document.getElementById('download-btn');

// Draw the poster background
const posterBg = new Image();
posterBg.src = 'IMG-20230330-WA0005.jpg';
posterBg.onload = () => {
  ctx.drawImage(posterBg, 0, 0, canvas.width, canvas.height);
};

// Add event listener to the photo upload input
photoUpload.addEventListener('change', () => {
  const file = photoUpload.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    photo.src = reader.result;
  }

  reader.readAsDataURL(file);
});

// Add event listener to the download button
downloadBtn.addEventListener('click', () => {
  const dataURL = canvas.toDataURL('image/png');
  download(dataURL, 'my-poster.png');
});

// Function to download the canvas as an image
function download(dataURL, filename) {
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Function to draw the photo on the canvas
function drawPhoto() {
  ctx.drawImage(photo, photo.offsetLeft, photo.offsetTop, photo.offsetWidth, photo.offsetHeight);
}

// Redraw the canvas when the photo is loaded or moved
photo.onload = drawPhoto;
photo.addEventListener('mousedown', () => {
  document.addEventListener('mousemove', movePhoto);
});

photo.addEventListener('mouseup', () => {
  document.removeEventListener('mousemove', movePhoto);
});

function movePhoto(e) {
  photo.style.top = `${photo.offsetTop + e.movementY}px`;
  photo.style.left = `${photo.offsetLeft + e.movementX}px`;
  drawPhoto();
}
