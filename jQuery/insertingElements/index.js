var arrImg = [];
var body = $('body');
var title = $('<h1>AMAZING GALLERY</h1>')

var img_1 = 'exam_bg.jpg';
var img_2 = 'img_1.png';
var img_3 = 'Nokia.jpg';
var img_4 = 'http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg'

arrImg.push(img_1);
arrImg.push(img_2);
arrImg.push(img_3);
arrImg.push(img_4);


for (var i = 0; i < arrImg.length; i++) {
    var num = Math.floor(Math.random() * (i + 500));
	console.log(num);
    var aTag = $('<a>');
	if (i === 0) {
		aTag.addClass('image-popup-vertical-fit');
	}
	if (i === 1) {
		aTag.addClass('image-popup-fit-width');
	}
    if (i === 2) {
		aTag.addClass('image-popup-no-margins');
	}
	if (i > 2) {
		aTag.addClass('image-popup-no-margins')
	}
    var img = $('<img>');
    aTag.attr('href', arrImg[i]);
    img.attr('src', arrImg[i]);
    img.css({'width': num + 'px' });
    aTag.append(img);
    body.append(aTag);
    if (img.width() >= 200) {
		img.css({'border': 'none'});
		var line = i;
    }
	if (line <= i) {
		img.css({'border': 'none'});
	} else {
		img.css({'border': '5px solid green'});
	}
}


$(document).ready(function() {

    setTimeout(function (){
        body.prepend(title);
    }, 3000);

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
});