window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("bg-[#2d69ca99]", window.scrollY > 0)
})

