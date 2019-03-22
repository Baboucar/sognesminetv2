// let navContainer = document.getElementById("nav")

// var links = navContainer.getElementsByClassName("link");
// for (var i = 0; i < links.length; i++) {
//     links[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace("active", "");
//         this.className += "active";
//     })
// }

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