/* Selecting One/Multiple Elements

Create two unordered lists on the page.
    
Create a function that selects the second list and applies a class that sets some background color to it.

Create a second function that, when triggered, selects all <li> elements on the page. 
The function also sets a class that sets some bg color to every <li> element.

Create one more unordered list and one more function
The function​ should select only <li> elements from that last list
Each <li> element should get a class that sets some bg color and transforms the text to uppercase.
 */

function secondList () {
    document.getElementById('jan').className = 'secList';
}

function allLi () {
    var elementLi = document.getElementsByTagName('li');
    for (var i = 0; i < elementLi.length; i++) {
        document.getElementsByTagName('li')[i].className = 'all';
    }   
    return elementLi;
}

function thirdList () {
    var el = document.getElementsByTagName('ul')[2].getElementsByTagName('li');
    for (var i = 0; i < el.length; i++) {
        el[i].className = 'third';
    }
    return el;
}