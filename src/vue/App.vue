<template>
  <div id="app">
    {{ msg }}
    {{ devServer }}
    <button @click="btnClick">点击</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "hello Webpack!",
      devServer: "测试webpack-dev-server插件是否生效"
    };
  },
  methods: {
    btnClick() {
      console.log("vue内容封装--App.vue");
    }
  }
};
</script>

<style lang="scss" scoped></style>