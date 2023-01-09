
// for the header 
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
})



let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}


const sr = new ScrollReveal ({
    distance: '45px',
    duration: 2700,
    reset: true
})

sr.reveal('.home-text', {delay:350, origin:'left'})
sr.reveal('.home-img', {delay:350, origin:'right'})
sr.reveal('.sub-service', {delay:200, origin:'bottom'})
sr.reveal('.about', {delay:200, origin:'bottom'})
sr.reveal('.portfolio', {delay:200, origin:'bottom'})
sr.reveal('.songs', {delay:200, origin:'bottom'})



for(let i = 1; i <= 100; i++){

    if(i % 5 == 0 && i % 3 == 0){
        console.log("fizz buzz");
    }
    if(i % 3 == 0){
        console.log("fizz");
    }
    if(i % 5 == 0){
        console.log("buzz");
    }
    else{
        console.log(i);
    }
}