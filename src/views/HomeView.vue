<script setup>
const username = JSON.parse(localStorage.getItem('user')).username;
</script>

<template>
  <main>
    <span class="welcome">Hello <h2 class="customUsername">{{ username }}</h2></span>
  </main>
</template>
<style scoped>
.customUsername {
  font-size: 1rem;
  font-weight: bold;
  margin-left: 1rem;
}
.welcome {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>