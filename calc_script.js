function numtarget(val){ 
    document.getElementById("val").value+=val 
} 

function ans() 
{ 
    var a = document.getElementById("val").value     
    var b = eval(a)
    if (b==Infinity){
        document.getElementById("val").value = "Деление на 0"
        setInterval("cl()", 2000)}
    else{document.getElementById("val").value = b}  
} 

function cl(){
    document.getElementById("val").value=""
}

function del(){
    var a=document.getElementById("val").value
    var b = eval(a.slice(0,-1)) 
    if (b==undefined){
        b=""}
    document.getElementById("val").value = b
}


var sleep= 10;
var sleep_time = 0; 
setInterval("sleep_time++;", 1000); 
setInterval("updateChat()", 1000); 
document.onmousemove = activeUser; 
function activeUser() {
    sleep_time = 0;
}
function updateChat() {
  if (sleep_time >= sleep) { 
        document.getElementById("val").value="";
        return;
  }

}
