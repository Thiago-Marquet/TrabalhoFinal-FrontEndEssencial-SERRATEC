const darkMode = () =>{
    darkModeBody();
    darkModeMain();
    darkModeNav();
    darkModeFooter();
}

const darkModeMain = () => {
    let element = document.querySelector("main")
    element.classList.toggle("dark-mode-all");
 }

 const darkModeBody = () => {
    let element = document.querySelector("body");
    element.classList.toggle("dark-mode-all");
 }

 const darkModeFooter = () => {
    let element = document.querySelector("footer");
    element.classList.toggle("dark-mode-footer");
 }

const darkModeNav = () => {
    let element = document.querySelector("nav");
    element.classList.toggle("dark-mode-nav");
 }

