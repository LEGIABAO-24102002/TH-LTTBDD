const urlBacon = "https://jsonplaceholder.typicode.com/todos";

function getdata() {
    $.ajax({
            method: "GET",
            url: urlBacon,
            dataType: "json"
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
            console.log("no good");
        });
}
getdata();