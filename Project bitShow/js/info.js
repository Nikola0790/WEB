'use strcit';

////////////////////////// TITLE

$(document).ready(function () {
    let id = localStorage.getItem('id');

    $.ajax({
        url: `${url}/${id}`,
        method: 'GET'
    }).done(function (response) {
        if (!response) {
           errorInfo.text ('No data');
        }
        let showTitle = `<h2>${response.name}</h2>`;
        title.append(showTitle);
    }).fail(function () {
        errorInfo.text ('Network error');
    }); 


    ///////////////////////////////// IMAGE


    $.ajax({
        url: `${url}/${id}/images`,
        method: 'GET'
    }).done(function (response) {
        if (!response) {
            errorInfo.text ('No data');
        }
        let showImage = `<img src="${response[0].resolutions.original.url}">`;
        poster.append(showImage);
    }).fail(function () {
        errorInfo.text ('Network error');
    });


    /////////////////////////////////// SEASONS

    $.ajax({
        url: `${url}/${id}/seasons`,
        method: 'GET'
    }).done(function (response) {
        if (!response) {
            errorInfo.text ('No data');
        }
        let showSeasonsHead = `<h3>Seasons (${response.length})</h3>`;
        let textDate = '<p>Premiere Date - End Date</p>'
        let listDate = $('<ul></ul>');
        response.forEach(function (el) {
            listDate.append(`<li>${el.premiereDate} - ${el.endDate}</li>`);
        })
        season.append(showSeasonsHead); 
        season.append(textDate);
        season.append(listDate);   
    }).fail(function () {
        errorInfo.text ('Network error');
    });


    /////////////////////////////////// CAST


    $.ajax({
        url: `${url}/${id}/cast`,
        method: 'GET'
    }).done(function (response) {
        if (!response) {
            errorInfo.text ('No data');
        }
        let showCast = '<h3>Cast</h3>';
        let castList = $('<ul></ul>');
        response.forEach(function (actor) {
            castList.append(`<li>${actor.person.name}</li>`)
        })
        cast.append(showCast);
        cast.append(castList);
    }).fail(function () {
        errorInfo.text ('Network error');
    });


    /////////////////////////////////// CREW


    $.ajax({
        url: `${url}/${id}/crew`,
        method: 'GET'
    }).done(function (response) {
        if (!response) {
            errorInfo.text ('No data');
        }
        let showCrew = '<h3 class = "toggle">Crew <span>(click to show)<span></h3>';
        let crewList = $('<ul class = "hideList"></ul>');
        response.forEach(function (crew) {
            crewList.append(`<li>${crew.type}: ${crew.person.name}</li>`)
        })
        crew.append(showCrew);
        $('.toggle').click(function () {
            $('.hideList').toggle();
            crew.append(crewList);
        })
    }).fail(function () {
        errorInfo.text ('Network error');
    });


    /////////////////////////////////// AKA's ?????????????????????????????????????


    /* $.ajax({
        url: `${url}/${id}/akas`,
        method: 'GET'
    }).done(function (response) {
        let showAkas = `<h3>AKA's</h3>`;
        let akasList = $('<ul></ul>');
        response.forEach(function (aka) {
            console.log(aka);
            akasList.append(`<li>${aka.name} (${aka.country.name})</li>`);
        })
        titleImg.append(showAkas);
        titleImg.append(akasList);
    }) */


    /////////////////////////////////// EPISODES

    /*$.ajax({
        url: `${url}/${id}/episodes`,
        method: 'GET'
    }).done(function (response) {
        console.log(response);
        let showAkas = `<h3>AKA's</h3>`;
        let akasList = $('<ul></ul>');
        response.forEach(function (aka) {
            akasList.append(`<li>${aka.name} (${aka[1].name})</li>`);
        })
        titleImg.append(showAkas);
        titleImg.append(akasList);
    })*/

    /////////////////////////////////////////// DESCRIPTION


    $.ajax({
        url: `${url}/${id}`,
        method: 'GET'
    }).done(function (response) {
        if (!response) {
            errorInfo.text ('No data');
        }
        let showDetails = `<h3>Show Details</h3>`
        let showDescription = `<p>${response.summary}</p>`;
        description.append(showDetails);
        description.append(showDescription);
    }).fail(function () {
        errorInfo.text ('Network error');
    });


    //////////////////////////////////////////// SEARCH BOX
 
    function searchShowInfoPage (event) {
        if (event.keyCode === 13) {
            let inputVal = searchInfo.val();
            searchInfo.blur();
            $.ajax({
                url: `${urlForSearch}${inputVal}`,
                method: 'GET'
            }).done(function (response) {
                response.forEach(function (element) {
                    let liEl = `<li class="underLine" onclick=goToInfo(${element.show.id})>${element.show.name}</li>`;
                    infoDropDownList.append(liEl);
                })
            }).fail(function () {
                errorInfo.text ('Network error');
            });
        }
    } 

    function clearSearchInfo() {
        searchInfo.val("");
        errorInfo.text("");
        errorInfo.css("display", "none");
        infoDropDownList.html("");
    }

    
    searchInfo.on('keydown', searchShowInfoPage);
    searchInfo.on('focus', clearSearchInfo);
})

function goToInfo (showId) {
    localStorage.setItem('id', showId);
    location.assign('infoPage.html');
}