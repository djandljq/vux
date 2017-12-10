<template>
	<view-box class="product">
	<x-header></x-header>
	<div class="sidaber">
		<h1 class="title">
		读者心中的最爱
		<p class="hits">2014-03-17 12:58:25 &nbsp&nbsp 点击次数：</p>
		</h1>
		<div class="edater">
			<p  style="text-align: center;"></p>
			<p>&nbsp</p>
			<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 9月9日，喜来登酒店ADD泛亚自助餐厅荣获《That’s PRD》杂志举办的餐饮大奖中 “我最喜爱的酒店餐厅”奖。同时，由《南方都市报》主办，以“广东人喜爱的酒店”为针对点的2011年金驿奖中，酒店也荣获了“最佳宴会服务酒店”奖。</p>
			<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp酒店的ADD泛亚自助餐厅以精致的格调、宁静的田园风光著称。传统东南亚美食、日式刺身、巴西烧烤、港式点心、意大利批萨等各国美食琳琅满目。餐厅自营业以来相续被评为最具格调餐厅、十大新锐餐厅。镂空镜面图案的天花与墙面辉映，香槟色的灯光格调渲染浪漫气息。客人可置身于户外花园之中，或坐拥景观的落地窗边，放眼之处皆是浪漫田园氛围的用餐环境。</p>
			<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp酒店的宴会场地超过2,600平方米，无柱式设计的翡翠宴会厅可灵活分隔成两厅，宽敞的宴会厅过道可驱车驾入，一站式的皇冠会务团队承诺2小时快速回复，对每一项会议需求也了如指掌；独具特色的“移动御厨”餐车可按宾客需求，提供国际水准的餐饮外卖服务。</p>
			<p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp鲜明的特色和品牌化的服务使酒店在评选中脱颖而出，当之无愧成为读者心中的最爱。</p>
			<p style="text-align: center;">
				<img src="../../static/img/2014.jpg" />
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
	  }
	}
	
	
	
	var xhr = new XMLHttpRequest();
	
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
.footerText{
	background: #EDEDED;
	color: #666;
	text-align: center;
	height: 58px;
	line-height: 58px;
}
</style>