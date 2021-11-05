<template>
  <div class="game-start__btn" @click="toStart()">Start</div>
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
.game-start__btn {
  @include nav-buttons;
  margin-top: -50px;
}
@media (max-width: 768px) {
  .game-start__btn {
  @include nav-buttons;
  height: 300px;
  width: 300px;
  margin-top: -50px;
}
}

@media (min-width: 769px) {
  .game-start__btn {
  @include nav-buttons;
  height: 300px;
  width: 300px;
  margin-top: -50px;
}
}

@media (min-width: 900px) {
   .game-start__btn {
  @include nav-buttons;
  margin-top: -50px;
}
}

@media (min-width: 1200px) {
   .game-start__btn {
  @include nav-buttons;
  margin-top: -50px;
}
}
</style>