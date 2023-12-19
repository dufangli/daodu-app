<template>
  <div class="language">
    <div class="up">
      <div class="goBack" @click="goBack">
        <img src="../assets/images/xitongfanhui.png" alt="" />
      </div>
      <div class="set">语言</div>
    </div>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell title="跟随系统" clickable @click="radio = '1'">
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
        <van-cell title="简体中文" clickable @click="radio = '2'">
          <template #right-icon>
            <van-radio name="2" />
          </template>
        </van-cell>
        <van-cell title="正体中文" clickable @click="radio = '3'">
          <template #right-icon>
            <van-radio name="3" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
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
.language {
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
}
</style>