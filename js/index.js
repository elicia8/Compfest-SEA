const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    }
})

let popup1 = document.getElementById("diet-popup");
let popup2 = document.getElementById("protein-popup");
let popup3 = document.getElementById("royal-popup");
function open_popup1(){
    popup1.classList.add("when-pop-up");
}
function close_popup1(){
    popup1.classList.remove("when-pop-up");
}
function open_popup2(){
    popup2.classList.add("when-pop-up");
}
function close_popup2(){
    popup2.classList.remove("when-pop-up");
}
function open_popup3(){
    popup3.classList.add("when-pop-up");
}
function close_popup3(){
    popup3.classList.remove("when-pop-up");
}
