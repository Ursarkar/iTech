function numtarget(val){ 
    document.getElementById("val").value+=val;   
} 

function ans() 
{ 
    var a = document.getElementById("val").value;  
    var b = eval(a);
    if (b==Infinity){
        document.getElementById("val").value = "Деление на 0";}
    else{document.getElementById("val").value = b.toFixed(5)}

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

var timeout = 15; //seconds
var reset = 0;
document.onclick = function() {
    reset = 0;
};
document.onmousemove = function() {
    reset = 0;
};
document.onkeypress = function() {
    reset = 0;
};
window.setInterval(checktime, 1000);

function checktime() {
    reset++;
    var oPanel = document.getElementById("SecondsUntilExpire");
    if (oPanel)
        oPanel.innerHTML = (timeout - reset) + "";
    if (reset >= timeout) {
        alert("Не спи, замерзнешь!");
    cl();
    }
}