<template>
<div class="user-center">
  <div class="user-info-wrap">
    <div class="user-center-cover">
      <div class="user-center-cover-edit">
        <Icon type="md-camera" />
      </div>
    </div>
    <div class="user-info">
      <div class="user-avatar-wrap">
        <div class="user-avatar">
          <img src="../../images/home_pic_head_empty_60x60@2x.png">
        </div>
      </div>
      <div class="user-name">
        <h2>茶杯里的天空</h2>
        <p>你就该走自己的路，就让别人羡慕嫉妒恨去吧~</p>
      </div>
      <div class="user-edit">
        <Button>编辑</Button>
      </div>
    </div>
  </div>
  <div class="user-center-main">
    <div class="user-center-article">
      <div class="user-article-title"></div>

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
    <div class="user-center-tool">
      <div class="user-center-tool-box">
          <Row>
            <Col span="12">
              <h3>267</h3>
              <p>关注了</p>
            </Col>
            <Col span="12">
              <h3>267</h3>
              <p>被关注</p>
            </Col>
        </Row>
      </div>
      <div class="user-center-tool-box">
        <div class="mylife-title">
          人员信息
        </div>
        <a href="#" class="tool-list">
          <span><i class=""></i></span>
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "userCenter",

  data() {
    return {
      articleList: []
    };
  },

  mounted() {
    this.getUserArticle();
  },

  methods: {
    showTotalIntro(index) {
      this.articleList[index].showTotal = !this.articleList[index].showTotal;
      this.articleList[index].exchangeButton = !this.articleList[index].exchangeButton;
    },
    getUserArticle() {
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
          }.bind(this)
        )
        .catch(
          function(error) {
            this.$Message.error("无权限");
          }.bind(this)
        );
    }
  }
};
</script>

<style scoped>
.user-center{
  width: 1000px;
  padding: 10px 0 ;
  margin: 0 auto;
}
.user-info-wrap{
  height: 320px;
}
.user-center-cover{
  position: relative;
  height: 215px;
  background-color: #36B9BF;
}
.user-center-cover-edit{
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  color: #fff;
}
.user-center-cover-edit .ivu-icon{
  position: absolute;
  width: 24px;
  height: 24px;
  font-size: 24px;
  top: 5px;
  right: 5px;
  z-index: 9
}
.user-center-cover-edit:after{
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
  border-top: 60px solid #FF7058;
  border-left: 60px solid transparent;
}
.user-info{
  position: relative;
  height: 105px;
  background-color: #fff;
}
.user-avatar-wrap{
  margin: -20px 20px 20px;
  float: left;
  width: 100px;
  height: 100px;
  position: relative;
}
.user-avatar{
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}
.user-avatar img{
  width: 100%;
}
.user-name{
  padding-top: 20px;
}
.user-name h2{
  font-size: 22px;
}
.user-edit{
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 9
}
.user-center-main{
  overflow: hidden;
  padding-top: 10px;
}
.user-center-article{
  float: left;
  width: 690px;
}
.user-center-tool{
  width: 300px;
  float: right;
}
.user-article-title{
  height: 50px;
  border-bottom: 1px solid #F3F3F3;
  background-color: #fff;
  text-align: right;
}
.user-center-tool-box{
  background-color: #fff;
  margin-bottom: 10px;
}
.user-center-tool-box .ivu-col{
  padding: 20px 0;
  font-size: 14px;
  text-align: center;
}
.user-center-tool-box h3{
  font-size: 22px;
}
.tool-list{
  display: block;
  height: 50px;
}
</style>
