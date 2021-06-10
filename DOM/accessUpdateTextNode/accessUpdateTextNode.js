/*
Access/Update Text Node
Create an unordered list containing <li> items that represent navigation.

Create a function that takes text from one of the <li> elements and presents it on screen using alert.
  
Create one more function.
The function should take some text as an argument.
The function should select the last <li> element in the list and replace its text with text passed as the function argument.
*/

function showAlert () {
    var alertText = document.querySelector('li:nth-child(1)').textContent;
    alert(alertText);
}

showAlert();

function repl (text) {
    var n = document.querySelector('ul').lastElementChild;
    n.textContent = text;

}
repl ('changed text')

