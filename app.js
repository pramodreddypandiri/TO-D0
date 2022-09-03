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
    if(todoInput.value){

    
        //console.log(todoInput.value);
    
        
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
        //Add to local storage
        addToLocalStorage(todoInput.value)
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
        
    
    }
    // else{
    //     heading.classList.add("hidden")
    // }
    



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
        if (todoList.childNodes.length > 1){
            heading.classList.remove("hidden");
        }
        
        if (todoList.childElementCount  == 1){
            heading.classList.add("hidden")
        }
        
        // console.log(todoList);
        // console.log(todoList.childElementCount);
        
    }
    
    
    if (item.classList.contains("edit-button")){
        const checked = item.parentElement;
        checked.classList.toggle("completed");
        //console.log(doneList);
        //console.log(checked);
        //changing color of warning
        const warn = checked.childNodes[0];
        //.log(warn);
        warn.childNodes[0].classList.toggle("text-red-500")
        checked.addEventListener("transitionend",function(){
            let temp = checked;
            doneList.appendChild(temp);
            warn.childNodes[0].classList.add("hidden")
            if (doneList.childNodes.length >= 1){
                heading1.classList.remove("hidden");
            }
            

            //checked.remove();

        })
        if (todoList.childNodes.length > 1){
            heading.classList.remove("hidden");
        }
        
        if (todoList.childElementCount == 1){
            heading.classList.add("hidden")
        }
        
        // console.log(todoList);
        // console.log(todoList.childElementCount);

    }
    
    // console.log(todoList.childNodes);
    // console.log(todoList.childNodes.length );
    // console.log(heading.classList);
    
}
//function to add todos to local storage
function addToLocalStorage(todo){
    //check if local storage has any data in there
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        
        todos = JSON.parse(localStorage.getItem("todos"));
        //console.log(todos);

    }
    todos.push(todo);
    //console.log(todos);
    localStorage.setItem("todos",JSON.stringify(todos));
}