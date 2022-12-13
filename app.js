//Selectors
const todoDropbox = document.getElementsByName('filter_rb')
const todoInput = document.querySelector(".todo-input");
const categoryInput = document.getElementById("categoryTodos");
const categoryInputText = categoryInput.options[categoryInput.selectedIndex].value;
const todofilter = document.querySelector(".filter")
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
//const filterOption = document.querySelector(".filter-todo");
const timeInput = document.querySelector(".time-input")
const filterInput = document.querySelector(".filter")
const today = new Date();
const dd = today.getDate()
const mm = today.getMonth() + 1 //January is 0!
const yyyy = today.getFullYear()
timeInput.placeholder = `${yyyy}-${mm}-${dd}`;


//Event Listeners
filterInput.addEventListener('keyup', filterNames);
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);


//Functions


function addTodo(event){
    event.preventDefault(); //Prevent form for submiting
    
    const todoDiv = document.createElement("div"); //Create a div for todo list
    todoDiv.classList.add("todo"); //Add class for the div
    todoDiv.classList.add(categoryInput.options[categoryInput.selectedIndex].value);

    const newTodo = document.createElement("li"); //Creata a li for the list
    const newTodo1 = document.createElement("li");
    const newTodo2 = document.createElement("li");
    
    newTodo1.innerText = categoryInput.options[categoryInput.selectedIndex].text;
    if(timeInput.value === ""){
    newTodo2.innerText = timeInput.placeholder;}
    else{
        newTodo2.innerText = timeInput.value;
    }
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item")
    newTodo1.classList.add("todo-itemDropbox")
    newTodo2.classList.add("todo-itemTime") //Class for the li
    todoDiv.appendChild(newTodo);
    todoDiv.appendChild(newTodo1);
    todoDiv.appendChild(newTodo2);
    
    const completeBtn = document.createElement("button")//Create complete button
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'; //Add check btn
    completeBtn.classList.add("complete-btn");
    todoDiv.appendChild(completeBtn);
    
    const trashBtn = document.createElement("button")//Create delete button
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>'; //Add bin btn
    trashBtn.classList.add("trash-btn");
    todoDiv.appendChild(trashBtn);
    
    
    todoList.appendChild(todoDiv)//APPEND TO LIST
    
    todoInput.value = "";//Clear field after appending it
    timeInput.value = "";
}
function deleteCheck(e){
    const item = e.target; //Get what button clicked at
    if(item.classList[0]==="trash-btn"){
        const todo = item.parentElement; //Taking the parent of the btn
        todo.classList.add("fall") //Anitmation
        todo.addEventListener("transitionend", function(){ //Wait for the animation is done
            todo.remove(); //And deleting it
        })
    }
    if(item.classList[0]==="complete-btn"){
        const todo = item.parentElement; //Taking the parent of the btn
        todo.classList.toggle("completed");
    }
}

function filterNames(){
    const filterValue = document.getElementById('filterInput');
    const filterSearch = filterValue.value;
    console.log(filterSearch);
    
    const allTodoInput = document.querySelectorAll("li.todo-item");
    for(let i = 0;i < allTodoInput.length;i++){
        const a = allTodoInput[i].innerHTML;
        console.log(a);
        const classCheck = allTodoInput[i].parentElement;
        if(a.indexOf(filterSearch) > -1 && classCheck.classList.contains(categoryInputText)){
            allTodoInput[i].parentElement.style.display = "flex";
            
            console.log(classCheck)
        }else{
            allTodoInput[i].parentElement.style.display = "none";
        }
    }
}

todoDropbox.forEach(function(e) {
    e.addEventListener("click", function() {
        todofilter.value = "";

        const todos = todoList.children;
        for(let i = 0;i < todos.length;i++){
            const item = todos[i]
            
            console.log(e.value)
            switch(e.value){
            
                case "none":
                    console.log("case 0")
                    item.style.display = "flex";
                break;
                case "inHouse":
                    console.log("case 1")
                    if(item.classList.contains("inHouse")){
                        console.log("YESBOX")
                        item.style.display = "flex";
                    }
                    else{item.style.display = "none";}
                break;
                case "outHouse":
                    console.log("case 2")
                    if(item.classList.contains("outHouse")){
                        console.log("YESBOX")
                        item.style.display = "flex";
                    }
                    else{item.style.display = "none";}
                break;
                case "rest":
                    console.log("case 3")
                    if(item.classList.contains("rest")){
                        console.log("YESBOX")
                        item.style.display = "flex";
                    }
                    else{item.style.display = "none";}
                break;
                default:
                    console.log("case 4")
                    alert("Error");
                break;
                } 
        }
        
    });
});



/*TEST
----------------------------------------------------------*/
/*function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";   
                break;
                case "completed":
                    if(todo.classList.contains("completed")){
                        todo.style.display = "flex";    
                    }else{
                        todo.style.display = "none"; 
                    }
                    break;
                case "uncompleted":
                    if(!todo.classList.contains("completed")){
                        todo.style.display = "flex";    
                    }else{
                        todo.style.display = "none"; 
                    }
                    break;
                default:
                    break;
                

        }
    });

}*/

/*function (){
    const fintSelectRb = () =
}

var betCar;
$('.betCar').click(function(){
betCar=(this).value;
});
*/

/*function filterRadioBtn(){ //filterRb
    const todos = todoList.childNodes;
    const rbChecked = document.querySelector("input[name='filter_rb']")
    console.log(rbChecked)
    console.log(todos)

    
}*/
