//http://api.mediastack.com/v1/news?sources=espn&keywords=chelsea&sort=published_desc&access_key=9b53c76ea86c2083128ed373b41e7716


var loadTeamName = function(){
    var teamSelection = localStorage.getItem("team");

    var team = encodeURIComponent(teamSelection.trim())
    console.log(team);
    newsSearch(team)
}

var newsSearch = function(team){

    var apiUrl =  "http://api.mediastack.com/v1/news?sources=espn&keywords="+team+"&sort=published_desc&access_key=9b53c76ea86c2083128ed373b41e7716"

    fetch(apiUrl).then(function(response){
        if (response.ok) {
            response.json().then(function(data){
                console.log(data)
                populateStories(data)
            })
        } else {
            console.log("Error: No data found")
        }
    })
    .catch(function(error){
        console.log("Unable to connect to API");
    })
}










loadTeamName();