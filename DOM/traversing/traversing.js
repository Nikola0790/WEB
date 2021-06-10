/*
Traversing
Create two unordered lists.
Each list should be wrapped in a div element.
One <li> element in the second list should have a class “active”, which sets its background color.

Create a function that selects the <li> element with class “active”.
Remove the class from that element, and then select the first <li> element in the first unordered list using node relations.
Apply class to that newly selected <li> element
*/

function color () {
    var lis = document.querySelector("div").nextElementSibling.firstElementChild.firstElementChild;
    lis.className = "active";
}

color();

function removeClass () {
    var remove1 = document.querySelector(".active");
    remove1.classList.remove("active");
}

removeClass();

function changeClass () {
    var firstList = document.querySelector('div').firstElementChild.firstElementChild;
    firstList.className = 'active';
}

changeClass()