<template>
<div style="background-color: #f5f7f9">
	<Header style="position: fixed;width: 100%;background:#fff;padding:0 0;z-index: 1000; ">
			<Menu mode="horizontal" theme="light" :style="{height:'65px',width:'100%'}" @on-select="m=>{menuSelect(m)}">
					<div style="width: 95%;margin: 0 auto">
							<div class="layout-logo">
									<a @click="backHome()">
											<img src="../../images/login_pic_logo.png" style="height: 45px;" align="absmiddle" />
									</a>
							</div>
							<div class="header-warp2">
									写文章
							</div>
							<div class="header-user2">
								<Button type="primary">发布</Button>
							</div>
					</div>
			</Menu>
	</Header>	
	<div class="create-article-wrapper">
		<div class="c-a-l">
				<div class="mylife-box">
					<div class="mylife-title">
						作者
					</div>
					<div class="mylife-wrap">
						<div class="user-img">
							<img src="../../images/home_pic_head_empty_60x60.png">
						</div>
						<h2>茶杯里の天空</h2>
						<p>你就该走自己的路，就让别人羡慕嫉妒恨去吧~</p>
					</div>
				</div>
		</div>
		<div class="c-a-r">
			<div class="select-wrap">
			    <Select v-model="model2" size="small" style="width:100px; margin-right: 10px;">
		        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
		    	</Select>
			    <Select v-model="model3" size="small" style="width:100px; ">
		        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
		    	</Select>
			</div>
			<quill-editor 
				v-model="content"
				ref="myQuillEditor"
				:options="editorOption"
				style="height: 550px;">
				<!-- @blur="onEditorBlur($event)"
				@focus="onEditorFocus($event)"
				@ready="onEditorReady($event)"> -->
			</quill-editor>
			<Input v-model="formLabel" placeholder="输入标签名称" clearable size="large"/>
			<p style="padding:0 10px; font-size: 14px;">最多定义3个标签，每个标签以‘，’逗号分隔，单个标签不能超过5个字</p>
		</div>
	</div>
	<Footer class="layout-footer-center">
			<p>北京阿叟阿巴科技有限公司</p>
			<p>AlsoLife 2017 All Rights Reserved</p>
	</Footer>
</div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


import { quillEditor } from 'vue-quill-editor'
export default {
	components: {
		quillEditor
	},
	name: "createArticle",
	data() {
		return {
			formLabel: '',
			content: '请输入内容',
			editorOption: {
        modules:{
          toolbar:[
					  ['bold', 'italic', 'underline'],        // toggled buttons

					  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
					  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
					  [{ 'indent': '+1' }],          // outdent/indent
					  [{ 'direction': 'rtl' }],                         // text direction

					  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme

					  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
					  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

					  [{ 'font': [] }],
					  [{ 'align': [] }],

					  ['link', 'image', 'video']                                         // remove formatting button
          ]
        }
      },
			cityList: [
        {
            value: 'New York',
            label: 'New York'
        },
        {
            value: 'London',
            label: 'London'
        },
        {
            value: 'Sydney',
            label: 'Sydney'
        },
        {
            value: 'Ottawa',
            label: 'Ottawa'
        },
        {
            value: 'Paris',
            label: 'Paris'
        },
        {
            value: 'Canberra',
            label: 'Canberra'
        }
      ]
		};
	},
	mounted() {
		
	},
	methods: {
		backHome() {
			this.$router.push("/page/home");
		}
	}
};
</script>

<style>
.ql-snow .ql-picker-label{
	padding-left: 5px;
}
.ql-snow.ql-toolbar button, .ql-snow .ql-toolbar button{
	padding: 3px;
	width: 24px;
}
.ql-toolbar.ql-snow{
	padding: 5px;
}
.ql-snow .ql-picker.ql-size, .ql-snow .ql-picker.ql-header{
	width: 84px;
}
.ql-snow .ql-picker.ql-font{
	width: 100px;
}
.ql-toolbar.ql-snow .ql-formats{
	margin-right: 5px;
}
.ql-toolbar.ql-snow{
	border: 1px solid #d7dde4;
	border-left: none;
	border-right: none;
}
.select-wrap{
	text-align: right;
	padding: 13px;
}
.ql-container.ql-snow{
	border: none;
}
.select-wrap .ivu-select-selection, .select-wrap .ivu-select-placeholder, .select-wrap .ivu-select-arrow{
	border: none;
	color: #36B9BF
}
.c-a-r{
	background-color: #fff;
	float: right;
	width: 690px;
}
.c-a-r .ivu-input{
	/*border: none;*/
	display: block;
	width: calc(100% - 20px);
	margin: 10px auto;
	border-bottom: 1px solid #d7dde4;
}
.layout-footer-center {
	text-align: center;
}
.header-user2 .ivu-btn-primary{
	background-color: #36B9BF;
	border-color: #36B9BF;
}
.layout-btn .ivu-btn-primary{
	color: #36B9BF!important;
	background-color: #fff!important;
	border:1px solid #36B9BF!important;
}
.layout-logo{
	float: left;
}
.header-warp2{
	position: absolute;
	width: 200px;
	top: 0;
	height: 60px;
	left: 50%;
	margin-left: -100px;
	font-size: 22px;
	font-weight: bold;
	text-align: center;
	display: inline-block;
}
.header-user2{
	float: right;
}
.mylife-wrap{
	background-color: #fff;
	text-align: center;
	padding-bottom: 20px;
}
.mylife-wrap .user-img{
	padding: 20px;
	text-align: center;
}
.create-article-wrapper{
	padding: 75px 0 10px;
	overflow: hidden;
	width: 1000px;
	margin: 0 auto;
}
.c-a-l{
	width: 280px;
	float: left;
}
.c-a-r{
	width: 710px;
	float: right;
	padding-bottom: 100px;
}
</style>
