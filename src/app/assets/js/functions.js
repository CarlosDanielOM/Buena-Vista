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
})
var mark1=document.getElementById("mark1");
var mark2=document.getElementById("mark2");
var mark3=document.getElementById("mark3");
var mark4=document.getElementById("mark4");
var mark5=document.getElementById("mark5");
var mark6=document.getElementById("mark6");

/*switch (){
    
}*/