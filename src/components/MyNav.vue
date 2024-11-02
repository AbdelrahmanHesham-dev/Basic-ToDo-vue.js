<template>
  <div class="comp">
    <ul>
      <li v-for="route in routes" :key="route.name">
        <router-link :to="{ name: route.name }">{{ route.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = router.getRoutes()
</script>

<style scoped>
ul {
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 40px;
  list-style: none;
  padding: 10px 0;
  background-color: #232424;
  border-radius: 10px
}

ul a {
  color: white;
  text-decoration: none;
  font-size: 25px;
  &.router-link-active {
    text-decoration: underline;
  }
}
</style>
