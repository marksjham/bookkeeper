document.addEventListener("turbolinks:load", function() { 
  var divClicks = document.getElementsByClassName("divClick");
  
  for (var i = 0; i < divClicks.length; i++) {
    divClicks[i].onclick = function () { event.target.children[0].focus(); };
  }
  
  var searchChoice = document.getElementById("search_choice");
  searchChoice.onchange = searchFunction;
});

function searchFunction() {
  
  var x = document.getElementById("search_choice");
  var range = document.getElementById("select_range");
  var week = document.getElementById("select_week");
  var last = document.getElementById("last_week");
  var month = document.getElementById("month_list");
  var month_check = document.getElementById("check_month");
  
  if (x.value === "") {
    range.style.display = "none";
    month.style.display = "none";
    last.checked = false;
    month_check.checked = false;
  } 
  
  if (x.value === "date_range") {
    range.style.display = "block";
    month.style.display = "none";
    last.checked = false;
    month_check.checked = false;
  }
  
  if (x.value === "last_week") {
    range.style.display = "none";
    month.style.display = "none";
    last.checked = true;
    month_check.checked = false;
  }
  
  if (x.value === "view_month") {
    range.style.display = "none";
    month.style.display = "block";
    last.checked = false;
    month_check.checked = true;
  }
};
