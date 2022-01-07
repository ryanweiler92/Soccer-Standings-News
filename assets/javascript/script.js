document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});
var elem = document.getElementById("league-selections")
var instance = M.FormSelect.getInstance(elem)

var submitBtn = document.getElementById("league-submit-btn")


//function gets input from form
var getLeagueSelection = function(){
  //selections from form
  var input = document.getElementById("league-selections")
  //selected option from form
  var selection = input.value 
  //run API with selected option 
  leagueSearch(selection)

}


//function calls football standings API based on the league selection from form
var leagueSearch = function (selection) {
  var apiUrl = "https://api-football-standings.azharimm.site/leagues/"+selection+"/standings?season=2021&sort=asc"

  fetch(apiUrl).then(function(response){
      if (response.ok) {
          response.json().then(function(data){
              console.log(data)
							displayStanding(data)
          })
      } else {
          console.log("Error: No data found")
      }
  })
  .catch(function(error){
      console.log("Unable to connect to API")
  })
}

var displayStanding = function(data) {
	var tableBody = document.getElementById('table-body');
	tableBody.textContent = ''
	for (i = 0; i < data.data.standings.length; i++) {
		var tableRowEl = document.createElement('tr')
		tableBody.appendChild(tableRowEl)

		var position = document.createElement('td')
		position.textContent = data.data.standings[i].stats[8].displayValue
		tableRowEl.appendChild(position)

		var team = document.createElement('a')
		team.textContent = data.data.standings[i].team.displayName
		team.setAttribute('id', data.data.standings[i].team.displayName)
		tableRowEl.appendChild(team)

		var gamesPlayed = document.createElement('td')
		gamesPlayed.textContent = data.data.standings[i].stats[3].displayValue
		tableRowEl.appendChild(gamesPlayed)

		var wins = document.createElement('td')
		wins.textContent = data.data.standings[i].stats[0].displayValue
		tableRowEl.appendChild(wins)

		var losses = document.createElement('td')
		losses.textContent = data.data.standings[i].stats[1].displayValue
		tableRowEl.appendChild(losses)

		var draws = document.createElement('td')
		draws.textContent = data.data.standings[i].stats[2].displayValue
		tableRowEl.appendChild(draws)

		var points = document.createElement('td')
		points.textContent = data.data.standings[i].stats[6].displayValue
		tableRowEl.appendChild(points)
	}
}

submitBtn.addEventListener("click", getLeagueSelection)