var  form = document.getElementById('addForm') 
var itemList= document.getElementById('items')


//add submit button
form.addEventListener('submit',addItem);

//delete event 
itemList.addEventListener('click',removeItem)


//add item
function addItem(e)
{
    e.preventDefault();


//get input value
var newItem=document.getElementById('item').Value

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


/*//add text node with input value
//li.appendChild(document.createTextNode(newItem))
//create Edit button

var crtBtn=document.createElement('button')

//add classes
crtBtn.className="btn btn-danger btn-sm float-right delete"

//append text node
crtBtn.appendChild(document.createTextNode('EDIT'))

//append button to li
//li.appendChild(crtBtn)*/

        var newItem=document.getElementById('item').Value
//create new li elelment
        var li=document.createElement('li')
//add class
li.className='list-group-item'

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



