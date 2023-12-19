<template>
  <div id="app">
    <van-tabbar
      v-model="active"
      active-color="#7f807f"
      inactive-color="#c2d2c8"
      class="tabbar"
    >
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/stack" icon="chat-o">探索</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="contact-o">我</van-tabbar-item>
    </van-tabbar>
  
    <keep-alive include='HomeView'>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
const ACTIVEINDEX = {
  home: 0,
  stack: 1,
  mine: 2,
};
export default {
  data() {
    return {
      // id: [],
      isRouterAlive:true
    };
  },
  computed: {
    active: {
      get() {
        const { name } = this.$route;
        const index = ACTIVEINDEX[name] || 0;
        return index;
      },
      set() {},
    },
  },
  methods: {
   
  },
  components: {},
  mounted(){
    window.document.documentElement.setAttribute( "data-theme", 'light' );
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/common/common';
.tabbar {
  
  background-color: #cee1d5;
  .van-tabbar-item {
    @include background_color("background_color_1");
    position: relative;
    overflow: hidden;
    background-color: #cee1d5;
    // border: #cee1d5 1px solid;
  }

  .van-tabbar-item:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.5) 10%,
      transparent 10.01%
    );
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(9, 8);
    opacity: 0;
    transition: transform 0.1s, opacity 0.5s;
  }

  .van-tabbar-item:active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }
  .van-tabbar,
  .van-tabbar-item--active {
    
    background-color: #cee1d5;
  }
}
</style>
