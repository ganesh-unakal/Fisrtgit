console.log(document.title);

document.title= "FormList";

//console.log(document.all[10]);

//document.all[10].textContent="GYMList";

var headerTitle=document.getElementById('header-title')
console.log(headerTitle.innerText)



var header= document.getElementById("main-header");
header.style.borderBottom='solid 8px #000';

var Text=document.getElementsByClassName("title")
console.log(Text)
Text[0].style.fontWeight='bold';
Text[0].style.color='green';
