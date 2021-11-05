<template>
    <vGameMain/>
</template>

<script>
import vGameMain from "@/components/v-game-main"
export default {
    layout:'logined',
    head(){
        return{
            title:'Игра'
        }
    },
    components:{
        vGameMain
    }
}
</script>