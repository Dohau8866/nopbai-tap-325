document.getElementById('add-btn').addEventListener('click', addTodo);  

function addTodo() {  
    const todoInput = document.getElementById('todo-input');  
    const todoText = todoInput.value.trim();  

    if (todoText) {  
        const todoList = document.getElementById('todo-list');  
        const li = document.createElement('li');  

        li.innerHTML = `  
            ${todoText}  
            <button onclick="deleteTodo(this)">Xóa</button>  
        `;  

        todoList.appendChild(li);  
        todoInput.value = '';  
    }  
}  

function deleteTodo(button) {  
    const li = button.parentElement;  
    li.remove();  
}  