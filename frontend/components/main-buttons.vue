<template>
  <div class="buttons">
    <div class="play-btn" @click="toPlayGame">Play</div>
    <div class="add-btn" @click="toAddWords">Add Words</div>
  </div>
</template>

<script>
export default {
  methods: {
    toAddWords() {
      this.$router.push("/add-word");
    },
    toPlayGame() {
      this.$router.push("/game");
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
 .buttons {
    @include main-buttons;
    margin-top: 25px;
    flex-direction:column;
    .play-btn,
    .add-btn {
      @include nav-buttons;
      height: 250px;
      width:250px;
      margin: 10px 0px;
      font-size: 28px;
    }
  }
}
@media (min-width: 769px) {
 .buttons {
    @include main-buttons;
    .play-btn,
    .add-btn {
      @include nav-buttons;
      height: 300px;
      width:300px;
      margin: 0 40px;
      font-size: 36px;
    }
  }
}
@media (min-width: 900px) {
  .buttons {
    @include main-buttons;
    .play-btn,
    .add-btn {
      @include nav-buttons;
      margin: 0 40px;
    }
  }
}
@media (min-width: 1200px) {
  .buttons {
    @include main-buttons;
    .play-btn,
    .add-btn {
      @include nav-buttons;
      margin: 0 90px;
    }
  }
}
</style>