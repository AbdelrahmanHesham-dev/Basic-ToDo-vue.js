<template>
  <div class="container">
    <h1>Add New To Do</h1>
    <form @submit.prevent="addTodo">
      <input
        required
        v-model="todoObject.text"
        type="text"
        placeholder="Enter your task"
      />
      <input
        required
        v-model="todoObject.from"
        type="date"
        placeholder="from"
      />
      <input required v-model="todoObject.to" type="date" placeholder="to" />
      <input type="submit" value="Add" />
    </form>
    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const todoList = ref([])
const message = ref('')

const todoObject = ref({
  id: '',
  text: '',
  from: '',
  to: '',
  createdAt: '',
})

const addTodo = () => {

  if (new Date(todoObject.value.from) > new Date(todoObject.value.to)) {
    message.value = 'The "from" date must be before the "to" date.';
    return;
  }

  todoObject.value.id = Date.now(); 
  todoObject.value.createdAt = new Date().toISOString();
  todoList.value.push(todoObject.value);
  addToLS();
  message.value = 'Todo was added successfully';
  resetTodoObject();
}

const resetTodoObject = () => {
  todoObject.value = {
    id: '',
    text: '',
    from: '',
    to: '',
    createdAt: '',
  }
}

const addToLS = () => {
  localStorage.setItem('todos', JSON.stringify(todoList.value));
}

const updateTodos = () => {
  if (localStorage.getItem('todos')) {
    todoList.value = JSON.parse(localStorage.getItem('todos'));
  }
}

onMounted(() => {
  updateTodos();
})
</script>

<style scoped>
.container {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  outline: none;
}

form input[type='text'],
form input[type='date'] {
  width: 90%;
  padding: 10px;
  font-size: 20px;
  border-radius: 5px;
  background-color: #f0f0f0; 
  border: 1px solid #ccc; 
}

form input[type='text']::placeholder {
  color: #888; 
}

form input[type='submit'] {
  width: 93%;
  padding: 10px;
  font-size: 19px;
  background-color: #232424;
  color: white;
  outline: none;
  border-radius: 5px;
  cursor: pointer; 
  margin-top: 10px;
}

form input[type='date'] {
  margin-top: 10px;
  margin-right: 10px;
}

.message {
  margin-top: 20px;
  color: green; 
  font-size: 16px;
}
</style>