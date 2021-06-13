var head=document.getElementById('header');
var contUs=document.getElementById('cont-serv');
var main_scroll=document.getElementById('main');
var text_b=document.getElementById('cont-text');
var img_b=document.getElementById('img-abt');
var contact_b=document.getElementById('data-contact');
main_scroll.addEventListener("scroll",function(){
    var h=window.innerHeight;
    var d=text_b.getBoundingClientRect().top;
    var x=contact_b.getBoundingClientRect().top;
    /*console.log(h);
    console.log(d);
    console.log(x);*/
    if(d<=(h-100) & d>=(h-1100)){
        text_b.classList.add("transitionX");
        img_b.classList.add("transitionUp");
    }else{
        text_b.classList.remove("transitionX");
        img_b.classList.remove("transitionUp");
    }
});
var serv= document.getElementsByClassName("info");

var mark1=document.getElementById("mark1");
var mark2=document.getElementById("mark2");
var mark3=document.getElementById("mark3");
var mark4=document.getElementById("mark4");
var mark5=document.getElementById("mark5");
var mark6=document.getElementById("mark6");
var text_serv=document.getElementById("text-service");
var cont=0;
mark1.addEventListener("click", function(){
    cont=1;
    contar();
})
mark2.addEventListener("click", function(){
    cont=2;
    contar();
})
mark3.addEventListener("click", function(){
    cont=3;
    contar();
})
mark4.addEventListener("click", function(){
    cont=4;
    contar();
})
mark5.addEventListener("click", function(){
    cont=5;
    contar();
})
mark6.addEventListener("click", function(){
    cont=6;
    contar();
})
function contar(){
    if(cont>0){
        x=cont;
        switch(x){
            case 1:
                mark1.classList.add("select-mark");
                text_serv.innerHTML="Maintenance";
                mark2.classList.remove("select-mark");
                mark3.classList.remove("select-mark");
                mark4.classList.remove("select-mark");
                mark5.classList.remove("select-mark");
                mark6.classList.remove("select-mark");
                break;
            case 2:
                mark2.classList.add("select-mark");
                text_serv.innerHTML="Clean up";
                mark1.classList.remove("select-mark");
                mark3.classList.remove("select-mark");
                mark4.classList.remove("select-mark");
                mark5.classList.remove("select-mark");
                mark6.classList.remove("select-mark");
                break;
            case 3:
                mark3.classList.add("select-mark");
                text_serv.innerHTML="Planting";
                mark2.classList.remove("select-mark");
                mark1.classList.remove("select-mark");
                mark4.classList.remove("select-mark");
                mark5.classList.remove("select-mark");
                mark6.classList.remove("select-mark");
                break;
            case 4:
                mark4.classList.add("select-mark");
                text_serv.innerHTML="Sod installation";
                mark2.classList.remove("select-mark");
                mark3.classList.remove("select-mark");
                mark1.classList.remove("select-mark");
                mark5.classList.remove("select-mark");
                mark6.classList.remove("select-mark");
                break;
            case 5:
                mark5.classList.add("select-mark");
                text_serv.innerHTML="Pavers";
                mark2.classList.remove("select-mark");
                mark3.classList.remove("select-mark");
                mark4.classList.remove("select-mark");
                mark1.classList.remove("select-mark");
                mark6.classList.remove("select-mark");
                break;    
            case 6:
                mark6.classList.add("select-mark");
                text_serv.innerHTML="Leakage repairs";
                mark2.classList.remove("select-mark");
                mark3.classList.remove("select-mark");
                mark4.classList.remove("select-mark");
                mark5.classList.remove("select-mark");
                mark1.classList.remove("select-mark");
                break;                
        }
    }
}