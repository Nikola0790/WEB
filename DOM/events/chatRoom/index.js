var message = function () {
    var submitBttNode = document.querySelector ('.submit');
    var textInputNode = document.querySelector ('.message');
    var areaForMessageNode = document.querySelector ('.areaForText');
    var inputContent = textInputNode.value;
    var parag = document.createElement('p');
    parag.textContent = inputContent;
    areaForMessageNode.appendChild(parag);
    textInputNode.value = '';
}

/*
1) uzeti value iz inputNode
2) kreirati novi Node (paragraf ili li)
3) na novom Nodu.textContent = value
4) appendChild
5) clear text input
*/