var secondItem=document.querySelector
(".list-group-item:nth-child(2)")
secondItem.style.backgroundColor="green";

var secondI= document.querySelectorAll("li")
console.log(secondI)
secondI[1].style.color="green"

var odd=document.querySelectorAll('li:nth-child(odd)')
console.log(odd)
for(var i=0; i<odd.length; i++)
{
    odd[i].style.backgroundColor="green"
}
//odd.style.backgroundColor="green";


/*var even= document.querySelectorAll("li:nth-child(even)")
console.log(even)
   for(var i=0; i<even.length; i++){
       even[i].style.backgroundColor="orange"
   }

   var item=document.querySelectorAll('.title')
   console.log(item)
   item[0].textContent=7879;*/

   
