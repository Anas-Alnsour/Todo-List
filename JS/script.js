const todobtn = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

todobtn.addEventListener("click",addTask);
todoList.addEventListener("click",checkOrDelete);


function addTask(e){
    e.preventDefault();
    
    const todoli = document.createElement('li');
    todoli.classList.add('todo');


    const tododiv = document.createElement('div');
    tododiv.classList.add('todo-item');

    tododiv.innerText = todoInput.value;

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn')
    completeBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

    const trashBtn = document.createElement('button');
    trashBtn.classList.add('trash-btn')
    trashBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    todoli.appendChild(tododiv);
    todoli.appendChild(completeBtn);
    todoli.appendChild(trashBtn);

    todoList.appendChild(todoli);

    todoInput.value="";

}

function checkOrDelete(e){
    const item = e.target.closest('button'); 

    if(item && item.classList.contains('complete-btn')){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

    else if(item && item.classList.contains('trash-btn')){
        const todo = item.parentElement;
        todo.classList.toggle("fall");
        todo.addEventListener("transitionend", () => {
            todo.remove();
        });
    }
}

