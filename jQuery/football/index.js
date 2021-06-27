var field = $('.field');
var player = $('.player');
var button = $('.stop');
var movement = true;

function movePlayer (el) {
        var x = el.clientX;
        var y = el.clientY;
        player.offset({top:y, left:x});
}

function startStopMoving() {
    if (movement === true) {
        field.off();
        movement = false;
        button.text('Start Moving');
    } else if (movement === false) {
        movement = true;
        field.click(movePlayer);
        button.text('Stop Moving');  
    }
}

field.click(movePlayer);
button.click(startStopMoving);