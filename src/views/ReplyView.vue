<template>
  <div class="reply">
    <div class="up">
      <div class="goBack" @click="goBack">
        <img src="../assets/images/xitongfanhui.png" alt="" />
      </div>
      <div class="set">回复通知</div>
    </div>
    <div class="notice">
      <div class="notice_2">
        <img src="../assets/images/naozhong.png" alt="" />
        <div class="notice_1">回复通知</div>
      </div>
    </div>
    <div class="bottom">
      <div class="fuck">回复通知</div>
      <van-switch v-model="checked" size="22px" active-color="#000" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
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
.reply {
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
    height: 60vh;
    display: flex;
    justify-content: center;
    .notice_2 {
      margin-top: 130px;
      img {
        width: 90px;
        height: 75px;
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
    .fuck {
      font-size: 18px;
    }
  }
}
</style>