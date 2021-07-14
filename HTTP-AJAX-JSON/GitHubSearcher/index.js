const url = "https://api.github.com/search/users?q=";
const input = $('input');
const newCards = $('.cardHolder');
const error = $('.alert');


$(document).ready(function () {
    searchInputValue('b');
})

function searchInputValue (inputValue) {
    $.ajax({
        url: `${url}${inputValue}`,
        method: 'GET'
    }).done(function (response) {
        //console.log(response);
        newCards.html("");
        if (!response || response.items.length === 0) {
            error.text = 'No data';
        }

        response.items.forEach(function (element) {
            let card = `<div class="card" style="width: 18rem;">
            <img src="${element.avatar_url}" class="card-img-top" alt="profile_img">
            <div class="card-body">
              <h5 class="card-title">${element.login}</h5>
              <a href="${element.html_url}" class="btn btn-primary">Go to profile</a>
              <label href='' onclick="goToRepositories('${element.repos_url}')" class='btn btn-primary'>Read repositories</label>
            </div>
          </div>`;
            console.log(element.repos_url);
          newCards.append(card);
        })

    }).fail(function () {
        error.text ('Network error!');
        error.toggle();
    })
}

function goToRepositories(repoUrl) {
    localStorage.setItem("user_repo", repoUrl);
    location.assign('repo.html');
}

function searchProfiles (event) {
    if (event.keyCode == 13) {
        let inputVal = input.val();
        input.blur();
        if (!inputVal) {
            error.text ('Input is required');
            error.toggle();
        }
        searchInputValue(inputVal);
    }
}

function clearSearchBox () {
    input.val('');
    error.text('');
    error.css('display', 'none');
}

input.on('keydown', searchProfiles);
input.on('focus', clearSearchBox);