const fileUpload = document.getElementById('file-upload');
const uploadedImage = document.getElementById('uploaded-image');
const downloadBtn = document.getElementById('download-btn');
let offsetX, offsetY;

// Handle file upload
fileUpload.addEventListener('change', function() {
	const file = this.files[0];
	const reader = new FileReader();

	reader.addEventListener('load', function() {
		uploadedImage.style.backgroundImage = `url(${this.result})`;
	});

	reader.readAsDataURL(file);
});

// Handle drag and drop of uploaded image
uploadedImage.addEventListener('mousedown', function(e) {
	offsetX = e.offsetX;
	offsetY = e.offsetY;
	uploadedImage.style.cursor = 'move';
});

document.addEventListener('mouseup', function() {
	uploadedImage.style.cursor = 'default';
});

document.addEventListener('mousemove', function(e) {
	if (uploadedImage.style.cursor === 'move') {
		uploadedImage.style.top = `${e.clientY - offsetY}px`;
		uploadedImage.style.left = `${e.clientX - offsetX}px`;
	}
});

// Handle download button click
downloadBtn.addEventListener('click', function() {
	const poster = document.getElementById('poster');
	const width = poster.offsetWidth;
	const height = poster.offsetHeight;

	html2canvas(poster, {
		width: width,
		height: height,
	}).then(function(canvas) {
		let link = document.createElement('a');
		link.download = 'poster.png';
		link.href = canvas.toDataURL('image/png');
		link.click();
	});
});
