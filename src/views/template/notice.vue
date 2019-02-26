<template>
    <div class="unread-notice-wrapper">
          <div class="mylife-box" style="margin-top: 10px;">
            <div class="mylife-title">
              通知列表
              <RadioGroup v-model="buttonSize" type="button" shape="circle">
                  <Radio label="large">事件通知</Radio>
                  <Radio label="default">消息通知</Radio>
              </RadioGroup>
            </div>      
            <Card v-for="(item, index) in notice" :key="item.id" class="notice-card-item">
                <div>
                    <div class="notice-icon">
                        <img src="../../images/notice_icon_bell.png">
                    </div>
                    <div class="notice-box">
                      <h2>{{ item.title }}</h2>
                      <Divider style="margin: 5px auto" />
                      <div>{{ item.content }}</div>
                      <Time :time="new Date(parseInt(item.time))" style="font-size: 12px; color: #36B9BF" />
                    </div>
                </div>
            
            </Card>
          </div>  

        <Page :total="totalCount" class="pagin" show-elevator show-sizer show-total  @on-change=""></Page>
    </div>
    
</template>

<script>
export default {
  name: "notice",

  data() {
    return {
      buttonSize: 'large',
      notice: [{
        time: '1326170770',
        title: '论元种手回量改酸适事加领太等目产对级相社体极头海',
        content: '王收广身质边知动要每然心数看严经验现。光采本说广分提备问手五科也团点质。带取出战放无持产现出家方中不张作。决想大派真见里节存几上油极拉员。王动点阿什顿飞士大夫撒点粉撒点粉撒旦饭随爱豆发生的撒点粉都是饭随爱豆范德...'
      },{
        time: '1326170770',
        title: '论元种手回量改酸适事加领太等目产对级相社体极头海',
        content: '王收广身质边知动要每然心数看严经验现。光采本说广分提备问手五科也团点质。带取出战放无持产现出家方中不张作。决想大派真见里节存几上油极拉员。王动点阿什顿飞士大夫撒点粉撒点粉撒旦饭随爱豆发生的撒点粉都是饭随爱豆范德...'
      },{
        time: '1326170770',
        title: '论元种手回量改酸适事加领太等目产对级相社体极头海',
        content: '王收广身质边知动要每然心数看严经验现。光采本说广分提备问手五科也团点质。带取出战放无持产现出家方中不张作。决想大派真见里节存几上油极拉员。王动点阿什顿飞士大夫撒点粉撒点粉撒旦饭随爱豆发生的撒点粉都是饭随爱豆范德...'
      }],
      pageSize: 10,
      page: 0,
      totalCount: 0
    };
  },

  mounted() {
    let _this = this;
    this.axios
      .get(
        "/noticerecords/user?pageSize= " + _this.pageSize + "&page=" + _this.page
      )
      .then(function(response) {
        let data = response.data.data;
        _this.notice = data.data;
        _this.totalCount = data.totalCount;
        console.log(response);
      })
      .catch(function(error) {
        _this.$Message.error("查询失败，请稍后重试");
      });
  },

  methods: {
    read(id, isread) {
      if (isread == 1) {
        return;
      }
      let _this = this;
      this.axios({
        method: "put",
        url: "/noticerecords/read/",
        params: {
          noticeRecordId: id
        }
      })
        .then(
          function(response) {
            let index = _this.notice.findIndex(function(item) {
              return item.id == id;
            });

            let item = _this.notice[index];
            item.isread = 1;

            _this.notice.splice(index, 1, item);
          }.bind(this)
        )
        .catch(function(error) {
          _this.$Message.error("已读失败，请稍后重试");
        });
      // this.axios.put('/noticerecords/read/',{
      //     noticeRecordId: id
      // }).then(function() {
      //     let index = _this.notice.findIndex(function(item) {
      //         return item.id == id;
      //     });

      //     let item = _this.notice[index];
      //     item.isread = 1;

      //     _this.notice.splice(index, 1, item);
      // }).catch(function (error) {
      //     _this.$Message.error('已读失败，请稍后重试');
      // });
    }
  }
};
</script>

<style>
.unread-notice-wrapper{
  width: 670px;
  margin: 0 auto;
}
.notice-card-item{
  margin-top: -1px;
}
.pagin{
  text-align: center;
}
.notice-icon{
  padding: 20px;
  float: left;
}
.notice-box{
  font-size: 15px;
  overflow: auto;
}
.notice-box h2{
  font-size: 18px;
}
</style>
