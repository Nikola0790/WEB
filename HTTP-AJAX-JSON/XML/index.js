const country = document.querySelector('#country');
const ipAdd = document.querySelector('#ip-address');

function getCountry () {

    var request = new XMLHttpRequest();
    request.onload = function () {
        if (this.readyState === 4 && this.status === 200) {
            myFunc (this);
        }
    }
    request.open('GET', 'http://www.geoplugin.net/xml.gp?ip=xx.xx.xx.xx', true);
    request.send();
}

function myFunc (x) {
    var xmlDoc = x.responseXML;
    var countryName = xmlDoc.querySelector('geoplugin_countryName');
    var ip = xmlDoc.querySelector('geoplugin_request')

    country.textContent = countryName.textContent;
    ipAdd.textContent = ip.textContent;
}

getCountry();