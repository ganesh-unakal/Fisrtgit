var  form = document.getElementById('addForm') 
var itemList= document.getElementById('items')
var filter= document.getElementById("filter")


//add submit button
form.addEventListener('submit', addItem);

//delete event 
itemList.addEventListener('click',removeItem)

filter.addEventListener('keyup', filterItems)
//add item
function addItem(e)
{
    e.preventDefault();


//get input value
var newItem=document.getElementById('item').value

//create new li elelment
var li=document.createElement('li')

//add class
li.className='list-group-item'

//add text node with input value
li.appendChild(document.createTextNode(newItem))

//create delete botton element
var deleteBtn=document.createElement('button')

//add class to del btn
deleteBtn.className='btn btn-danger btn-sm float-right delete'

//append textmode

deleteBtn.appendChild(document.createTextNode('X'))

//append delete button to li
li.appendChild(deleteBtn)

//append li to list
itemList.appendChild(li)

/*Now go ahead and take description of the item too 
in the input box where you are creating the item.
Watch this demo video.

When you are displaying the item show the
 description of the item below that. 
 [If stuck for long watch hint 1]*/

//var inputValue=document.getElementsById('items').value
var description= document.getElementById('description').value


//adding text node
var descriptionNode= document.createTextNode(description);

//apppend to the li
li.appendChild(descriptionNode)






//adding text node
var descriptionNode= document.createTextNode(' '+description);

//apppend to the li
li.appendChild(descriptionNode)
}


//remove item
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if (confirm('are you sure'))
        {
            var li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}


var newItem=document.getElementById('item').Value
//create new li elelment
var li=document.createElement('li')
        
//add class
//li.className='list-group-item'

//add text node with input value
//li.appendChild(document.createTextNode(newItem))


//CREATE EDIT BUTTON
var editBtn= document.createElement('button')
console.log(editBtn)


//add classes to del btn
editBtn.className='btn btn-primary btn-sm float-right delete'


//add text node
editBtn.appendChild(document.createTextNode('Edit'))

//append to button li
li.appendChild(editBtn)

//add append li to list
itemList.appendChild(li)

//add append to btn



/*aading edit button 
var itemList=document.querySelector('#items')

itemList.children.innerHTML='<button>Edit</button>'*/




//console.log(filter)


function filterItems(e)
{
    //covert text to lowecase
    var text = e.target.value.toLowerCase();
    

    //get list
    var items=itemList.getElementsByTagName('li')

    //convert to an array
    Array.from(items).forEach(function(item)
    {
        var itemName=item.firstChild.textContent;
        var description=item.childNodes[1].textContent;
        

        if(itemName.toLowerCase().indexOf(text)!=-1 || description.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block'
        }else
        {
            item.style.display='none'
        }
        
    });
}

