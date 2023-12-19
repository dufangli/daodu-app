<template>
  <div class="night">
    <div class="up">
      <div class="goBack" @click="goBack">
        <img src="../assets/images/xitongfanhui.png" alt="" />
      </div>
      <div class="set">夜间模式</div>
    </div>
    <div class="notice">
      <div class="notice_2">
        <img src="../assets/images/ai250.png" alt="" />
        <div class="notice_1">囊萤映雪,秉烛夜读</div>
      </div>
    </div>
    
    <div class="bottom">
      <van-cell center title="夜间模式" size="large">
        <template #right-icon>
          <van-switch v-model="checked" size="24" />
        </template>
      </van-cell>
      <van-cell center title="自动日夜切换" size="large" label="夜幕降临时,自动进入夜间模式">
        <template #right-icon>
          <van-switch v-model="checked_1" size="24" />
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      checked_1: false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
.night {
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
      //   margin-left: 10px;
    }
  }
  .notice {
    width: 100vw;
    height: 45vh;
    display: flex;
    justify-content: center;
    .notice_2 {
      margin-top: 130px;
      img {
        width: 90px;
        height: 90px;
        margin-left: 25px;
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
    // display: flex;
    // justify-content: space-between;
    .fuck {
      font-size: 18px;
    }
  }
}
</style>