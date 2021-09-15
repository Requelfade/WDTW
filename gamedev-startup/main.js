function scrollmenu(){
    let menu = document.getElementById("navbuttons");
    if (menu.style.getPropertyValue("--display") == "block"){
        menu.style.setProperty("--display", "none");
    }
    else {
        menu.style.setProperty("--display", "block");
    }
}
