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
var add;
var serv1= document.getElementById("info1");
var serv2= document.getElementById("info2");
var serv3= document.getElementById("info3");
var serv4= document.getElementById("info4");
var serv5= document.getElementById("info5");
var serv6= document.getElementById("info6");
var serv7= document.getElementById("info7");
var serv8= document.getElementById("info8");
var clas=document.getElementsByClassName("box-info");
serv1.addEventListener("click",function(){
    add=0;
    change(add);
});
serv2.addEventListener("click",function(){
    add=1;
    change(add);
});
serv3.addEventListener("click",function(){
    add=2;
    change(add);
});
serv4.addEventListener("click",function(){
    add=3;
    change(add);
});
serv5.addEventListener("click",function(){
    add=4;
    change(add);
});
serv6.addEventListener("click",function(){
    add=5;
    change(add);
});
serv7.addEventListener("click",function(){
    add=6;
    change(add);
});
serv8.addEventListener("click",function(){
    add=7;
    change(add);
});
function change(x){
    prop=x;
    for(i=0;i<=7;i++){
        if(i==prop){
            clas[i].classList.add("down-box");
        }else{
            clas[i].classList.remove("down-box");
        }
    }
}
var item_img=document.getElementsByClassName("gallery-item");
var random=Math.floor(Math.random() * (16-1+1)) + 0;
console.log(random);
function animatimg(){
    var cont;
    for(cont=0;cont<=item_img.length;cont++){
        console.log(item_img[cont]);
    }
}
setTimeout(animatimg,4000);
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