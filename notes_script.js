var i="i-1";
var l="l-1";
var j="p-1";
var but="b-1";
var edit_title="et-";
var edit_notes="en-";


function ans() 
{ 
  var parent_notes=document.getElementById("parent_notes");  
  var a = document.getElementById("val1").value;  
  var b = document.getElementById("val2").value; 

  if (a!="" && b!=""){
    var br=document.createElement('br');
    var input=document.createElement('input');      
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "hide");

    input.setAttribute("id", i);
    var label=document.createElement('label');
 //   label.setAttribute("contenteditable", "true");
    label.setAttribute("class", "title_notes");
    label.setAttribute("for", i);
    label.setAttribute("id", l);
    l=l+"1";
    i=i+"1";
    var p=document.createElement('p');
    p.setAttribute("class", "p_notes")
    p.setAttribute("id", j);
   // p.setAttribute("contenteditable", "true");
    j=j+"1";
    var dv=document.createElement('div');
    dv.setAttribute("class", "notes_border");
    

    //добаление замметки
    parent_notes.appendChild(dv);
    dv.appendChild(input);
    dv.appendChild(label);
    label.appendChild(document.createTextNode(a));
    dv.appendChild(p);
    p.appendChild(document.createTextNode(b));
    p.appendChild(br)

    //кнопки
    var del = document.createElement("input");
    del.setAttribute("type", "button");
    del.setAttribute("value", "Del");
    del.setAttribute("class", "inbut");
    del.setAttribute("onclick", "delite(this);");
    dv.appendChild(del);

    var edit = document.createElement("input");
    edit.setAttribute("type", "button");
    edit.setAttribute("value", "Edit");
    edit.setAttribute("class", "inbut");
    edit.setAttribute("id", but);
    but=but+"1";
    edit.setAttribute("onclick", "edit(this);");
    dv.appendChild(edit);
  }
  //очищение ввода
  document.getElementById("val1").value="";
  document.getElementById("val2").value="";  
}



function delite(obj){
  ((obj.parentNode).parentNode).removeChild(obj.parentNode);
}

function edit(obj){
  var a=obj.id;
  var acc="acc-"+a.substr(2,100);
  var b="p-"+a.substr(2,100);
  var c="l-"+a.substr(2,100); 
  var br=document.createElement('br');
  var elem=document.getElementById(b);
  var text1=document.getElementById(c).innerHTML;
  var text2=document.getElementById(b).innerHTML;

  var textarea1=document.createElement('textarea');
  var textarea2=document.createElement('textarea');

  edit_title=edit_title+"1"; 
  textarea1.setAttribute("class", "edit_area_title");
  textarea1.setAttribute("id",edit_title);
  textarea1.innerHTML=text1;

  edit_notes=edit_notes+"1"; 
  textarea2.setAttribute("class", "edit_area_notes");
  textarea2.setAttribute("id", edit_notes);
  textarea2.innerHTML=text2;

  elem.appendChild(textarea1);
  elem.appendChild(br);
  elem.appendChild(textarea2);
  
  
  var accept = document.createElement("input");
  accept.setAttribute("type", "button");
  accept.setAttribute("value", "Accept");
  accept.setAttribute("class", "inbut");
  accept.setAttribute("id",acc);
  accept.setAttribute("onclick", "acc(this);");
  elem.appendChild(accept);
}


function acc(obj){
  var a=obj.id;
  a=a.substr(4,100);
  var text1=document.getElementById(edit_title).value;
  var text2=document.getElementById(edit_notes).value;
  document.getElementById("l-"+a).innerHTML=text1;
  document.getElementById("p-"+a).innerHTML=text2;
  
  document.getElementById(edit_title).remove();
  document.getElementById(edit_notes).remove();



}



