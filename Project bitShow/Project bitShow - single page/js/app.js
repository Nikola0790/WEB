'use strict';

$(document).ready(function () {
    
    div2.hide();

    ////////////// Top 50 tv shows

        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(response){
            if (!response || response.length === 0) {
                error.text ('No data');
            }
            response.sort((a,b) => {
                    return b.rating.average - a.rating.average;
            });

            let top50 = response.slice(0,50);

            top50.forEach((item) => {
                let card = `<div class="col-sm-4" onclick=goToInfo(${item.id}) >
                    <div class="cardCenter">
                        <img class="card-img-top" src="${item.image.medium}" alt="image">
                        <div class="card-body">
                            <a class="card-text">${item.name}</a>
                        </div>
                    </div>
                </div>`;
                cardList.append(card);              
            });
        }).fail(function () {
            error.text ('Network error');
        }); 

    //////////// Search box

    function searchShow (event) {
        if (event.keyCode === 13) {
            let inputVal = searchBox.val();
            searchBox.blur();
            $.ajax({
                url: `${urlForSearch}${inputVal}`,
                method: 'GET'
            }).done(function (response) {
                //console.log(response);
                response.forEach(function (element) {
                    let liEl = `<li class="underLine" onclick=goToInfo(${element.show.id})>${element.show.name}</li>`;
                    dropDownList.append(liEl);
                })
            }).fail(function () {
                error.text ('Networ error');
            })
        }
    }

    //////////////// Clear search box

    function clearSearchBox() {
        searchBox.val("");
        error.text("");
        error.css("display", "none");
        dropDownList.html("");
    }
    
    searchBox.on('keydown', searchShow);
    searchBox.on ('focus', clearSearchBox);
}); 


function goToInfo (showId) {
    
    div1.hide();
    div2.show();

    //////////////////// Clear info

    searchBox.val("");
    dropDownList.html("");
    title.empty();
    poster.empty();
    season.empty();
    crew.empty();
    cast.empty();
    description.empty();
    errorInfo.empty();

    ////////////////////////// TITLE

    $.ajax({
        url: `${url}/${showId}`,
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
        url: `${url}/${showId}/images`,
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
        url: `${url}/${showId}/seasons`,
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
        url: `${url}/${showId}/cast`,
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
        url: `${url}/${showId}/crew`,
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

    /////////////////////////////////////////// DESCRIPTION


    $.ajax({
        url: `${url}/${showId}`,
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
}   
    
//////// Back to index page

function goToIndex () {
    div1.show();
    div2.hide();
}