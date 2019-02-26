<style scoped>
.box-flex .imgpic {
  transition: 0.7s all;
  opacity: 0.8;
}

.box-flex .imgpic:hover {
  opacity: 1;
  box-shadow: 1px 1px 20px #333;
  transform: scale(1.1, 1.1);
  cursor: pointer;
}

.lineThrou {
  transition: 0.8s all;
}

.lineThrou:hover {
  text-decoration: line-through;
  cursor: pointer;
}
.home{
  width: 1000px;
  margin:0 auto;
  padding: 10px 0;
  overflow: hidden;
}
.home-left{
  float: left;
  width: 690px;
}
.home-right{
  float: right;
  width: 300px;
}
.ivu-carousel-item{
  position: relative;
}
.carouse-p{
  width: 100%;
  padding: 0 10px;
  height: 30px;
  position: absolute;
  bottom: 5px;
  left: 0;
  z-index: 99;
  background-color: rgba(0,0,0,.5);
  line-height: 30px;
  color: #fff;
}


.user-box{
  background-color: #fff;
  margin-bottom: 10px;
}
.user-count{
  text-align: center;
  padding: 10px;
}
.user-count h3{
  font-size: 22px;
}
.user-count p{
  font-size: 14px;
}
.user-info-wrap{
  background-color: #FAFAFA;
  padding:20px 10px;
}
.user-info{
  width: 220px;
  float: right;
  padding-left: 10px;
}
.user-headimg{
  overflow: hidden;
}
.user-headimg-img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  float: left;
}

</style>
<template>
    <div class="home">
      <div class="home-left">
          <Carousel autoplay v-model="value2" loop :style="{height:'280px'}">
              <!-- <CarouselItem v-for="(item,index) in bannerList" :key="index">
                  <router-link :to="('/page/detail/'+item.id)">
                      <img :style="{height:'550px'}" class="images-con" v-bind:src="(item.image)">
                  </router-link>
              </CarouselItem> -->
              <CarouselItem>
                  <img :style="{height:'280px'}" class="images-con" src="../../images/bg1.jpg">
                  <p class="carouse-p">zheli</p>
              </CarouselItem>
              <CarouselItem>
                  <img :style="{height:'280px'}" class="images-con" src="../../images/bg2.jpg">
                  <p class="carouse-p">zheli</p>
              </CarouselItem>
              <CarouselItem>
                  <img :style="{height:'280px'}" class="images-con" src="../../images/bg3.jpg">
                  <p class="carouse-p">zheli</p>
              </CarouselItem>
              <CarouselItem>
                  <img :style="{height:'280px'}" class="images-con" src="../../images/bg4.jpg">
                  <p class="carouse-p">zheli</p>
              </CarouselItem>
          </Carousel>
          <div class="mylife-box" style="margin-top: 10px;">
            <div class="mylife-title">
              精华帖
              <RadioGroup v-model="buttonSize" type="button" shape="circle">
                  <Radio label="large">推荐</Radio>
                  <Radio label="default">关注</Radio>
                  <Radio label="small">热榜</Radio>
              </RadioGroup>
            </div>
            <!-- 文章列表循环 -->
            <div class="article-wrap" v-for="(item, index) in articleList">
              <h2 class="article-title">{{ item.basicInfo.title }}</h2>
              <div class="article-usreinfo">
                <div class="article-userheading">
                  <img :src="item.authorInfo.userAvatarUrl ? item.authorInfo.userAvatarUrl : '../../images/home_pic_head_empty_24x24.png'">
                </div>
                {{ item.authorInfo.nickName }}
                <div class="article-createTime">
                  <Time :time="new Date(parseInt(item.basicInfo.publishTime))"/>
                </div>
              </div>
              <div class="article-type">
                <span>能力：{{ item.basicInfo.categoryId.title }}</span>
                <span>技能：{{ item.basicInfo.subjectId.title }}</span>
              </div>
              <div :class="item.showTotal ? 'total-introduce' : 'detailed-introduce'">
                <div class="intro-content" :title="item.basicInfo.outline" ref="desc">
                  <span class="merchant-desc" v-if="item.basicInfo.outline">
                    {{ item.basicInfo.outline }}
                  </span>
                  <div class="unfold" @click="showTotalIntro(index)" v-if="item.showExchangeButton">
                    <span>{{item.exchangeButton ? '展开' : '收起'}}</span>
                  </div>
                </div>
                <div class="article-fun">
                  
                </div>
              </div>
              <comments-item
                v-for="comment in comments"
                :key="comment.id"
                :avatar="comment.headimg"
                :author="comment.author"
                :content="comment.content"
                :time="comment.createTime"
                :hasReply="replys[comment.id] && replys[comment.id].length > 0"
                @clickAvatar="handleClickAvatar(comment)"
                @clickAuthor="handleClickAuthor(comment)"
                @addReply="handleAddReply(comment)">
                <reply-item v-for="reply in replys[comment.id]" :key="reply.id" :author="reply.author" :content="reply.content" :time="reply.createTime">
                </reply-item>
              </comments-item>
            </div>
            <!-- /文章列表循环 -->

          </div>
      </div>
      <div class="home-right">
        <div class="user-box">
          <div class="user-info-wrap">
            <div class="user-headimg">
              <div class="user-headimg-img"><img src="../../images/home_pic_head_empty_60x60.png"></div>
              <div class="user-info">
                <h2>茶杯里の天空</h2>
                <p>就该走自己的路，让别人羡慕嫉妒恨去吧~</p>
              </div>
            </div>
          </div>
          <Row class="user-count">
            <Col span="8">
              <h3>265</h3>
              <p>我的收藏</p>
            </Col>
            <Col span="8">
              <h3>5</h3>
              <p>我的关注</p>
            </Col>
            <Col span="8">
              <h3>26</h3>
              <p>我的分享</p>
            </Col>
          </Row>
        </div>

        <div class="mylife-box">
          <div class="mylife-title" style="border: none;">
            能力/技能
          </div>
          <Collapse simple>
              <Panel name="1">
                  学业能力
                  <div slot="content" class="skill-wrap">
                    <a href="javascript:;" class="skill-item skill-item-active">
                      <i class="i-0601"></i>
                      <span>动作模仿</span>
                    </a>
                    <a href="javascript:;" class="skill-item">
                      <i class="i-0601"></i>
                      <span>动作模仿</span>
                    </a>
                    <a href="javascript:;" class="skill-item">
                      <i class="i-0601"></i>
                      <span>动作模仿</span>
                    </a>
                    <a href="javascript:;" class="skill-item">
                      <i class="i-0601"></i>
                      <span>动作模仿</span>
                    </a>
                  </div>
              </Panel>
          </Collapse>
      </div>
      </div>
        <div v-if="flage"
             style="background: #f5f7f9;padding: 24px 50px;color: #495060;font-size: 14px;text-align: center;">
            <span>未找到符合条件的结果</span>
        </div>
        <div class="box-flex flex-direction-column margin-top-2">
            <div class="box-flex width-80 margin-auto" v-for="(A,index) in homeArticle">
                <div class="box-flex width-100" v-if="index%2==0">
                    <div class="flex-1">
                        <router-link :to="('/page/detail/'+A.id)">
                            <img class="images-con imgpic" v-bind:src="(A.image)">
                        </router-link>
                    </div>
                    <div class="box-flex flex-1 padding-all flex-direction-column">
                        <router-link :to="('/page/detail/'+A.id)">
                            <span class="tirtleFont lineThrou">{{A.title}}</span>
                        </router-link>
                        <span class="contentFont">{{A.info}}</span>
                    </div>
                </div>
                <div class="box-flex width-100" v-else>
                    <div class="box-flex flex-1 padding-all flex-direction-column">
                        <router-link :to="('/page/detail/'+A.id)">
                            <span class="tirtleFont lineThrou">{{A.title}}</span>
                        </router-link>
                        <span class="contentFont">{{A.info}}</span>
                    </div>
                    <div class="flex-1">
                        <router-link :to="('/page/detail/'+A.id)">
                            <img class="images-con imgpic" v-bind:src="(A.image)">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      flage: false,
      value2: 0,
      homeArticle: [],
      buttonSize: 'large',
      bannerList: [],
      articleList: [],
      comments: [{
        id: 1,
        target: 2,
        headimg: 'http://imgtu.5011.net/uploads/content/20170321/2172671490083881.jpg',
        author: '@cname',
        content: '这里奥地利就发生的',
        createTime: '2019-10-10',
        updateTime: '2019-10-10',
      }],
      replys: {}
    };
  },
  mounted() {
      this.getLatestArticle();
    // this.getHomeArticle();
    // this.getBanner();
  },
  watch: {
    $route: ["getHomeArticle"]
  },
  methods: {
    showTotalIntro(index) {
      this.articleList[index].showTotal = !this.articleList[index].showTotal;
      this.articleList[index].exchangeButton = !this.articleList[index].exchangeButton;
    },
    // 循环监听
    watchVal() {
      const arrs = this.arrs;
      if (arrs.length > 0) {
        for (let i = 0; i < arrs.length; i++) {
          let customItem = arrs[i].customItem;
          if (customItem * 1 < 0) {
            this.$set(this.arrs[i], 'customItem', 0);
          }
        }
      }
    },
    getLatestArticle() {
      this.axios({
        method: "get",
        url: "/articles/getLatestArticle",
        params: {
          pageSize: '5',
          pageNum: '1'
        }
      })
        .then(
          function(response) {
            this.articleList = response.data.data.data;
            console.log(this.articleList);
          }.bind(this)
        )
        .catch(
          function(error) {
            this.$Message.error("无权限");
          }.bind(this)
        );
    },
    getBanner() {
     
    },
    getHomeArticle() {
      if (this.$route.params.title == null) {
        this.axios({
          method: "get",
          url: "/public/interests"
        })
          .then(
            function(response) {
              this.homeArticle = response.data.data;
            }.bind(this)
          )
          .catch(
            function(error) {
              this.$Message.error("无权限");
            }.bind(this)
          );
      } else {
        this.axios({
          method: "get",
          url: "/public/interests",
          params: {
            title: this.$route.params.title
          }
        })
          .then(
            function(response) {
              this.homeArticle = response.data.data;
              if (this.homeArticle.length == 0) {
                this.flage = true;
              } else {
                this.flage = false;
              }
              // if (this.homeArticle.length() {
              //     this.flage = true;
              // }
            }.bind(this)
          )
          .catch(
            function(error) {
              this.$Message.error("无权限");
            }.bind(this)
          );
      }
    },
    timestampFormat ( timestamp ) {
      function zeroize( num ) {
          return (String(num).length == 1 ? '0' : '') + num;
      }

      var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
      var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

      var curDate = new Date( curTimestamp * 1000 ); // 当前时间日期对象
      var tmDate = new Date( timestamp * 1000 );  // 参数时间戳转换成的日期对象

      var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
      var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();

      if ( timestampDiff < 60 ) { // 一分钟以内
          return "刚刚";
      } else if( timestampDiff < 3600 ) { // 一小时前之内
          return Math.floor( timestampDiff / 60 ) + "分钟前";
      } else if ( curDate.getFullYear() == Y && curDate.getMonth()+1 == m && curDate.getDate() == d ) {
          return '今天' + zeroize(H) + ':' + zeroize(i);
      } else {
          var newDate = new Date( (curTimestamp - 86400) * 1000 ); // 参数中的时间戳加一天转换成的日期对象
          if ( newDate.getFullYear() == Y && newDate.getMonth()+1 == m && newDate.getDate() == d ) {
              return '昨天' + zeroize(H) + ':' + zeroize(i);
          } else if ( curDate.getFullYear() == Y ) {
              return  zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
          } else {
              return  Y + '年' + zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
          }
      }
    }
  }
};
</script>