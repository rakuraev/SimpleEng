<template>
  <div class="main">
    <div class="title">Hi, {{ getUser }}!</div>
    <mainButtons />
  </div>
</template>

<script>
import mainButtons from "@/components/main-buttons";
import { mapMutations, mapGetters } from "vuex";
export default {
  layout: "logined",
  head() {
    return {
      title: "Главное Меню",
    };
  },
  components: {
    mainButtons,
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    ...mapMutations(["SET_USER_NAME_TO_STATE"]),
  },
  beforeMount() {
    this.SET_USER_NAME_TO_STATE();
  },
};
</script>

<style lang="scss" scoped>
.main {
  @include main-container;
  .title {
    font-weight: 500;
    color: #5f5f5f;
  }
}
@media (max-width: 768px) {
  .title {
    font-size: 22px;
    margin-top: -125px;
  }
}
@media (min-width: 769px) {
  .title {
    font-size: 36px;
     margin-top: -125px;
  }
}
@media (min-width: 900px) {
  .title {
    font-size: 36px;
     margin-top: -125px;
  }
}
@media (min-width: 1200px) {
  .title {
    font-size: 36px;
     margin-top: -125px;
  }
}
</style>