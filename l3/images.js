window.onload = function(){
    document.querySelectorAll(".image").forEach(e => {
        console.log(e.className.split(" "))
        var num = e.className.split(" ")
        e.style.background = "url(\"layer51\/zdjecia\/" + num[1] + ".jpg\")"
    })
}