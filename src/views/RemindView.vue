<template>
  <div class="reply">
    <div class="up">
      <div class="goBack" @click="goBack">
        <img src="../assets/images/xitongfanhui.png" alt="" />
      </div>
      <div class="set">每日提醒</div>
    </div>
    <div class="notice">
      <div class="notice_2">
        <img src="../assets/images/naozhong.png" alt="" />
        <div class="notice_1">从今天起,做一个阅读的人。</div>
      </div>
    </div>
    <div class="bottom">
      <van-cell center title="每日提醒" size="large">
        <template #right-icon>
          <van-switch v-model="checked" size="24" />
        </template>
      </van-cell>
    </div>
    <div class="bottom">
      <van-cell is-link size="large"  @click="showPopup" >提醒时间<div class="fr">{{ currentTime }}</div></van-cell>
      <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
        <van-datetime-picker
          v-model="currentTime"
          type="time"
          title="选择时间"
          :min-hour="10"
          :max-hour="20"
          @change="changeFn"
          @confirm="confirmFn"
          @cancel="cancelFn"
        />
      </van-popup>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      currentTime: "",
      checked: false,
      show: false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    showPopup() {
      this.show = true;
    },
    changeFn(){
        this.changeDate=this.currentTime
    },
    confirmFn(){
        // this.timeValue = this.timeFormat(this.currentDate);
        console.log(this.currentTime);
        this.show = false;
    },
    cancelFn(){
        this.show = false;
      },
  },
};
</script>
  
  <style lang="scss">
@import "@/assets/scss/common/common";

.reply {
  @include background_color("background_color");
  //再次使用了文字颜色变量
  @include font_color("text-color");
  margin: 0 auto;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: white;
  height: 100vh;
  .up {
    width: 94vw;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: baseline;
    .goBack {
      img {
        width: 25px;
        height: 25px;
      }
    }
    .set {
      font-size: 18px;
      margin: 0 auto;
      font-weight: 800;
    }
  }
  .notice {
    width: 100vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    .notice_2 {
      margin-top: 130px;

      img {
        width: 90px;
        height: 75px;
        margin-left: 50px;
      }
      .notice_1 {
        font-size: 16px;
        margin-top: 30px;
        text-align: center;
      }
    }
  }
  .bottom {
   
    width: 86vw;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .van-cell{
      @include background_color("background_color");
  //再次使用了文字颜色变量
  @include font_color("text-color");
    }
    .fuck {
      font-size: 18px;
    }
  }
}
</style>