<template>
  <div class="main">
    <div class="title">Hi,{{getUser}}</div>
    <mainButtons />
  </div>
</template>

<script>
import mainButtons from "@/components/main-buttons";
import {mapMutations,mapGetters} from 'vuex'
export default {
  layout:'logined',
  head(){
    return{
      title:'Главное Меню'
    }
  },
  components: {
    mainButtons,
  },
  computed:{
    ...mapGetters(['getUser'])
  },
  methods:{
    ...mapMutations(['SET_USER_NAME_TO_STATE'])
  },
  beforeMount(){
   this.SET_USER_NAME_TO_STATE()
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  .title {
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    color: #5f5f5f;
  }
}
</style>