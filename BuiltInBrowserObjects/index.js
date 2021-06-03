var hello = 'Hello JS';
console.log(hello);


// window.navigator
function dataOfBrowser () {
    return navigator.appName + '\n' + navigator.appVersion + '\n'  + navigator.appCodeName;
}
console.log(dataOfBrowser());

function isOnline () {
    if (navigator.onLine) {
        return 'Online';
    } else {
        return 'Offline';
    }
}
console.log(isOnline());


// window.screen
function screen () {
    var aHeight = screen.availHeight;
    var height = screen.height;
    var width = screen.width;

    return 'width: ' + width + ' height: ' + height + ' availableHeight: ' + aHeight;
}

console.log(screen());

// window.location
function locat () {
    return location.href + '\n' + location.hostname + '\n' + location.protocol + '\n' + location.pathname;
}

console.log(locat());

function reloadPage () {
    return location.reload();
}

function redirectsToWebsite () {
    return location.replace('https://www.youtube.com/watch?v=rrwjymZMLdM');
}

// window.localStorage

(function storesData () {
    localStorage.setItem('firstName', 'Nikola');
    localStorage.setItem('lastName', 'Drcalic');
    localStorage.setItem('city', 'Obrenovac')
})();

function readData () {
    var data = localStorage.getItem('firstName');
    if (!data) {
        return 'There is no data';
    } else {
        return data;
    }
}

//console.log(readData());

function removeData () {
    localStorage.removeItem('firstName')
}

//removeData();
console.log(readData());

// window.history

function backHistory() {
    return window.history.go(-1);
}

console.log(backHistory());
// window methods

function showsAlert () {
    var message = alert("Hellooooooo"); 
    var message_2 = prompt('How are you?'); 
    var message_3 = confirm('Are you sure?');
    
    if (message_3 === true) {
        console.log (alert('Success !!!'));
    }
}
//showsAlert();

// GLOBAL JavaScript Objects (homework)

function maths () {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        arr.push((40 * Math.random() + 10));
    }
    console.log(arr);
    return arr;
}

function twoDecimal (array) {
    var newArr = [];
    array.map(function(el) {
        newArr.push(el.toFixed(2));
    })
    console.log(newArr);
    return newArr;
}

function roundNum (arra) {
    var roundArr = [];
    arra.map (function(el) {
        roundArr.push(Math.floor(el));
    })
    console.log(roundArr);
    return roundArr;
}

function maxNum (arr) {
    var maxNum = [0];
    for (var i = 0; i < arr.length; i++) {
        if (maxNum < arr[i]) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}

console.log(maxNum(roundNum(twoDecimal(maths()))));

// Date 

console.log(new Date ());
console.log('TIME: ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date ().getSeconds());
console.log('DATE: ' + new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear());