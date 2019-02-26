<style>
.mylife-box{
}
.mylife-title{
	height: 50px;
	line-height: 50px;
	padding:0 20px;
	border-bottom: 1px solid #d7dde4;
	font-size: 18px;
	position: relative;
	font-weight: bold;
	background-color: #fff;
}
.mylife-title:after{
	content: '';
	background-color: #36B9BF;
	width: 20px;
	height: 2px;
	line-height: 2px;
	position: absolute;
	bottom: -1px;
	left: 20px;
	z-index: 9;
}
#details{
	width: 1000px;
	margin: 0 auto;
	padding: 10px 0;
	overflow: hidden;
}
.detail-left{
	width: 690px;
	float: left;
}
.detail-right{
	width: 300px;
	float: right;
}
.article-wrap{
	background-color: #fff;
	margin-bottom: 10px;
	padding: 20px;
}
.article-title{
	font-weight: bold;
	font-size: 18px;
	margin-bottom: 10px;
}
.article-userheading{
	display: inline-block;
	line-height: 24px;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	overflow: hidden;
	vertical-align: middle;
}
.article-usreinfo{
	margin-bottom: 10px;
}
.article-userheading img{
	width: 100%;
	height: 100%;
	margin-right: 10px;
}
.article-createTime{
	float: right;
	height: 24px;
	line-height: 24px;
}
.article-type{
	background-color: #F5FCFC;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
	margin-bottom: 10px;
}
.article-type span{
	color: #5E979A;
	margin-right: 30px;
	font-size: 14px;
}
	.total-introduce {
		height: auto;
		overflow: hidden;
		font-size: 14px;
		color: #434343;
	}
	.total-introduce .intro-content .merchant-desc {
		width: 100%;
		line-height: 21px;
	}
	.total-introduce .unfold {
		display: block;
		z-index: 11;
		float: right;
		width: 40px;
		height: 21px;
		text-align: right;
	}
	.total-introduce .unfold span {
		margin: 0;
		line-height: 21px;
		color: #7fbe87;
	}
	.detailed-introduce {
		font-size: 14px;
		color: #434343;
		position: relative;
		overflow: hidden;
		margin: 10px;
	}
	.detailed-introduce .intro-content {
		max-height: 84px;
		line-height: 21px;
		word-wrap: break-word;
		word-break: break-all;
		background: #ffffff;
		color: #ffffff;
		overflow: hidden;
	}
	.detailed-introduce .intro-content .merchant-desc {
		width: 100%;
		line-height: 21px;
	}
	.detailed-introduce .intro-content:after,
	.detailed-introduce .intro-content:before {
		content: attr(title);
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		color: #434343;
	}
	.detailed-introduce .intro-content:before {
		display: block;
		overflow: hidden;
		z-index: 1;
		max-height: 63px;
		background: #ffffff;
	}
	.detailed-introduce .intro-content:after {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
		height: 81px;
		-webkit-line-clamp: 4;
		text-overflow: ellipsis;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		text-indent: -12em;
		/*尾部留空字符数*/

		padding-right: 4em;
	}
	.detailed-introduce .intro-content .unfold {
		z-index: 11;
		width: 40px;
		height: 21px;
		outline: 0;
		position: absolute;
		right: 0;
		bottom: 0;
		text-align: right;
	}
	.detailed-introduce .intro-content .unfold span {
		margin: 0;
		line-height: 21px;
		color: #7fbe87;
	}
.article-fun{
	height: 40px;
	line-height: 40px;
	margin-bottom: 10px;
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
<div id="details">
	<div class="detail-left">
			<!-- 文章列表循环 -->
			<div class="article-wrap">
				<h2 class="article-title">{{ title }}</h2>
				<div class="article-type">
					<span>能力：学业能力/社会技能</span>
					<span>技能：动作模仿/自发性发声/数概念</span>
				</div>
				<div :class="showTotal ? 'total-introduce' : 'detailed-introduce'">
					<div class="intro-content" :title="outline" ref="desc">
						<span class="merchant-desc" v-if="outline">
							{{ outline }}
						</span>
						<div class="unfold" @click="showTotalIntro()" v-if="showExchangeButton">
							<span>{{exchangeButton ? '展开' : '收起'}}</span>
						</div>
					</div>
					<div class="article-fun">
						
					</div>
				</div>
			</div>
			<!-- /文章列表循环 -->
	</div>
	<div class="detail-right">
		<div class="mylife-box">
			<div class="mylife-title">
				精华帖
			</div>
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
		 </div> 
		<div class="mylife-box">
			<div class="mylife-title">
				其他回答
			</div>
		 </div> 
	</div>
</div>
</template>
<script>
export default {
	data() {
		return {
			title: '撒点粉撒点粉撒点粉撒点粉撒点粉是发撒旦法阿什代发生发撒旦法社体极头海撒旦法时代',
			outline: '王收广身质边知动要每然心数看严经验现。光采本说广分提备问手五科也团点质。带取出战放无持产现出家方中不张作。决想大派真见里节存几上油极拉员。王收广身质边知动要每然心数看严经验现。光采本说广分提备问手五科也团点王收广士大夫啊时代发生打分阿什顿。',
			showTotal: true,
			exchangeButton: true,
			showExchangeButton: true
		};
	},
	mounted() {
	},
	methods: {
		showTotalIntro() {
			this.showTotal = !this.showTotal;
			this.exchangeButton = !this.exchangeButton;
		},
	}
};
</script>