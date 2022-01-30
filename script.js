$( document ).ready(function(){

    $("#barrasjs").click(function() {

        $("#menu").toggleClass("menuAtivo")

    })

})



function mostrarMenu() {

    let menu = document.getElementById("menu");

    console.log(getComputedStyle(menu).display);

    if (getComputedStyle(menu).display != "none") {
        menu,style.display = "none"

    } else {
        menu.style.display = "flex"
    }
}