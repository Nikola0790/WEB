$(document).ready(function () {

    var divFirst = $('body').find('div')[0];
    $(divFirst).find('img').first().addClass('selected');
    function selectRemove () {
        $(divFirst).find('img').filter(function () {
            if ($(this).css('border-color') === 'rgb(255, 0, 0)'){
                $(this).css({'border-style': 'none'});
                $(divFirst).siblings().find('img').eq(1).addClass('selected'); // find second way to select middle image
            }
        })
    }

    setTimeout (selectRemove, 3000);


    // plugin
	
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
})