function enablemodal(num){
    let modal = document.getElementById("modal");
    modal.style.display = "flex";
    document.getElementById("modalimg").setAttribute("src", "images/mock" + num + ".jpg")
}

function disablemodal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}