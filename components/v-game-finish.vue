<template>
  <div class="game-finish">
    <div class="game-finish__res">{{ res }}/20</div>
    <vGameFinishMessage :res="res"/>
    <div class="game-finish__exit-btn" @click="toNull()">Exit</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import vGameFinishMessage from '@/components/v-game-finish-message'
export default {
  props: ["toNull"],
  computed:{
    ...mapGetters({res:'game/getGameResult'})
  },
  components:{
    vGameFinishMessage
  }

};
</script>
<style lang="scss" scoped>
.game-finish {
  width: 1100px;
  height: 550px;
  background: #f7f7f7;
  border: 1px solid rgba(0, 0, 0, 0.11);
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__res {
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: 600;
    font-size: 72px;
    line-height: 121px;
    color: #9a9a9a;
  }
  &__message {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 47px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #9a9a9a;
  }
  &__exit-btn {
    width: 600px;
    height: 70px;
    background: #a8ff93;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>