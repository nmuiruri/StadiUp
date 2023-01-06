function openCity(evt, cityName) {
    // Declare all variables
    var i, info_nav, info;
    console.log(info_nav, info)
    // Get all elements with class="tabcontent" and hide them
    info = document.getElementsByClassName("info");
    for (i = 0; i < info.length; i++) {
    info[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    info_nav = document.getElementsByClassName("info_nav");
    for (i = 0; i < info_nav.length; i++) {
    info_nav[i].className = info_nav[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
}

