const fileInput = document.getElementById('file-input');
const uploadedImage = document.getElementById('uploaded-image');
const downloadButton = document.getElementById('download-button');

fileInput.addEventListener('change', function(e) {
	const file = e.target.files[0];
	const reader = new FileReader();

	reader.onload = function() {
		uploadedImage.src = reader.result;
	};

	reader.readAsDataURL(file);
});

downloadButton.addEventListener('click', function() {
	html2canvas(document.querySelector("#poster-container")).then(function(canvas) {
	    downloadCanvas(canvas, 'my-poster.png');
	});
});

function downloadCanvas(canvas, filename) {
	var link = document.createElement('a');
	link.download = filename;
	link.href = canvas.toDataURL();
	link.click();
}
