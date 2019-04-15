function changeTextDisplay(elementClass) {
    var elements = document.getElementsByClassName(elementClass);
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].style.display == 'block') {
            elements[i].style.display = 'none';
        }
        else {
            elements[i].style.display = 'block';
        }
    }
	

}
