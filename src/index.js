import "./style.css";
import { home } from "./home.js";
import { about } from "./about.js";
import { menu } from "./menu.js";

// console.log(greeting);

const content = document.querySelector("#content");
const buttons = document.querySelectorAll(".tab");

document.addEventListener('DOMContentLoaded', function(){
    buttons.forEach(tab => {
    tab.addEventListener("click", (e) => changeTab(e));
})
})


content.innerHTML = home;

function changeTab(e){
    const tab = e;

    content.innerHTML = '';

    switch (tab.target.innerHTML) {
        case 'Home':
            console.log("home");
            content.innerHTML = home;
            break;
        case 'Menu':
            console.log("Menu");
            content.innerHTML = menu;
            break
        case 'About':
            console.log("About");
            content.innerHTML = about;
            break
    
        default:
            break;
    }
}