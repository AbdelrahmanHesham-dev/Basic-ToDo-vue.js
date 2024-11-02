<template>
    <div class="show-todos">
      <h1>Show Todos</h1>
      <table class="todo-table">
        <thead>
          <tr>
            <th>Text</th>
            <th>From</th>
            <th>To</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="todo in todoList" :key="todo.createdAt" :class="{ completed: todo.completed }">
            <td>{{ todo.text }}</td>
            <td>{{ todo.from }}</td>
            <td>{{ todo.to }}</td>
            <td>{{ new Date(todo.createdAt).toLocaleDateString() }}</td>
            <td>
              <div class="action-buttons">
                <button @click="markAsCompleted(todo)">Completed</button>
                <button @click="deleteTodo(todo)">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const todoList = ref([])
  
  const updateTodos = () => {
    if (localStorage.getItem('todos')) {
      todoList.value = JSON.parse(localStorage.getItem('todos'))
    }
  }
  
  const markAsCompleted = (todo) => {
    todo.completed = true;

    localStorage.setItem('todos', JSON.stringify(todoList.value));
  }
  
  const deleteTodo = (todo) => {
    todoList.value = todoList.value.filter(t => t.createdAt !== todo.createdAt);
    localStorage.setItem('todos', JSON.stringify(todoList.value)); 
  }
  
  onMounted(() => {
    updateTodos()
  })
  </script>
  
  <style scoped>
  .show-todos {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .todo-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .todo-table th, .todo-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  .todo-table th {
    background-color: #f1f1f1;
  }
  
  .completed {
    background-color: #078b69;
  }
  
  .action-buttons {
    display: flex;
    gap: 10px; 
  }
  
  button {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #078b69;
    color: white;
  }
  
  button:focus {
    outline: none;
  }
  </style>
  