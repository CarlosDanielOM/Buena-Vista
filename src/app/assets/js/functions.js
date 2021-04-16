var head=document.getElementById('header');
var contUs=document.getElementById('cont-serv');

contUs.addEventListener("wheel",function(){
    contUs.classList.remove("cont-serv");
    contUs.classList.add("cont-serv1");
})
