'use strict';

$(document).ready(function () {
    showList ()   
})

    function showList () {
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
                let card = `<div class="col-sm-4" onclick=goToInfo(${item.id})>
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
    }

    function searchShow (event) {
        if (event.keyCode === 13) {
            let inputVal = searchBox.val();
            searchBox.blur();
            $.ajax({
                url: `${urlForSearch}${inputVal}`,
                method: 'GET'
            }).done(function (response) {
                console.log(response);
                response.forEach(function (element) {
                    let liEl = `<li class="underLine" onclick=goToInfo(${element.show.id})>${element.show.name}</li>`;
                    dropDownList.append(liEl);
                })
            }).fail(function () {
                error.text ('Networ error');
            })
        }
    }

    function clearSearchBox() {
        searchBox.val("");
        error.text("");
        error.css("display", "none");
        dropDownList.html("");
    }
    
    function goToInfo (showId) {
        localStorage.setItem('id', showId);
        location.assign('infoPage.html');
    }


searchBox.on('keydown', searchShow);
searchBox.on ('focus', clearSearchBox);
