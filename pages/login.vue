<template>
        <login/> 
</template>

<script>
import login from "@/components/login"
export default {
    head(){
    return{
      title:'Вход в систему'
    }
  },
    components:{
        login
    }
}
</script>

<style lang="scss" scoped>
</style>