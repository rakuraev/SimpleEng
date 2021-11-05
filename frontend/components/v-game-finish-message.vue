<template>
  <div class="game-finish__message">{{message}}</div>
</template>

<script>
export default {
  props: ['res'],
  data() {
    return {
      message: "",
    };
  },
  methods: {
    getMessage() {
     if (this.res<5){
        this.message = "Awful result.Study harder";
     }else if(this.res<10){
         this.message = "Bad result.Keep Learning.";
     }else if(this.res < 15){
         this.message = "Not bad, keep up the good work.";
     }else if(this.res < 20){
         this.message = "Almost perfect";
     }else if(this.res >= 20){
         this.message = "Perfect!";
     }
    },
  },
  beforeMount(){
      this.getMessage()
  }
};
</script>