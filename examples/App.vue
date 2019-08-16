<template>
  <div id="app">
    <vue-floating isNearBorder @tap="floatingTap" :rightMargin="0" :bottomMargin="20">
      <div class="floatingView"></div>
    </vue-floating>
  </div>
</template>
<script>

export default {
  name: 'demo',
  components: {
  },
  data() {
    return {

    };
  },
  methods: {
    floatingTap() {

    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.floatingView{
  background-image: url('http://yanxuan.nosdn.127.net/4cc272e9f9eddae1bfe4d057d2fe549a.png');
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
