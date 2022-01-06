document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});
var elem = document.getElementById("league-selections")
var instance = M.FormSelect.getInstance(elem)

var submitBtn = document.getElementById("league-submit-btn")