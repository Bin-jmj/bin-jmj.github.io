const fileUpload = document.getElementById('file-upload');
const uploadedImage = document.getElementById('uploaded-image');
const posterForm = document.getElementById('poster-form');
const downloadBtn = document.getElementById('download-btn');
let offsetX, offsetY;

// Handle file upload
fileUpload.addEventListener('change', function() {
	const file = this.files[0];
	const reader = new FileReader();

	reader.addEventListener('load', function() {
		uploadedImage.style.backgroundImage = `url(${reader.result})`;
	});

	if (file) {
		reader.readAsDataURL(file);
	}
});

// Handle image drag and drop
uploadedImage.addEventListener('mousedown', function(e) {
	offsetX = e.offsetX;
	offsetY = e.offsetY;

	document.addEventListener('mousemove', moveImage);
});

document.addEventListener('mouseup', function() {
	document.removeEventListener('mousemove', moveImage);
});

function moveImage(e) {
	const x = e.clientX - offsetX;
	const y = e.clientY - offsetY;

	uploadedImage.style.left = x + 'px';
	uploadedImage.style.top = y + 'px';
}

// Handle poster download
downloadBtn.addEventListener('click', function() {
	const poster = document.getElementById('poster');
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	const image = new Image();
	const filename = 'poster-with-image.png';

	canvas.width = poster.offsetWidth;
	canvas.height = poster.offsetHeight;

	image.onload = function() {
		ctx.drawImage(image, 0, 0);
		ctx.drawImage(uploadedImage, uploadedImage.offsetLeft, uploadedImage.offsetTop, uploadedImage.offsetWidth, uploadedImage.offsetHeight);
		const link = document.createElement('a');
		link.download = filename;
		link.href = canvas.toDataURL();
		link.click();
	}

	image.src = poster.style.backgroundImage.replace('url("', '').replace('")', '');
});

