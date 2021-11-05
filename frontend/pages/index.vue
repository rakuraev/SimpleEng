<template>
  <div class="container">
    Здравствуйте, это мой первый проект реализованный на стеке (vue(nuxt),express,node.js)<br>
    Меня зовут Никита<br>
    Вот мои контакты:<br>
    <a href="https://t.me/rakuraev">telegramm</a>
    <a href="https://vk.com/bezumnomojnobit1">vk</a>
    Приложения для запоминания слов на английском<br>
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
  font-size: 40px;
  display: flex;
  flex-direction:column ;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
