window.onload = ()=>{


    const buttonMenu = document.querySelector(".header-content-buttons__item--menu");
    const listMenu = document.querySelector(".header-mobile-list");

    buttonMenu.addEventListener("click", ()=>{
        listMenu.classList.toggle("header-mobile-list--close");
        document.body.classList.toggle("body--no-scroll")
    })

}