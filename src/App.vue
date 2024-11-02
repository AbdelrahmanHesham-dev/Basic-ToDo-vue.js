<template>
  <div class="docker">
    <MyNav />
    <router-view />
  </div>
</template>

<script setup>
import MyNav from '@/components/MyNav.vue'
</script>

<style scoped>
.docker {
  width: 90%;
  margin: 0 auto;
  background-color: rgb(72, 75, 74);
  height: 95vh;
  border-radius: 10px;
}
</style>
