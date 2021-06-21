$(document).ready(function () {
    console.log('Hello World');
})

$('li:first').css({
    'border-bottom': '1px solid red'
})

$('li').css({
    'text-transform': 'uppercase'
})

$('.active').css({
    'color': 'green'
})

function middle () {
 $('li:eq(' + (Math.floor(($('li').length / 2))) + ')').css ({'background-color': 'red'})
}

middle();

/* 
$('li:not(:first-child):not(:last-child)').css('color', 'red');
 */