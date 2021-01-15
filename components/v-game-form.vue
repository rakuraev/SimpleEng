<template>
  <div class="game-form">
    <div class="game-form__counter">{{ counter + 1 }}/20</div>
    <div class="game-form__word">{{ currentWord }}</div>
    <div class="game-form__options" :class="{'non-clickable':(isWrong||isRight)}">
      <div
        class="game-form__option"
        v-for="(option, index) in currentOptions"
        :key="index"
        :class="{ wrong: isWrong === index, right: isRight === index }"
        @click="confirmOption(index, option)"
      >
        {{ option }}
      </div>
    </div>
    <div class="game-form__next-word" @click="toNextWord" @keyup.enter="toNextWord">Next word</div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  props: {
    toFinish: {
      type: Function,
      default: () => {
        return "error";
      },
    },
    words: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      counter:0,
      currentWord: this.words[0].word,
      currentCorrectOption: this.words[0].correctOption,
      currentOptions: this.words[0].options.slice().sort(() => Math.random() - 0.5),
      isWrong: false,
      isRight: false,
    };
  },
  computed:{
    ...mapGetters('game',{res:'getGameResult'})
  },
  methods: {
    ...mapActions('game',['resIncrement']),
    confirmOption(index, option) {
      if (option == this.currentCorrectOption) {
        this.isRight = index;
        this.isWrong = true;
        this.resIncrement()
      } else {
        this.isRight = this.currentOptions.indexOf(this.currentCorrectOption);
        this.isWrong = index;
      }
    },
    toNextWord(){
      if (this.counter<19){
      this.counter++
      this.isWrong = false
      this.isRight = false
      this.currentWord=this.words[this.counter].word,
      this.currentCorrectOption=this.words[this.counter].correctOption,
      this.currentOptions=this.words[this.counter].options.slice().sort(() => Math.random() - 0.5)
      }else{
        this.toFinish()
      }
    }
  },

};
</script>
<style lang="scss" scoped>
.game-form {
  width: 1200px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__counter {
    height: 50px;
    width: 120px;
    background: #f7f7f7;
    border: 1px solid rgba(0, 0, 0, 0.11);
    box-sizing: border-box;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    align-self: flex-end;
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #9a9a9a;
  }
  &__word {
    width: 100%;
    height: 250px;
    background: #f7f7f7;
    border: 1px solid rgba(0, 0, 0, 0.11);
    box-sizing: border-box;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 35px;
    font-weight: 600;
    font-size: 72px;
    line-height: 87px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #9a9a9a;
  }
  &__options {
    display: flex;
    flex-direction: column;
    align-items: center;
    &.non-clickable{
      pointer-events: none;
    }
    .game-form__option {
      margin-top: 30px;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      width: 500px;
      height: 50px;
      background: #f7f7f7;
      border: 1px solid rgba(0, 0, 0, 0.11);
      box-sizing: border-box;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #9a9a9a;
      &:hover {
        background: #9cffa0;
        border: 1px solid rgba(71, 255, 90, 0.11);
        box-sizing: border-box;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
      }
      &.wrong {
        background: #FF6A6A;
        border: 1px solid rgba(255, 0, 0, 0.11);
        color: #fff;
      }
      &.right {
       background: #9CFFA0;
       border: 1px solid rgba(71, 255, 90, 0.11);
       color: #fff;
      }
    }
  }
  &__next-word {
    width: 600px;
    height: 70px;
    margin-top: 50px;
    background: #9cffa0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: 600;
    font-size:22px;
    line-height: 22px;
    cursor: pointer;
  }
}
</style>