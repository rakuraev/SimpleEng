<template>
  <div class="add-word-form">
    <input
      type="text"
      class="add-word-btn"
      placeholder="New Word(Eng)"
      v-model="word.word"
    />
    <input
      type="text"
      class="add-word-btn"
      placeholder="Correct translation(Ru)"
      v-model="word.correctOption"
    />
    <input
      type="text"
      class="add-word-btn"
      placeholder="Add wrong option(Ru)"
      v-model="word.options[0]"
    />
    <input
      type="text"
      class="add-word-btn"
      placeholder="Add wrong option(Ru)"
      v-model="word.options[1]"
    />
    <input
      type="text"
      class="add-word-btn"
      placeholder="Add wrong option(Ru)"
      v-model="word.options[2]"
    />
    <input
      type="submit"
      @click="submitWord"
      class="add-word-sbmt"
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
        word: '',
        correctOption: '',
      },
    };
  },
  methods: {
    submitWord() {
      let opt = this.word.options
      opt.push(this.word.correctOption)
      let wordToPost = {
        options:opt,
        word:this.word.word,
        correctOption:this.word.correctOption
      }
      this.$store.dispatch('POST_WORD_TO_DB',wordToPost)
      console.log('Word created')// Место для вывода событий
      this.clearWord()
    },
    clearWord() {
      this.word.options = [];
      this.word.word = '';
      this.word.correctOption = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.add-word-form {
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: 150px auto 0;
  .add-word-btn {
    outline: none;
    height: 70px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    padding: 0 26px;
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #2e2e2e;
    &::placeholder {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      color: #ababab;
    }
    &:focus {
      &::placeholder {
        opacity: 0;
      }
    }
  }
  .add-word-sbmt {
    background: #a8ff93;
    outline: none;
    height: 70px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>