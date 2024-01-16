let condition= false
document.querySelector('.brt').addEventListener("click", function () {
     navbar=document.querySelector('.nav1')
     footer=document.querySelector('.ft')

    if (condition=== false){
        navbar.style.backgroundColor ="#474744"
        footer.style.backgroundColor="#474744"
        condition = true
    } else{
        navbar.style.backgroundColor = "white"
        footer.style.backgroundColor="white"
        condition = false
    }
})