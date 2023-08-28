  let adaptNav = document.getElementById("nav")
  let btnBurger = document.querySelector(".burger")
  let regConteiner = document.querySelector(".header-conteiner__right")

function headerAdapt(){
    if(document.body.clientWidth <=820){
        adaptNav.classList.add("hidden")
        btnBurger.classList.remove("hidden")
        regConteiner.classList.add("hidden")
    }
    else if(document.body.clientWidth >=820){
        adaptNav.classList.remove("hidden")
        btnBurger.classList.add("hidden")
        regConteiner.classList.remove("hidden")
    }
} 

window.addEventListener("resize", function(event){
    headerAdapt()
})

headerAdapt()

let isOpen = {
    "bnt_menu-work": false,
    "bnt_menu-about": false,

}


let menuWorkBtn = document.getElementById("bnt_menu-work")
let listIcon = document.querySelector(".list-icon")

let menuAboutBtn = document.getElementById("bnt_menu-about")
let listAbout = document.querySelector(".list-about")

function menuOpen (button, element, frecca){
    button.addEventListener("click", function(e){
        e.preventDefault()
        console.log(button.id);
        console.log(isOpen[button.id]);
        if(isOpen[button.id] === false){
            element.classList.remove("hidden")
            isOpen[button.id] = true
            frecca.classList.add("v-180")
        }

        else{
            element.classList.add("hidden")
            isOpen[button.id] = false
            frecca.classList.remove("v-180")
        }
        
    })
}

let freccaBtnWork = document.querySelector(".v-work")
let freccaBtnAbout = document.querySelector(".v-about")

menuOpen(menuWorkBtn, listIcon, freccaBtnWork)
menuOpen(menuAboutBtn, listAbout, freccaBtnAbout)

let headerConteiner = document.querySelector(".header-conteiner")
let headerBlackBgc = document.querySelector("header")

let isOpenBurger = false

btnBurger.addEventListener('click', function(e){
    e.preventDefault()
    if(isOpenBurger === false) {
        btnBurger.classList.add("x")
        headerConteiner.classList.add("bcg-white")
        adaptNav.classList.remove("hidden")
        isOpenBurger = true
        regConteiner.classList.remove("hidden")
        headerBlackBgc.classList.add("bcg-black")
    }
    else {
        adaptNav.classList.add("hidden")
        isOpenBurger = false
        btnBurger.classList.remove("x")
        headerConteiner.classList.remove("bcg-white")
        regConteiner.classList.add("hidden")
        headerBlackBgc.classList.remove("bcg-black")
    }
})

// daptMainSectionLeft();
// function adaptMainSectionLeft() {
//   let mainSectionLeft = document.querySelector(".main-section_left");
//   if(mainSectionLeft.offsetWidth > window.screen.width
//     || window.screen.width <= 375) {
//     mainSectionLeft.style.maxWidth = window.screen.width + "px";
//     if(productMainSlider != null)
//       productMainSlider.updateSize()
//   }
// }
// window.addEventListener("resize", function(){
//   adaptMainSectionLeft();
// })