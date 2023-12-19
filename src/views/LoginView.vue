<template>
  <div class="Login">
    <div class="fork" @click="goBack">
        <img src="../assets/images/chacha.png" alt="">
    </div>
    <div class="name">
      <div class="item">岛读</div>
    </div>
    <div class="icon">
      <ul>
        <li>
          <img src="../assets/images/weibo.png" alt="" />
          <div>微博登入</div>
        </li>
        <li>
          <img src="../assets/images/weixin.png" alt="" />
          <div>微信登入</div>
        </li>
        <li>
          <img src="../assets/images/shouji.png" alt="" />
          <div>手机登入</div>
        </li>
      </ul>
    </div>
    <div class="box">
      <div class="all">
        <van-checkbox v-model="checked" checked-color="#2fc852">
          已经阅读并同意以下条款
        </van-checkbox>
        <div class="clause">
          <span>《服务条款》</span>
          <span>《隐私协议》</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/common/common';

.Login {
    @include background_color("background_color");
    //再次使用了文字颜色变量
    @include font_color("text-color");
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: white;
  height: 100vh;
  position: relative;
  .fork{
    position: absolute;
    top: 20px;
    right: 20px;
    img{
        width: 25px;
    }
  }
  .name {
    width: 100vw;
    writing-mode: vertical-lr;
    font-size: 35px;
    height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    ul {
      display: flex;
      justify-content: space-around;
      img {
        width: 40px;
        height: 40px;
        margin-left: 12px;
      }
      div {
        margin-top: 10px;
        font-size: 16px;
      }
    }
  }
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    .van-checkbox {
      font-size: 14px;
      margin-top: 50px;
      .van-checkbox__label {
        color: #bebebe;
      }
    }
    .clause{
        font-size: 14px;
        margin-top: 8px;
        margin-left: 20px;
        span{
            color:#686868;
        }
    }
  }
}
</style>