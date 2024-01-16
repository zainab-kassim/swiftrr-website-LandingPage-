let condition= false
document.querySelector('.brt').addEventListener("click", function () {
     navbar=document.querySelector('.nav1')
     footer=document.querySelector('.ft')
     body=document.querySelector('body')

    if (condition=== false){
        body.style.backgroundColor="#E0E0E0"
        navbar.style.backgroundColor ="#474744"
        footer.style.backgroundColor="#474744"
        condition = true
    } else {
        body.style.backgroundColor="white"
        navbar.style.backgroundColor = "white"
        footer.style.backgroundColor="white"
        condition = false
    }
})
