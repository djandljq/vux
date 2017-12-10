<template>
	<view-box class="product">
	<x-header></x-header>
	<div class="sidaber">
		<h1 class="title">
		     {{title}}
		<p class="hits">{{time}} &nbsp&nbsp {{count}}</p>
		</h1>
		<div class="edater">
			<p >&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp {{content}}</p>
			
			<p >
				
			</p>
		</div>
		
		
		<div class="footerText">服务热线：(86-20) 1234 9999</div>
	</div>	
	</view-box>
	
</template>

<script>
	import { ViewBox } from 'vux'
	import { XHeader } from 'vux'
	export default {
	  components:{
	  	ViewBox,XHeader
	  },
	  data(){
	  	return{
	  		title:[],
	  		time:[],
	  		count:[],
	  		conten:[],
	  		img:[]
	  	}
	  },
	  created(){
	  	this.$http.get("datas.json").then(function(data){
	  		this.title=data.body.datas[1].title;
	  		this.time = data.body.datas[1].post_time;
	  		this.count = data.body.datas[1].click_count;
	  		this.content = data.body.datas[1].content;
	  		for(var i=0;i<data.body.datas[1].content.length;i++){
	  				var content = this.content[i];
	  				    content
	  		}
	  		this.img = data.body.datas[1].imgSrc;
	  	})
	  }
	}
</script>

<style scoped lang="less">
@import '~vux/src/styles/reset.less';
html,body{
	width: 100%;
	height: 100%;
	margin: 0;
}

.product{
	height: 100%;
	width:100%;
	position:fixed;
	top:0;
	left:0;
	z-index:50;
}
.sidaber{
	background: #fff;
}
.title{
	font-size: 18px;
	padding: 10px 20px;
	text-align: center;
	border-bottom: 1px solid #ccc;
}
.title p{
	font-size: 12px;
	color: #999;
	font-weight: normal;
}
.edater{
	padding: 15px 10px;
}
.edater p{
	font-size: 14px;
	font-weight: normal;
	line-height:22px;
	color: #808080;
}
.edater img{
	display: block;
	width: 100%;
}
.footerText{
	background: #EDEDED;
	color: #666;
	text-align: center;
	height: 58px;
	line-height: 58px;
}
</style>