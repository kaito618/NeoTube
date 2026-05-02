document.getElementById("vid").addEventListener("click", function(){
    let link = this.getAttribute("link");
    window.open(link, "_blank");
});
document.getElementById("vid2").addEventListener("click", function(){
    let link = this.getAttribute("link");
    window.open(link, "_blank");
})
document.getElementById("vid3").addEventListener("click", function(){
    let link = this.getAttribute("link");
    window.open(link, "_blank");
})
document.getElementById("page-swapper").addEventListener("click", function(){
    window.location.href = "index.html";
});