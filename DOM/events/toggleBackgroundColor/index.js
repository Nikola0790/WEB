var bodyNode = document.querySelector('body');
var btt = document.querySelector ('.toggle')
bodyNode.classList.add ('colorDark');
var changeBg = function () {
    if (bodyNode.className === 'colorDark') {
        bodyNode.classList.remove ('colorDark');
        bodyNode.classList.add ('colorLight');
    } else if (bodyNode.className === 'colorLight') {
        bodyNode.classList.remove ('colorLight')
        bodyNode.classList.add ('colorDark');
    }
}


/*var turnOffToggle = function () {
    bodyNode.classList.remove ('colorLight');
    bodyNode.classList.add ('colorDark');
    btt.removeAttribute('onclick');
}*/

var automaticToggle;
btt.addEventListener ('click', function () {
    automaticToggle = setInterval(changeBg, 500);
}) 


function turnOffToggle () {
    clearInterval(automaticToggle);
}