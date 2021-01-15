<template>
  <header class="header">
    <div class="logo" @click="toMain">SimpleEng</div>
    <div class="exit" @click="logout">Exit</div>
  </header>
</template>

<script>
export default {
    methods:{
        toMain(){
            this.$router.push("/main")
        },
        async logout(){
            await this.$auth.logout()
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
  width: 1200px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  .logo,
  .exit {
    font-weight: 600;
    font-size: 18px;
    line-height: 50px;
    color: #686868;
    cursor: pointer;
  }
}
</style>