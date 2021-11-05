<template>
  <div class="game-form">
    <div class="game-form__counter">{{ counter + 1 }}/20</div>
    <div class="game-form__word">{{ currentWord }}</div>
    <div
      class="game-form__options"
      :class="{ 'non-clickable': isWrong || isRight }"
    >
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
    <div
      class="game-form__next-word"
      @click="toNextWord"
      @keyup.enter="toNextWord"
    >
      Next word
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
      counter: 0,
      currentWord: this.words[0].word,
      currentCorrectOption: this.words[0].correctOption,
      currentOptions: this.words[0].options
        .slice()
        .sort(() => Math.random() - 0.5),
      isWrong: false,
      isRight: false,
    };
  },
  computed: {
    ...mapGetters({ words: "game/getWords"}),
  },
  methods: {
    ...mapActions("game", ["resIncrement"]),
    confirmOption(index, option) {
      if (option == this.currentCorrectOption) {
        this.isRight = index;
        this.isWrong = true;
        this.resIncrement();
      } else {
        this.isRight = this.currentOptions.indexOf(this.currentCorrectOption);
        this.isWrong = index;
      }
    },
    toNextWord() {
      if (this.counter < 19) {
        this.counter++;
        this.isWrong = false;
        this.isRight = false;
        (this.currentWord = this.words[this.counter].word),
          (this.currentCorrectOption = this.words[this.counter].correctOption),
          (this.currentOptions = this.words[this.counter].options
            .slice()
            .sort(() => Math.random() - 0.5));
      } else {
        this.toFinish();
      }
    },
  },
};
</script>
<style lang="scss" >
.game-form {
  @include game-form;
  &__counter {
    @include game-form__counter;
  }
  &__word {
    @include game-form__word;
  }
  &__options {
    @include game-form__options;
    .game-form__option {
      @include game-form__option;
    }
  }
  &__next-word {
    @include game-form__next-word;
  }
}
@media (max-width: 768px) {
  .game-form {
    width: 400px;
    &__counter {
      height: 40px;
      width: 80px;
      margin-bottom: 10px;
    }
    &__word {
      height: 200px;
      font-size: 52px;
    }
    .game-form__option {
      margin-top: 20px;
      width: 280px;
    }
    &__next-word {
      margin-top: 30px;
      width: 320px;
    }
  }
}
  @media (min-width: 769px) {
    .game-form {
      width: 750px;
      &__counter {
        height: 50px;
        width: 120px;
        margin-bottom: 20px;
      }
      &__word {
        height: 250px;
        font-size: 65px;
      }
      .game-form__option {
        margin-top: 25px;
        width: 400px;
      }
      &__next-word {
        margin-top: 40px;
        width: 500px;
      }
    }
  }

  @media (min-width: 900px) {
    .game-form {
      width: 890px;
      &__counter {
        height: 50px;
        width: 120px;
        margin-bottom: 25px;
      }
      &__word {
        height: 200px;
        font-size: 72px;
      }
      .game-form__option {
        margin-top: 30px;
        width: 500px;
      }
      &__next-word {
        margin-top: 30px;
        width: 600px;
      }
    }
  }

  @media (min-width: 1200px) {
    .game-form {
      width: 1190px;
    }
  }
</style>