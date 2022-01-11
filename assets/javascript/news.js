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

var populateStories = function(data) {
	var newsBody = document.getElementById('stories')
	var title =  document.createElement('h5')
	title.innerHTML = 'Current News Articles'
	newsBody.appendChild(title)

	for (var i = 0; i < data.data.length; i++) {
		var article = document.createElement('a')
		article.setAttribute('href', data.data[i].url)
		article.setAttribute('target', 'blank')
		newsBody.appendChild(article)		

		if (data.data[i].image) {
			var img = document.createElement('img')
			img.setAttribute('src', data.data[i].image)
			img.setAttribute('alt', `${data.data[i].title}`)
			article.appendChild(img)
		}
	}
	// if (!data.data.length) {		
	// 	var elems = document.getElementsById('modal1');
	// 	var instance = M.Modal.init(elems,);
	// 	instance.open()
	// }
}


loadTeamName();