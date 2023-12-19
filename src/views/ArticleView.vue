<template>
  <div class="article-item" :key="$route.fullPath">
    <button @click="goBack">\</button>

    <div class="title">
      <div class="titleItem">{{ title }}</div>
      <div class="titleItem_2">{{ title }}</div>
    </div>
    <div class="articleList">{{ articleList }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { getArticle } from "../apis/home";
// import { getList } from "../apis/article";
export default {
  name: "ArticleView",
  //   props:["id"],
  data() {
    return {
      articleList: [],
      title: [],
      List: this.$route.params.id,
    };
  },

  methods: {
    // async getList() {
    //   // this.id=this.$route.query.id
    //   let data = await getList(this.id);
    //   //   console.log(this.id);
    //   console.log(data);
    //   //   console.log(this.articleList);
    // },
    // changeStyle() {
    //   const el = document.querySelector(".title");
    //   const observer = new IntersectionObserver(
    //     ([e]) =>
    //       e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
    //     { threshold: [1] }
    //   );
    //   observer.observe(el);
    // },
    // 组件内获取api
    getArticleList() {
      fetch(`https://apic.netstart.cn/daodu/lessons/${this.List}`)
        .then((res) => {
          return res.json();
        })
        .then((article) => {
          // console.log(article);
          this.articleList = article.article;
          this.title = article.title;
        });
    },
    goBack() {
      this.$router.back(-1);
    },
    onscroll() {
      const outEle = document.querySelector(".article-item");
      const titleEle = document.querySelector(".titleItem_2");
      outEle.onscroll = function readScrollTop() {
        // console.log("scrollTop:", outEle.scrollTop);
        if (outEle.scrollTop >= 340) {
          titleEle.style.display = "block";
        } else {
          titleEle.style.display = "none";
        }
      };
    },
  },
  mounted() {
    // this.getList();
    //   this.changeStyle();
    // let articleList = await getArticle();
    // console.log(articleList);
    // this.articleList = article;
    // this.id = this.$route.params.id;
    // console.log(this.id);
    // const id = this.$route.params.id;
    this.getArticleList();
    this.onscroll();
  },
  components: {},
  watch: {
    // id() {
    //   this.getList();
    // },
    $route: function () {
      this.List = this.$route.params.id;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common/common";

.article-item {
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
  overflow: scroll;
  button {
    @include background_color("background_color");

    @include font_color("text-color");
    border: 2px solid #000;
    margin-left: 30px;
    width: 30px;
    height: 25px;
    margin-top: 10px;
    position: fixed;
    z-index: 100;
  }
  .title {
    @include background_color("background_color");
    //再次使用了文字颜色变量
    @include font_color("text-color");
    width: 370px;
    margin: 0 auto;
    height: 48%;
    background-color: white;
    .titleItem {
      font-size: 36px;
      font-family: "宋体";
      writing-mode: vertical-rl;
      margin-left: 300px;
      margin-top: 30px;
    }
    .titleItem_2 {
      @include background_color("background_color");
      //再次使用了文字颜色变量
      @include font_color("text-color");
      position: fixed;
      font-size: 20px;
      font-family: "仿宋";
      height: 50px;
      background-color: #fff;
      width: 370px;
      text-align: right;
      margin-top: -140px;
      line-height: 43px;
      display: none;
    }
  }
  .title.is-pinned {
    color: red;
    // width: 100vw;
    z-index: 101;
    height: 100px;
    font-size: 12px;
  }
  .articleList {
    font-family: "仿宋";
    font-size: 20px;
    line-height: 34px;
    white-space: pre-wrap;
    width: 370px;
    margin: 0 auto;
  }
}
</style>

