<template>
	<div class="Usnav">
  		<div class="kefang">
  			<div class="zhanshi">
  				<p>客房展示</p>
			   	<a class="iconfont icon-gengduo" >
								更多分类
				</a>
  			</div>
  		</div>
  		
  		<router-link to="/product" class="list">
				<span class="lis">
					<img src="../../static/img/1395029314.jpg"/>
				</span>
				<span class="kf"><a>[热]</a>二居室公寓</span>
				<span class="iconfont icon-you"></span>
		</router-link>
		
		<router-link to="/product" class="list">
				<span class="lis">
					<img src="../../static/img/1395029314.jpg"/>
				</span>
				<span class="kf">
					<a>[热]</a>豪华江景房<br>
					<p title="精致的客房位于酒店第3层到第 20 层，可欣赏黄浦江令人惊叹的美景。每间客房都采用舒缓的乳白色和棕色为主色调，融大胆、现代的设计与传统东方风韵于一体。 客房设有长毛绒地毯、典雅的木制家具和铺有豪华床单的特大床或两张单人床，给人以舒适宁静之感。 宽敞的卫浴间配有超大浸入式浴缸、双人梳妆盥洗台和步入式雨林花洒淋浴系统。">
						精致的客房位于酒店第3层到第 20 层，
					</p>
				</span>
				<span class="iconfont icon-you"></span>
		</router-link>
		
  		<router-link to="/" class="list">
				<span class="lis">
					<img src="../../static/img/1395029314.jpg"/>
				</span>
				<span class="kf"><a>[热]</a>一居室公寓</span>
				<span class="iconfont icon-you"></span>
		</router-link>
		
		<router-link to="/" class="list">
				<span class="lis">
					<img src="../../static/img/1395029314.jpg"/>
				</span>
				<span class="kf">单间公寓</span>
				<span class="iconfont icon-you"></span>
		</router-link>
		
		<router-link to="/" class="list">
				<span class="lis">
					<img src="../../static/img/1395029314.jpg"/>
				</span>
				<span class="kf"><a>[热]</a>东方套房-双卧室</span>
				<span class="iconfont icon-you"></span>
		</router-link>
		
		
		<router-link to="/" class="list">
				<span class="lis">
					<img src="../../static/img/1395029314.jpg"/>
				</span>
				<span class="kf"><a>[热]</a>文化行政江景房</span>
				<span class="iconfont icon-you"></span>
		</router-link>
		
		<router-link to="/" class="list">
				<span class="lis">
					<img src="../../static/img/1395029314.jpg"/>
				</span>
				<span class="kf">
					明珠套房<br>
					<p title="      透过套房两侧的落地窗，宾客可欣赏上海地标建筑东方明珠塔无与伦比的景色。 室内采用典雅的布艺和豪华温馨的色调，配有长毛绒地毯和宽敞的起居室、卫浴室与主卧室，给人以极具奢华之感。 卧室设有一张特大号床、典雅的茶几和充满氛围的灯光，起居室则配有一张沙发、扶手椅和餐桌，为宾客提供了清幽宁神的避世胜地。 卫浴室配备了靠窗的浸入式浴缸、双人梳妆盥洗台和步入式雨林花洒淋浴系统，品味高端。">
						        透过套房两侧的落地窗，宾客可可欣赏上海地标建筑东方明珠塔无与伦比的景色。
					</p>
				</span>
				<span class="iconfont icon-you"></span>
		</router-link>
		
		<router-link to="/" class="list">
				<span class="lis">
					<img src="../../static/img/1395029314.jpg"/>
				</span>
				<span class="kf">总统套房-双卧室</span>
				<span class="iconfont icon-you"></span>
		</router-link>
		
  		<router-link to="/" class="list listOut">
				<span class="lis">
					<img src="../../static/img/1395029314.jpg"/>
				</span>
				<span class="kf">
					行政江景房<br>
					<p title="雅致的客房是寻求宽敞住宿体验的宾客的绝佳选择，宾客还可使用尊享行政酒廊的所有设施‌。 客房设有两张单人床或一张特大床，铺有长毛绒地毯，配有落地窗，可供欣赏黄浦江畔令人惊叹的美景。 卫浴间内设步入式雨林花洒淋浴系统、大型梳妆盥洗台和完美的超大浴缸，可让您尽情放松，给您以静谧之感。 入住的宾客可 24 小时享用酒店行政酒廊。">
						   雅致的客房是寻求宽敞住宿体验的宾客..
					</p>
				</span>
				<span class="iconfont icon-you"></span>
		</router-link>
		
		
		<div class="footerText">服务热线：(86-20) 1234 9999</div>
  	</div>
</template>

<script>
	
</script>

<style>
	*{
	font-family: "微软雅黑";
}
.Usnav{
	width:100%;
	background:#fff;
}
.zhanshi{
		width:94%;
		line-height:40px;
	}
	.kefang{
		height:40px;
		background:#ededed;
	}
	.zhanshi p{
		margin-bottom:10px;
		line-height:26px;
		display:inline-block;
		font-size:16px;
		margin-left:4%;
	}
	.zhanshi a{
		float:right;
		font-size:14px;
	}
.list{
	display:inline-block;
	width:96%;
	margin-left:4%;
	border-bottom:1px solid #ccc;
}
.list span{
	float:left;
	font-size:14px;
}
.lis{
	display:inline-block;
}
.lis,.lis img{
	max-width:80px;
	max-height:80px;
}
.list{
	margin-top:14.12px;
}
.list span:nth-child(2) a{
	color:red;
}
.kf{
	margin-left:10px;
}
.list span p{
	display:inline-block;
	font-size:14px;
	width:180px;
	height:19px;
	margin-top:12px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow:hidden;
}
.list span{
	font-size:16px;
}
.list span:nth-child(3){
	line-height:80px;
	float:right;
	margin-right:3%;
}
.footerText{
	background: #EDEDED;
	color: #666;
	text-align: center;
	height: 58px;
	line-height: 58px;
}
.listOut{
	border-bottom: none;
}
.hiddenBox{
	width:100%;
	height:100%;
	background:rgba(224,126,47,.9);
	position:fixed;
	top:0;
	left:0;
}
.hiddenBox p{
	width:100%;
	height:41px;
	color:#fff;
	line-height:42px;
	color:#fff;
	font-size:20px;
	position:relative;
	border-bottom:1px solid rgb(183,83,0);
}
.hiddenBox p:nth-child(1){
	height:44px;
}
/*.router-link-exact-active{
	color: #fff;
	background:rgba(224,126,47,0);
}*/
.hiddenBox p a{
	color:#fff;
	padding-left:3%;
	display:inline-block;
	width:100%;
	height:100%;
}
.hiddenBox p:nth-child(1) a{
	padding-left:0;
	text-align:center;
	background:rgba(224,126,47,.9);
}
.hiddenBox p span{
	position: absolute;
	top:0;
	right:3%;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 1, 1, 1);
}
.slide-fade-enter, .slide-fade-leave-to
 {
  transform: translateX(95%);
  opacity: 0;
}
</style>