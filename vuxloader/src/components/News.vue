<template>
	<div class="news">
		<section>
		<div class="Usbox">
  			<div class="about">
		  		<p>关于我们</p>
			   	<a  class="iconfont icon-gengduo" @click="long">
						更多分类
			</a>
  		</div>
  	</div>
		<div class="sb_box">
			<ul>
				<li><router-link to="/Article">
					<div class="font-txt">
						<p class="txt">
							<span class="hot">[热]</span>
							读者心中的最爱
						</p>
						<p class="time">2014-03-17</p>
					</div>
					<span class="iconfont icon-youkuohao youkuhao"></span>
				</router-link></li>
				<li><router-link to="/Article1">
					<div class="font-txt">
						<p class="txt">
							电子时尚——科吧悄然开张
						</p>
						<p class="time">2014-03-17</p>
					</div>
					<span class="iconfont icon-youkuohao youkuhao"></span>
				</router-link></li>
				<li><router-link to="/Article2">
					<div class="font-txt">
						<p class="txt">
							无土蔬菜园 绿色新体验
						</p>
						<p class="time">2014-03-17</p>
					</div>
					<span class="iconfont icon-youkuohao youkuhao"></span>
				</router-link></li>
				<li><router-link to="/Article3">
					<div class="font-txt">
						<p class="txt">
							一起行动 为“地球一小时”熄灯
						</p>
						<p class="time">2014-03-17</p>
					</div>
					<span class="iconfont icon-youkuohao youkuhao"></span>
				</router-link></li>
				<li><router-link to="/Article4">
					<div class="font-txt">
						<p class="txt">
							"惠享出众" 轻松定议
						</p>
						<p class="time">2014-03-17</p>
					</div>
					<span class="iconfont icon-youkuohao youkuhao"></span>
				</router-link></li>
			</ul>
			<div class="viewMore">查看更多</div>
		</div>
		</section>
		<transition name="slide-fade">
			<div class="hiddenBox" v-if='flag'>
				<p @click="Nl"><router-link class="navli" to="/News">新闻动态</router-link><span class="iconfont icon-you"></span></p>
				<p @click="Nk"><router-link class="navli1" to="/">酒店概况</router-link><span class="iconfont icon-you"></span></p>
				<p @click="Ns"><router-link class="navli2" to="/">酒店故事</router-link><span class="iconfont icon-you"></span></p>
			</div>
		</transition>
		
		<div class="footerText">服务热线：(86-20) 1234 9999</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				flag:false,
			}
		},
		methods:{
			long(){
				this.flag=true
			},
			Nl(){
  				this.flag=false
		  	},
		  	Nk(){
		  		this.flag=false
		  	},
		  	Ns(){
		  		this.flag=false
		  	}
		}
	}
	
</script>

<style scoped>


.Usbox{
	background: #ededed;
	width: 100%;
	height: 40px;
	line-height: 40px;
}
.about{
	margin-left:4%;
	margin-right:4%;
	
	background: #ededed;
}
.about p{
	display:inline-block;
}
.about a{
	float:right;
	font-size:14px;
}
.sb_box{
	width: 100%;
}
.sb_box ul li{
	width: 100%;
	height: 54px;
	padding: 0 8px;
	border-bottom: 1px solid #ccc;
	box-sizing: border-box;
	background: #fff;
}
.sb_box ul li a{
	display: block;
	display: flex;
}
.font-txt{
	width:95%;
}
.font-txt .txt{
	padding-top: 12px;
	font-size: 16px;
}
.font-txt .txt .hot{
	color: red;
}
.font-txt .time{
	color: #999;
	height: 18px;
	line-height: 18px;
	font-size: 12px;
}
.youkuhao{
	width: 5%;
	display: block;
	line-height: 54px;
	font-size: 20px;
}
.viewMore{
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 16px;
	background: #fff;
}
.footerText{
	background: #EDEDED;
	color: #666;
	text-align: center;
	height: 58px;
	line-height: 58px;
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
	/*background:rgba(183,83,0,.9);*/
	height:44px;
}
.router-link-exact-active{
	color: #fff;
	background:rgba(224,126,47,0);
}
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
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(95%);
  opacity: 0;
}
</style>