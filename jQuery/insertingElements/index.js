var imgList = ['img_dog.png', 'img_1.png', 'exam_bg.jpg', 'Nokia.jpg', 'exam_bg.jpg','img_dog.png'];
var title = $('<h1>');
var bodyNode = $('body');

function makeGallery (images) {
    images.forEach(function (img) {
        var imgNode = $('<img>');
        bodyNode = $('body');
        imgNode.attr('src', img);
        bodyNode.append(imgNode);  
    })
}

setTimeout (function (){
    makeGallery(imgList);
}, 2000);

setTimeout (function (){
    title.text('AMAZING GALLERY');
    bodyNode.prepend(title)
}, 5000);
