window.onload = function(){
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    list = list.sort(() => Math.random() - 0.5)
    let i = 0
    document.querySelectorAll(".image").forEach(e => {
        e.style.background = "url(\"layer51\/zdjecia\/" + list[i++] + ".jpg\")"
    })
}