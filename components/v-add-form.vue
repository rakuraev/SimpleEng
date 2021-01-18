<template>
  <div class="add-word__form">
    <input
      type="text"
      class="add-word__btn"
      placeholder="New Word(Eng)"
      v-model="word.word"
    />
    <input
      type="text"
      class="add-word__btn"
      placeholder="Correct translation(Ru)"
      v-model="word.correctOption"
    />
    <input
      type="text"
      class="add-word__btn"
      placeholder="Add wrong option(Ru)"
      v-model="word.options[0]"
    />
    <input
      type="text"
      class="add-word__btn"
      placeholder="Add wrong option(Ru)"
      v-model="word.options[1]"
    />
    <input
      type="text"
      class="add-word__btn"
      placeholder="Add wrong option(Ru)"
      v-model="word.options[2]"
    />
    <input
      type="submit"
      @click="submitWord"
      class="add-word__sbmt"
      value="Submit"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      word: {
        options: [],
        word: "",
        correctOption: "",
      },
    };
  },
  methods: {
    submitWord() {
      let opt = this.word.options;
      opt.push(this.word.correctOption);
      let wordToPost = {
        options: opt,
        word: this.word.word,
        correctOption: this.word.correctOption,
      };
      this.$store.dispatch("POST_WORD_TO_DB", wordToPost);
      this.$toast.success("Word created"); // Место для вывода событий
      this.clearWord();
    },
    clearWord() {
      this.word.options = [];
      this.word.word = "";
      this.word.correctOption = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@include add-word-form;
@media (max-width: 768px) {
  .add-word{
    &__form{
      width: 350px;
      margin: 75px auto 0;
    }
    &__btn {
      margin-bottom: 15px;
    }
  }
}

@media (min-width: 769px) {
   .add-word{
    &__form{
      margin: 75px auto 0;
    }
  }
}

@media (min-width: 900px) {
   .add-word{
    &__form{
      margin: 75px auto 0;
    }
  }
}

@media (min-width: 1200px) {
  .add-word{
    &__form{
      margin: 100px auto 0;
    }
  }
}
</style>