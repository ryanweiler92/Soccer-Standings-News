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

	if(data.data.length == 0){
		var rowDiv = document.createElement("div");
		rowDiv.setAttribute("class", "row");
		newsBody.appendChild(rowDiv);

		var centerDiv = document.createElement("div");
		centerDiv.setAttribute("class", "center-align");
		rowDiv.appendChild(centerDiv);

		var storyTitle = document.createElement("h3");
		storyTitle.textContent = "Sorry, no team news at this time."
		centerDiv.appendChild(storyTitle)
	}else{

		for (var i = 0; i < 6; i++) {

			var rowDiv = document.createElement("div");
        	rowDiv.setAttribute("class", "row");
        	newsBody.appendChild(rowDiv);

        	var centerDiv = document.createElement("div");
        	centerDiv.setAttribute("class", "center-align");
        	rowDiv.appendChild(centerDiv);

        	var storyTitle = document.createElement("h3");
        	storyTitle.textContent = data.data[i].title;
        	centerDiv.appendChild(storyTitle)

			var article = document.createElement('a')
			article.setAttribute('href', data.data[i].url)
			article.setAttribute('target', 'blank')
			centerDiv.appendChild(article)		

			var storyImage = document.createElement("img");
			if (data.data[i].image == null){
				storyImage.setAttribute("src", "./assets/images/stock.jpg");
				storyImage.setAttribute("class", "responsive-img")
			} else{
			storyImage.setAttribute("src", data.data[i].image);
			}
			storyImage.setAttribute("class", "responsive-img")
			article.appendChild(storyImage)
		}
	}
	
}



loadTeamName();


// if (!data.data.length) {		
	// 	var elems = document.getElementsById('modal1');
	// 	var instance = M.Modal.init(elems,);
	// 	instance.open()
	// }