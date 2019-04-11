
    document.getElementById("defaultOpen").click();

function myFunction(e) {
    var elems = document.querySelector(".active");
    if (elems !== null) {
        elems.classList.remove("active");
    }
    e.target.className = "active";
}




function closenav(){
    let nav = document.querySelector(".nav");
    if(nav.style.display == "none"){
        nav.style.display = "block";
    }
    else{
        nav.style.display= "none";
    }
}


function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

    
  } 


