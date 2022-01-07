//http://api.mediastack.com/v1/news?sources=espn&keywords=chelsea&sort=published_desc&access_key=9b53c76ea86c2083128ed373b41e7716

var newsSearch = function(){

    var apiUrl = "http://api.mediastack.com/v1/news?sources=espn&keywords=chelsea&sort=published_desc&access_key=9b53c76ea86c2083128ed373b41e7716"

    fetch(apiUrl).then(function(response){
        if (response.ok) {
            response.json().then(function(data){
                console.log(data)
            })
        } else {
            console.log("Error: No data found")
        }
    })
    .catch(function(error){
        console.log("Unable to connect to API");
    })
}

newsSearch();