function slide(){
    var stickers = document.getElementsByClassName("sticker");
    for (let s of stickers)
    {
        s.classList.remove("animation");
        void s.offsetWidth;
        s.style.setProperty("--order", s.style.getPropertyValue("--order") * -1);
        s.classList.add("animation");
    }
    var but = document.getElementById("slider");
    if (but.style.getPropertyValue("--isright") == 0)
    {
        but.innerHTML = "Slide to the right ->";
        but.style.setProperty("--isright", 1);
    }
    else 
    {
        but.innerHTML = "<- Slide to the left";
        but.style.setProperty("--isright", 0);
    }
}