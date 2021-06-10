/* InnerHTML
Do the following exercise in two ways: using DOM manipulation methods and using innerHTML.
Create a function that is used for building a dropdown/select element.
It first builds a dropdown and then adds it to the DOM.
The function takes two arguments: the first is an array of strings and the second is a DOM node to which the dropdown will be added.
Create options that correspond to items in the passed array and add them to the select element.
Add the whole dropdown list to DOM .

Use this function to create two selects on the page.
The first select should be appended to the first div on the page.
The second select should be appended to the last div on the page. */



function buildDropdown (arr, domNode) {
    var select = document.createElement('select');
    for (var i = 0; i < arr.length; i++) {
        var option = document.createElement('option');
         option.innerHTML = arr[i];
         select.appendChild(option);
    }

    var body = document.querySelector('body');
    var node = document.createElement(domNode);
    node.appendChild(select);  
    body.appendChild(node);    
}

var array = ['Home', 'About', 'Contact'];
buildDropdown(array, 'div');
buildDropdown (['Box_1', 'Box_2', 'Box_3'], 'div')