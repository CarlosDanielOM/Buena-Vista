var head=document.getElementById('header');
var contUs=document.getElementById('cont-serv');

/*contUs.addEventListener("wheel",function(){
    contUs.classList.remove("cont-serv");
    contUs.classList.add("cont-serv1");
})*/
var link1=document.getElementById('link-serv1');
var link2=document.getElementById('link-serv2');
var serv1=document.getElementById('serv1');
var serv2=document.getElementById('serv2');

link1.addEventListener("click",function(){
    link1.classList.add("link-active");
    link2.classList.remove("link-active");
    serv2.style.width ="0%";
    serv1.style.width ="100%";
})
link2.addEventListener("click",function(){
    link2.classList.add("link-active");
    link1.classList.remove("link-active");
    serv1.style.width ="0%";
    serv2.style.width ="100%";
})
