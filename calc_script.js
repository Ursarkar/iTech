function numtarget(val){ 
    document.getElementById("val").value+=val   
} 

function ans() 
{ 
    var a = document.getElementById("val").value     
    var b = eval(a)
    if (b==Infinity){
        document.getElementById("val").value = "Деление на 0"
        setInterval("cl()", 3000)}
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

var sleep=0;
setInterval("sleep++;", 1000); 
setInterval("updateChat()", 1000); 
document.onmousemove = activeUser; 
function activeUser() {
    sleep=0;
}
function updateChat() {
  if (sleep>5) { 
        cl();
        return;
  }

}
