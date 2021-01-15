<template>
  <div class="container">
    Здравствуйте, это мой первый проект реализованный на стеке (vue(nuxt),express,node.js)
    Меня зовут Никита
    Вот мои контакты:
    telegramm:https://t.me/rakuraev
    vk:https://vk.com/bezumnomojnobit1
    Приложения для запоминания слов на английском
    <NuxtLink to='/main'>На страницу приложения</NuxtLink>
  </div>
</template>

<script>

export default {
  components:{
    
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
