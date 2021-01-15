<template>
  <div class="game">
    <v-game-start-btn v-if="gameStates.before" :toStart="toStart" />
    <v-game-form v-if="gameStates.start"  :toFinish="toFinish" :words="words" />
    <v-game-finish v-if="gameStates.finish" :toNull="toNull" />
  </div>
</template>

<script>
import vGameStartBtn from "@/components/v-game-start-btn";
import VGameForm from "@/components/v-game-form";
import VGameFinish from "@/components/v-game-finish";
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ words: "game/getWords", gameStates: "game/getGameStates" }),
  },
  components: {
    vGameStartBtn,
    VGameForm,
    VGameFinish,
  },
  methods: {
    ...mapActions("game", {
      toBefore: "setGameStateToBefore",
      toStart: "setGameStateToStart",
      toFinish: "setGameStateToFinish",
      toNull: "setGameStateToNull",
    }),
  },
  created() {
    this.toBefore()
  },
};
</script>
<style lang="scss" scoped>
.game {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 800px;
}
</style>

