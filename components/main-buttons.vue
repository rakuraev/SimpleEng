<template>
  <div class="buttons">
    <div class="play-btn" @click="toPlayGame">
      <div class="subtitle">Play</div>
    </div>
    <div class="add-btn" @click="toAddWords">
      <div class="subtitle">Add Words</div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        toAddWords(){
            this.$router.push('/add-word')
        },
        toPlayGame(){
            this.$router.push('/game')
        }
    }
}
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  margin-top: 60px;
  .play-btn,
  .add-btn {
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
    cursor: pointer;

    .subtitle {
      font-weight: 600;
      font-size: 48px;
      line-height: 58px;
      color: #5f5f5f;
    }
  }
}
.play-btn {
  margin-right: 180px;
}
</style>