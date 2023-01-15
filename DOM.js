//Traversing the DOM

 var itemList=document.querySelector('#items')
 //console.log(itemList)

 //perentNode
/*console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor='#f4f4f4'
console.log(itemList.parentNode.parentNode.parentNode)*/

//parentElement
/*console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor='#f4f4f4'
console.log(itemList.parentNode.parentNode.parentNode)*/


// childNode
/*console.log(itemList.childNode)
console.log(itemList.children)
console.log(itemList.children[1])
itemList.childNode[1].style.backgroundColor='yellow'*/


//childElement
            /*console.log(itemList.childElement)
                    itemList.childElement.style.backgroundColor='#f4f4f4'
            console.log(itemList.childElement.childElement.childElement)*/

   
 //firstchild   
 /*console.log(itemList.firstChild)   

 
 //firstElementChild
 console.log(itemList.firstElementChild)
 itemList.firstElementChild.textContent='heloo'*/


 //creatElement
//create new div

var newDiv=document.createElement('div')
console.log(newDiv)

//add class
newDiv.className='hello'

// add id 
newDiv.id='hello 1'

//add attribute
newDiv.setAttribute('title','Hello Div')

//create text node
var newDivText=document.createTextNode('HEllo word')

//add text div
newDiv.appendChild(newDivText)

var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')

console.log(newDiv)
newDiv.style.fontSize='30px'
container.insertBefore(newDiv,h1)

//parentNode=document.getElementsById('items')
itemList.innerHTML='<h4>HEllo word</h4>'+itemList.innerHTML
