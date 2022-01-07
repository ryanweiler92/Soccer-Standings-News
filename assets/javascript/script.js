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
          })
      } else {
          console.log("Error: No data found")
      }
  })
  .catch(function(error){
      console.log("Unable to connect to API")
  })
}



submitBtn.addEventListener("click", getLeagueSelection)