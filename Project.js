var images = [];
images[0] = "1.jfif";
images[1] = "2.jfif";
images[2] = "3.jfif";
images[3] = "4.png";
images[4] = "5.jfif";
var currentImg = 0;
var img = document.getElementById("positionImg");
var headers = [];
headers[0] = "P2703B Plastic L96 Spring Sniper Rifle";
headers[1] = "APS M40A3 Bolt Action Airsoft Sniper Rifle 550";
headers[2] = "ARES DSR-1 Gas Sniper Rifles";
headers[3] = "L96 AWP FH Sniper Rifle";
headers[4] = "SW-04 ARMY sniper rifle";

var text = document.getElementById("positionText");

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

function nextImage() {
    currentImg = currentImg >= images.length - 1 ? 0 : ++currentImg;
    img.src = images[currentImg];
    text.innerHTML = headers[currentImg];
}

function previousImage() {
    currentImg = currentImg <= 0 ? images.length - 1 : --currentImg;
    img.src = images[currentImg];
    text.innerHTML = headers[currentImg];
}