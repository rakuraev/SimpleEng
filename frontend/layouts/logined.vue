<template>
  <div>
    <vHeader/>
    <Nuxt />
  </div>
</template>

<script>
import vHeader from '@/components/v-header'
export default {
    components:{
        vHeader
    }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
  font-size: 12px;
}
</style>