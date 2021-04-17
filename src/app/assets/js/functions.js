var head=document.getElementById('header');
var contUs=document.getElementById('cont-serv');

/*contUs.addEventListener("wheel",function(){
    contUs.classList.remove("cont-serv");
    contUs.classList.add("cont-serv1");
})*/
var link1=document.getElementById('link-serv1');
var link2=document.getElementById('link-serv2');

link1.addEventListener("click",function(){
    link1.classList.add("link-active");
    link2.classList.remove("link-active");
})
link2.addEventListener("click",function(){
    link2.classList.add("link-active");
    link1.classList.remove("link-active");
})
