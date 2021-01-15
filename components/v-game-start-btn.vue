<template>
  <div class="game-start-btn" @click="toStart()" >Start</div>
</template>

<script>
export default {
  props: {
    toStart: {
      type: Function,
      default: "",
    },
  },
};
</script>


<style lang="scss" scoped>
.game-start-btn {
  outline: none;
  height: 400px;
  width: 400px;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.25);
  border-radius: 41px;
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  color: #5f5f5f;
  cursor: pointer;
}
</style>