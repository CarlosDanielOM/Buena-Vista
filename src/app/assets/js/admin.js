var sec1=document.getElementById('sec1');
var sec2=document.getElementById('sec2');
var sec3=document.getElementById('sec3');
var usr=document.getElementById('user');
var cont_sec=0;
var mod=document.getElementsByClassName('content-mod');
console.log(mod);
sec1.addEventListener("click",function(){
    cont_sec=1;
    change_sec(cont_sec);
});
sec2.addEventListener("click",function(){
    cont_sec=2;
    change_sec(cont_sec);
});
sec3.addEventListener("click",function(){
    cont_sec=3;
    change_sec(cont_sec);
});
function change_sec(x){
    var c=x;
    for(i=0;i<=3;i++){
        if(i==c){
            mod[i].classList.remove("shadow");
            mod[i].classList.add("show");
        }else{
            mod[i].classList.remove("show");
            mod[i].classList.add("shadow");
        }
    }
}