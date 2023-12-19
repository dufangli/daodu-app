<template>
  <div class="final" >
    <div class="stack-wrapper" >
      <StackView 
        ref="stack"
        :pages="someList"
        :stackinit="stackinit"
      ></StackView>
    </div>
    <div class="controls">
      <button @click="prev" class="button">
        <i class="prev"></i><span class="text-hidden">prev</span>
      </button>
      <button @click="next" class="button">
        <i class="next"></i><span class="text-hidden">next</span>
      </button>
    </div>
  </div>
</template>
<script>
// import StackView from '../components/StackView'
import StackView from "../components/StackView";
// import { getShit } from "../apis/final";

export default {
  // el: '#stack',
  data() {
    return {
      someList: [],
      stackinit: {
        visible: 3,
      },
      // shit: [],
    };
  },
  mounted() {
    let that = this;
    setTimeout(function () {
      that.someList = [
        {
          html: '<div class="fuck">111</div>',
        },
        {
          html: '<div class="fuck">222</div>',
        },
        {
          html: '<div class="fuck">333</div>',
        },
        {
          html: '<div class="fuck">444</div>',
        },
        {
          html: '<div class="fuck">555</div>',
        },
        {
          html: '<div class="fuck">666</div>',
        },
        {
          html: '<div class="fuck">777</div>',
        },
      ];
    }, 2000)
      // this.getShit();
  },
  components: {
    StackView,
  },
  methods: {
    prev() {
      this.$refs.stack.$emit("prev");
    },
    next() {
      this.$refs.stack.$emit("next");
    },
    // async getShit() {
    //   let shit_1 = await getShit();
    //   // console.log(shit_1);
    //   this.shit = shit_1.comments;
    //   console.log(this.shit);
    // },
  },
};
</script>
<style>
.fuck {
}
.final {
  background: linear-gradient(#e8f0eb, #e0eee5, #d8ebdf);
  height: 100vh;
}
.stack-wrapper {
  margin: 0 auto;
  position: relative;
  z-index: 1000;
  width: 320px;
  height: 320px;
  padding: 0;
  list-style: none;
  pointer-events: none;
}
.controls {
  position: relative;
  width: 200px;
  text-align: center;
  display: flex; /*Flex布局*/
  display: -webkit-flex; /* Safari */
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 240px;
}
.controls .button {
  border: none;
  background: none;
  position: relative;
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
  width: 50px;
  height: 50px;
  z-index: 100;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: 50%;
  background: #fff;
}
.button .next {
  display: inline-block;
  width: 10px;
  height: 5px;
  background: #cee1d5;
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
  -webkit-transform: rotate(45deg);
  left: -5px;
  top: 2px;
  position: relative;
}
.button .next:after {
  content: "/";
  display: block;
  width: 20px;
  height: 5px;
  background: #cee1d5;
  -webkit-transform: rotate(-90deg) translateY(-50%) translateX(50%);
}
.button .prev {
  display: inline-block;
  width: 20px;
  height: 5px;
  background: #cee1d5;
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
  -webkit-transform: rotate(45deg);
}
.button .prev:after {
  content: "/";
  display: block;
  width: 20px;
  height: 5px;
  background: #cee1d5;
  -webkit-transform: rotate(-90deg);
}
.controls .text-hidden {
  position: absolute;
  overflow: hidden;
  width: 0;
  height: 0;
  color: transparent;
  display: block;
}
</style>
