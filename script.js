var carousel;
var slider = document.getElementsByTagName("img");
var box = document.createElement('picture');
var dir = 'http://i.imgur.com/'
var images = ['HiaZsvV.jpg', 'pyiRNAP.jpg', 'U9hQk9k.jpg'];
var desc = ['image', 'image', 'image'];
var time = 5000;
var current = 0;

box.className = 'carousel';
document.body.appendChild(box);

for (i = 0; i < images.length; i++) {
    carousel = document.createElement('img');
    carousel.src = dir + images[i];
    carousel.alt = desc[i] + ' ' + i;
    carousel.className = 'cat';
    document.getElementsByClassName('carousel')[0].appendChild(carousel);
}

setInterval(function() {
    for (var i = 0; i < slider.length; i++) {
        slider[i].style.opacity = 0;
    }
    current = (current != slider.length - 1) ? current + 1 : 0;
    slider[current].style.opacity = 1;
}, time);

var style = document.createElement('style');
style.media = 'screen';
style.type = 'text/css'
style.innerHTML = "*{ margin: 0;padding: 0;box-sizing: border-box; }html,body{ position:absolute; height:100%; width:100%; }body { overflow: hidden; }picture { position: fixed; top: -50%; left: -50%; width: 200%; height: 200%; }picture img { position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; min-width: 50%; min-height: 50%; }img { transition: opacity .5s ease-in; }img + img { opacity: 0; }";
document.getElementsByTagName('head')[0].appendChild(style);
