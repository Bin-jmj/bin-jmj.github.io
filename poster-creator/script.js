const imageUpload = document.getElementById('image-upload');
const createPosterButton = document.querySelector('input[type="submit"]');
const posterImage = document.getElementById('poster');
const downloadContainer = document.getElementById('download-container');

createPosterButton.addEventListener('click', createPoster);

function createPoster(e) {
	e.preventDefault();

	// Check if an image has been selected
	if (!imageUpload.files[0]) {
		alert('Please select an image.');
		return;
	}

	// Create a new FileReader instance
	const reader = new FileReader();

	// Set the image source to the selected file
	reader.onload = function(e) {
		posterImage.src = e.target.result;
	};

	reader.readAsDataURL(imageUpload.files[0]);

	// Show the poster container
	posterImage.style.display = 'block';

	// Create a download button
	const downloadButton = document.createElement('a');
	downloadButton.innerHTML = 'Download Poster';
	downloadButton.download = 'poster.png';
	downloadButton.href = '';
	downloadButton.classList.add('button');

	// Add the download button to the download container
	downloadContainer.appendChild(downloadButton);

	// When the image has finished loading, create a canvas with the same dimensions and draw the image on it
	posterImage.onload = function() {
		const canvas = document.createElement('canvas');
		canvas.width = posterImage.naturalWidth;
		canvas.height = posterImage.naturalHeight;
		const context = canvas.getContext('2d');
		context.drawImage(posterImage, 0, 0);

		// Convert the canvas to a data URL with the correct file extension and set it as the href of the download button
		downloadButton.href = canvas.toDataURL('image/png').replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
	};
}
