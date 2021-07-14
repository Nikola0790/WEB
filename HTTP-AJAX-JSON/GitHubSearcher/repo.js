const table = $('table');
const error2 = $('#err')

$(document).ready(function () {
    var repo = localStorage.getItem("user_repo")
    $.ajax({
        url: repo,
        method: 'GET'
    }).done (function (response) {
        console.log(response);
        if (response.length === 0) {
            error2.text = 'No data';
        }

        response.forEach(function (item) {
            let rep = `<tr><td>${item.name}</td><td>${item.description}</td><td>${item.language}</td>
            <td>${item.watchers}</td><td>${item.url}</td>
            </tr>`;

            table.append(rep);
        })
    }).fail (function () {
        error2.text = 'error'
    })
})