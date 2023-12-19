<template>
  <div class="setUp">
    <div class="up">
      <div class="goBack" @click="goBack">
        <img src="../assets/images/xitongfanhui.png" alt="" />
      </div>
      <div class="set">设置</div>
    </div>
    <van-cell-group inset class="set_1">
      <van-cell title="夜间模式" is-link size="large"  to="night"/>
      <van-cell title="阅读模式" is-link size="large"/>
      <van-cell title="语言" is-link size="large"  to="language"/>
      <van-cell title="回复通知" is-link size="large" to="reply" />
      <van-cell title="默认启动页" is-link size="large"/>
    </van-cell-group>
    <van-cell-group inset class="set_2">
      <van-cell title="分享给朋友" @click="showShare = true" is-link size="large"/>
      <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
      />
      <van-cell title="关于" is-link size="large"/>
    </van-cell-group>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
    };
  },
  methods: {
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
    goBack(){
      this.$router.go(-1);
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common/common";

.setUp {
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
 .up{
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
 .van-cell{
  @include background_color("background_color");
  //再次使用了文字颜色变量
  @include font_color("text-color");
 }
 .set_1 {
    margin-top: 20px;
  }
  .set_2 {
    margin-top: 50px;
  }
}
</style>