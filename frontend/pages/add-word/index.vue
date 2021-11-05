<template>
    <vAddForm/>
</template>

<script>
import vAddForm from '@/components/v-add-form'
export default {
    layout:'logined',
    head(){
        return{
            title:'Добавить Слово'
        }
    },
    components:{
        vAddForm
    }

}
</script>