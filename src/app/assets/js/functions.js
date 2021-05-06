var head=document.getElementById('header');
var contUs=document.getElementById('cont-serv');
/*var link1=document.getElementById('link-serv1');
var link2=document.getElementById('link-serv2');
var serv1=document.getElementById('serv1');
var serv2=document.getElementById('serv2');
link1.addEventListener("click",function(){
    link1.classList.add("link-active");
    link2.classList.remove("link-active");
    serv1.classList.remove("output");
    serv2.classList.remove("input");
})
link2.addEventListener("click",function(){
    link2.classList.add("link-active");
    link1.classList.remove("link-active");
    serv1.classList.add("output");
    serv2.classList.add("input");
})*/
var main_scroll=document.getElementById('main');
var text_b=document.getElementById('cont-text');
var img_b=document.getElementById('img-abt');
var contact_b=document.getElementById('data-contact');
main_scroll.addEventListener("scroll",function(){
    var h=window.innerHeight;
    var d=text_b.getBoundingClientRect().top;
    var x=contact_b.getBoundingClientRect().top;
    console.log(h);
    console.log(d);
    console.log(x);
    if(d<=(h-100) & d>=(h-1100)){
        text_b.classList.add("transitionX");
        img_b.classList.add("transitionUp");
    }else{
        text_b.classList.remove("transitionX");
        img_b.classList.remove("transitionUp");
    }
    if(x>=(h-20)){
        contact_b.classList.add("transitionDown");
    }else{
        contact_b.classList.remove("transitionDown");
    }
})

