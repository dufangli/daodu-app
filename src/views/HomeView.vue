<template>
  <div class="home">
    <div class="time">
      <div class="time_1">{{ this.tomorrow_day - 1 }}</div>
    </div>

    <van-swipe
      class="my-swipe"
      :loop="false"
      :show-indicators="false"
      :height="500"
      :initial-swipe="8"
      @change="onChange"
    >
      <van-swipe-item
        v-for="item in articleList"
        :key="item.id"
        @click="
          getId(item.id);
          deliverParams(id);
        "
        ><div class="fuck">
          <div class="title">{{ item.title }}</div>
          <div class="article">{{ item.article }}</div>
          <van-button round type="info" color="#c4a068">阅读</van-button>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="shit">
          <svg width="300" height="400">
            <text x="115" y="200,200,215,230,230">
              {{ tomorrow_month }}/{{ tomorrow_day }}
            </text>
          </svg>
          <div class="renewal">
            <div class="renewal_text">距明日更新还有</div>
            <div class="renewal_time">
              {{ leftHours }}时{{ leftMinutes }}分{{ leftSeconds }}秒
            </div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// @ is an alias to /src
import { getArticle } from "../apis/home";

export default {
  name: "HomeView",

  data() {
    return {
      articleList: [],
      id: [],
      tomorrow_month: "",
      tomorrow_day: "",
      leftHours: "",
      leftMinutes: "",
      leftSeconds: "",
    };
  },
  mounted() {
    this.getArticle();
    this.onChange();
    this.getTomorrow();
    this.countdown();
  },
  components: {},
  computed: {},
  methods: {
    getId(id) {
      // console.log(id);
      this.id = id;
      // console.log(this.id);
    },
    deliverParams(id) {
      this.$router.push({
        path: `/article/${id}`,
        // query: { id: id },
      });
    },
    onChange(index) {
      // console.log(index);
      const day = document.querySelector(".time_1");
      // console.log(day);
      for (let i = 0; i <= 9; i++) {
        if (i + index == 9) {
          day.innerHTML = this.tomorrow_day - i;
        }
        if (this.tomorrow_day - i <= 0) {
          this.tomorrow_month == 30;
        }
      }
    },
    //偏移量(失败)
    // handleSwipeChange() {
    //   let shit=document.querySelector(".van-swipe__track");

    //   console.log(shit.style.transform);

    //   shit.style.transform =  "translateX(" +this.translateX+ "px)"
    //   console.log('当前偏移量：', this.translateX);

    // },
    getTomorrow() {
      function zeroFill(num) {
        // return num < 10 ? "0" + num : num;
        if (num < 10) {
          return "0" + num;
        }
        return num;
      }
      var d = new Date();
      var tomorrow = new Date(d.getTime() + 1 * 24 * 3600 * 1000);
      var tomorrow_month = zeroFill(tomorrow.getMonth() + 1);
      var tomorrow_day = zeroFill(tomorrow.getDate());
      this.tomorrow_month = tomorrow_month;
      this.tomorrow_day = tomorrow_day;
    },
    countdown() {
      const that = this;
      var endYear = new Date().getFullYear();
      var endMonth = new Date().getMonth() + 1;
      var endDay = new Date().getDate();
      var endTime = new Date(endYear, endMonth, endDay);
      var leftDiv = function () {
        var leftTime = endTime - new Date().getTime();
        var leftHours = zeroFill(Math.floor((leftTime / 1000 / 60 / 60) % 24));
        var leftMinutes = zeroFill(Math.floor((leftTime / 1000 / 60) % 60));
        var leftSeconds = zeroFill(Math.floor((leftTime / 1000) % 60));
        that.leftHours = leftHours;
        that.leftMinutes = leftMinutes;
        that.leftSeconds = leftSeconds;
        if (leftTime > 0) {
          setTimeout(() => {
            leftDiv();
          }, 500);
        } else {
          clearTimeout(leftDiv());
        }
      };
      leftDiv();

      function zeroFill(num) {
        // return num < 10 ? "0" + num : num;
        if (num < 10) {
          return "0" + num;
        }
        return num;
      }
    },
    getDay() {},
    async getArticle() {
      let articleList = await getArticle();
      // console.log(articleList);
      this.articleList = articleList;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common/common";

.home {
  @include background_color("background_color");
  //再次使用了文字颜色变量
  @include font_color("text-color");
  background: linear-gradient(#e8f0eb, #e0eee5, #d8ebdf);
  // width: 100;
  height: 100vh;
  background-color: black;
  .time {
    height: 120px;
    .time_1 {
      width: 80px;
      height: 80px;
      padding-top: 30px;
      padding-left: 60px;
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 50px;
      color: #696d73;
    }
  }
  .my-swipe .van-swipe-item {
    font-size: 20px;
    text-align: center;
    // background-color: #d9ebe0;
    color: #272727;
    border: #d9ebe0 1px solid;
    // margin: 0 10px;
    .fuck {
      @include background_color("background_color_1");
      @include font_color("text-color");

      width: 300px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 15px;
      .title {
        height: 260px;
        font-size: 36px;
        font-family: "宋体";
        // writing-mode: vertical-rl;
        margin-left: 230px;
        padding-top: 20px;
        font-weight: bold;
        line-height: 45px;
        padding-right: 20px;
      }
      .article {
        white-space: pre-wrap;
        text-align: left;
        width: 280px;
        height: 190px;
        // background-color: #272727;
        overflow: hidden;
        // margin: 0 auto;
        margin-left: 14px;
        // margin-top: 100px;
        font-size: 18px;
        font-family: "仿宋";
        line-height: 24px;
        mask: linear-gradient(140deg, #fff, transparent);
      }
      .van-button {
        // background-color:#c4a068 ;
        color: #fefefe;
        width: 65px;
        height: 30px;
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 15px;
        margin-left: 200px;
      }
    }
    .shit {
      @include background_color("background_color_1");
      @include font_color("text-color");
      width: 300px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 15px;
      height: 500px;

      text {
        font-size: 38px;
        fill: #bebebe;
        font-family: Georgia, "Times New Roman", Times, serif;
      }
      .renewal {
        color: #bebebe;
        font-size: 16px;
        padding-top: 10px;
        .renewal_text {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
