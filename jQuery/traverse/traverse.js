$(document).ready(function () {
    
    var divFirst = $('body').find('div')[0];
    $(divFirst).find('img').first().addClass('selected');

    function selectRemove () {
        $(divFirst).find('img').filter(function () {
            var secDivLength = $('div#secondDiv img').length;

            if ($(this).css('border-color') === 'rgb(255, 0, 0)'){
                $(this).css({'border-style': 'none'});   
                $(divFirst).siblings().find('img').eq(Math.floor(secDivLength / 2)).addClass('selected');
            }
        })
    }
    setTimeout (selectRemove, 3000);
})

