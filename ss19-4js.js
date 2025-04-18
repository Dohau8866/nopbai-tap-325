document.addEventListener('DOMContentLoaded', () => {  
    const todoInput = document.getElementById('todoInput');  
    const addButton = document.getElementById('addButton');  
    const todoList = document.getElementById('todoList');  

    // Load todos from local storage  
    loadTodos();  

    addButton.addEventListener('click', () => {  
        const todoText = todoInput.value.trim();  
        if (todoText) {  
            addTodo(todoText);  
            todoInput.value = '';  
        }  
    });  

    function addTodo(text) {  
        const li = document.createElement('li');  
        li.textContent = text;  

        const deleteButton = document.createElement('button');  
        deleteButton.textContent = 'Xóa';  
        deleteButton.addEventListener('click', () => {  
            li.remove();  
            saveTodos();  
        });  
        
        li.appendChild(deleteButton);  
        todoList.appendChild(li);  
        saveTodos();  
    }  

    function loadTodos() {  
        const todos = JSON.parse(localStorage.getItem('todos')) || [];  
        todos.forEach(todo => addTodo(todo));  
    }  

    function saveTodos() {  
        const todos = [];  
        document.querySelectorAll('#todoList li').forEach(li => {  
            todos.push(li.textContent.replace('Xóa', '').trim());  
        });  
        localStorage.setItem('todos', JSON.stringify(todos));  
    }  
});  