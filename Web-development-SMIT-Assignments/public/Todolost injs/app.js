
var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item")

    // Create li tag with text node 

    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    // Create delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.setAttribute("class", "todo-btn")
    delBtn.setAttribute("onclick", "deleteitem(this)")
    delBtn.appendChild(delText)

    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class", "todo-btn")
    editBtn.setAttribute("onclick", "editItem(this)")



    li.appendChild(delBtn)
    li.appendChild(editBtn)
    list.appendChild(li)

    todo_item.value = ""

}
function editItem(e) {
    var editValue = prompt("Enter edit value", val)
    var val = e.parentNode.firstChild.nodeValue;

    e.parentNode.firstChild.nodeValue = editValue
}

function deleteitem(e) {
    e.parentNode.remove()

}
function delTodo() {
    list.innerHTML = ""
}