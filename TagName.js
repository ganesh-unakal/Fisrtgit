var items= document.getElementsByClassName("list-group-item")
console.log(items)

for(var i=0; i<items.length; i++)
{
    items[2].style.backgroundColor='green';
    items[i].style.fontWeight='bold';
    
    items[1].style.backgroundColor='orange'
    
}
 /*Add a new li element without the same class Name 
 And
  try editing it with getelementsbyclassname and then by
   getelementbytagname*/
   

 var li=document.getElementsByTagName('li')
  console.log(li)
  items[4].textContent='gani';
  li[4].style.fontWeight='bold';
  li[4].style.color='orange';

  for(var i=0; i<li.length; i++){
  li[i].style.border='4px solid yellow'
  }

