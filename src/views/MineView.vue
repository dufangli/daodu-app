<template>
  <div class="mine">
    <div class="container">
      <div class="up">
        <button @click="modelBrn" class="moon">
          <img src="../assets/images/moonbyueliang.png" alt="" />
        </button>
        <button @click="toLogin">
          <img src="../assets/images/xinfengtianchong.png" alt="" />
        </button>
      </div>
      <div class="mid">
        <div class="login" @click="toLogin">登入</div>
        <div class="people" @click="toLogin">
          <img src="../assets/images/geren.png" alt="" />
        </div>
      </div>
      <div class="bottom">
        <ul>
          <li @click="toLogin">
            <img src="../assets/images/wode.png" alt="" /><span>我的主页</span>
          </li>
          <li>
            <img src="../assets/images/rili.png" alt="" /><span>阅读日历</span>
          </li>
          <li @click="toLogin">
            <img src="../assets/images/aixin.png" alt="" /><span
              >喜欢的想法</span
            >
          </li>
          <li @click="toRemind">
            <img src="../assets/images/tixing.png" alt="" /><span
              >每日提醒</span
            >
          </li>
          <li @click="toSetUp">
            <img src="../assets/images/shezhi.png" alt="" /><span>设置</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dark: false,
    };
  },
  methods: {
    toLogin() {
      this.$router.push({
        path: "/login",
      });
    },
    toSetUp() {
      this.$router.push({
        path: "/setup",
      });
    },
    toRemind() {
      this.$router.push({
        path: "/remind",
      });
    },
    modelBrn() {
      this.dark = !this.dark;
      if (this.dark) {
        window.document.documentElement.setAttribute("data-theme", "dark");
        let moon = document.querySelector(".moon img");
        moon.src = require("../assets/images/ai250.png");
      } else {
        window.document.documentElement.setAttribute("data-theme", "light");
        let moon = document.querySelector(".moon img");
        moon.src = require("../assets/images/moonbyueliang.png");
      }
    },
  },
  mounted() {
    // window.document.documentElement.setAttribute( "data-theme", 'light' );
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common/common";
.mine {
  @include background_color("background_color");
  //再次使用了文字颜色变量
  @include font_color("text-color");
  background: linear-gradient(#e8f0eb, #e0eee5, #d8ebdf);
  height: 100vh;
  .container {
    width: 85vw;
    margin: 0 auto;
    .up {
      height: 10vh;
      display: flex;
      justify-content: space-between;
      button {
        @include background_color("background_color");
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-top: 20px;
        //   margin-left: 30px;
        border: 1px solid #bec9c7;
        img {
          width: 15px;
          height: 15px;
          margin-top: 4px;
        }
      }
    }
    .mid {
      display: flex;
      justify-content: space-between;
      .login {
        font-size: 24px;
      }
      .people {
        @include background_color("background_color");
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid #bec9c7;
        background-color: #bec9c7;
        img {
          width: 60px;
          height: 60px;
          margin-left: 9.5px;
          margin-top: 6px;
        }
      }
    }
    .bottom {
      @include background_color("background_color_1");
      //再次使用了文字颜色变量

      margin-top: 60px;
      height: 50vh;
      background-color: #fff;
      font-size: 20px;
      border-radius: 20px;
      li {
        height: 10vh;
        img {
          width: 25px;
          height: 25px;
          margin-top: 26px;
          margin-left: 26px;
        }
        span {
          @include font_color("text-color");
          color: #000;
          line-height: 80px;
          margin-left: 25px;
        }
      }
    }
  }
}
</style>