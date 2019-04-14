function changeTextDisplay(elementId) {
	var textDiv = document.getElementById(elementId);
	if (textDiv.style.display == 'block') {
		textDiv.style.display = 'none';
	}
	else {
		textDiv.style.display = 'block';
	}

}
