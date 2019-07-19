function numtarget(val){ 
    document.getElementById("val").value+=val;   
} 

function ans() 
{ 
    var a = document.getElementById("val").value;  
    var b = eval(a);
    if (b==Infinity){
        document.getElementById("val").value = "Деление на 0";
        setInterval("cl()", 3000);}
    else{document.getElementById("val").value = b.toFixed(5)}
 /*   else{c=b.toString();
        if (c[11]>=5){
            c[10]=c[10]+1;
            c=c.substring(0,11);
        }
        else{
            c=c.substring(0,11);
        }
        document.getElementById("val").value=c;}*/
} 

function cl(){
    document.getElementById("val").value="";
}

function del(){
    var a=document.getElementById("val").value
   // var b = eval(a.slice(0,-1)) 
   var b = a.slice(0,-1);
    if (b==undefined || b=='-'){
        b="";}
    document.getElementById("val").value = b;
}

var sleep=0;
setInterval("sleep++;", 1000); 
setInterval("updateChat()", 1000); 
document.onmousemove = activeUser; 
function activeUser() {
    sleep=0;
}

function updateChat() {
  if (sleep>=10) { 
        cl();
  }
}
