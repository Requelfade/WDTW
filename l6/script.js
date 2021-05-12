window.onload = function(){

document.querySelector("#slider").addEventListener('click', () => {
    var main = document.querySelector(".rotor");
    var left = document.querySelector(".left-anim");
    var right = document.querySelector(".right-anim");

    main.style.animationIterationCount = Number(main.style.animationIterationCount) + 1;
    left.style.animationIterationCount = Number(left.style.animationIterationCount) + 1
    right.style.animationIterationCount = Number(right.style.animationIterationCount) + 1;
    
}
)
}