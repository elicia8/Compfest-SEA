const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
    }
})

let popup = document.getElementById("pop-up");
function open_pop_up(){
    popup.classList.add("when-pop-up");
}
function close_pop_up(){
    popup.classList.remove("when-pop-up");
}
