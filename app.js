// seclectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");

const todoList = document.querySelector(".todo-list");
const doneList = document.querySelector(".done-list");
const heading = document.querySelector(".task-title");
const heading1 = document.querySelector(".task-title-1");
//console.log(heading);
//console.log(heading.classList);

//event Listerns

todoButton.addEventListener("click",addToDo);
todoList.addEventListener("click",deleteItem);
//functions

function addToDo(event){
    event.preventDefault();
    // create a todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //warning sign
    const warning = document.createElement("div");
    warning.innerHTML = '<i class="fa-solid text-red-500 fa-exclamation"></i>';
    warning.classList.add("warning");
    todoDiv.appendChild(warning);
    //create  a li tag
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // check button
    const checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fa-solid text-green-500 fa-check"></i>';
    checkButton.classList.add("edit-button");
    todoDiv.appendChild(checkButton);
    // Trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa-solid text-red-500 fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);
    
    // append todoDIv to todoList
    todoList.appendChild(todoDiv);

    //clear todoInput ;
    todoInput.value="";
    if (todoList.childNodes.length > 0){
        heading.classList.remove("hidden");
    }

    



};
function deleteItem(e){
    //console.log(e);
    const item = e.target;
    //console.log(item);
    //console.log(item.classList)
    if (item.classList.contains("trash-button")){
        
        const toDelete = item.parentElement;
        //Animation
        toDelete.classList.add("fall");
        toDelete.addEventListener("transitionend",function(){
            toDelete.remove();

        })
        
    }
    if (item.classList.contains("edit-button")){
        const checked = item.parentElement;
        checked.classList.toggle("completed");
        console.log(doneList);
        console.log(checked);
        //changing color of warning
        const warn = checked.childNodes[0];
        //.log(warn);
        warn.childNodes[0].classList.toggle("text-red-500")
        checked.addEventListener("transitionend",function(){
            
            doneList.appendChild(checked);
            warn.childNodes[0].classList.add("hidden")
            if (doneList.childNodes.length > 0){
                heading1.classList.remove("hidden");
            }
            

            //checked.remove();

        })

    }
}