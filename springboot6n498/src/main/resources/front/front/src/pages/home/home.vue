<template>
<div class="home-preview" :style='{"width":"90%","margin":"10px auto","flexWrap":"wrap","justifyContent":"space-between","display":"flex"}'>

		<!-- 关于我们 -->
		<div :style='{"padding":"0px","boxShadow":"0 0px 0px rgba(255, 255, 255, .3)","margin":"10px auto 10px","background":"none","width":"38%","position":"relative","height":"auto"}'>
		  <div :style='{"padding":"0 20px","margin":"0 auto 20px","color":"#333","textAlign":"left","background":"url(http://codegen.caihongy.cn/20230106/3c1030df5b01476da876dcb77796e839.png) no-repeat left top / auto 100%,url(http://codegen.caihongy.cn/20230106/c34a6be9f73642afb1c2b3e11b43b032.png) no-repeat right top / auto 100%,url(http://codegen.caihongy.cn/20230106/539e485aa0d94fea9f2fbd11dd4c74b6.png) repeat-x center center / auto 100%","width":"100%","lineHeight":"50px","fontSize":"18px"}'>{{aboutUsDetail.title}}</div>
		  <div :style='{"margin":"0 0 10px","color":"#999","textAlign":"center","display":"none","width":"100%","lineHeight":"1.5","fontSize":"20px"}'>{{aboutUsDetail.subtitle}}</div>
		  <div :style='{"width":"46%","padding":"0 0 0 10px","float":"left","flexWrap":"wrap","display":"flex","height":"auto"}'>
		    <img :style='{"border":"1px solid #e6e6e6","padding":"10px","margin":"0 0px","objectFit":"cover","background":"#fff","display":"block","width":"100%","height":"250px"}' :src="baseUrl + aboutUsDetail.picture1">
		    <img :style='{"border":"1px solid #e6e6e6","padding":"10px","margin":"20px 0 0","objectFit":"cover","background":"#fff","display":"block","width":"100%","height":"120px"}' :src="baseUrl + aboutUsDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture3">
		  </div>
		  <div :style='{"border":"1px solid #e6e6e6","padding":"10px","margin":"0px 10px 0px 0","overflow":"hidden","color":"rgb(102, 102, 102)","background":"rgba(255,255,255,1)","width":"48%","lineHeight":"24px","fontSize":"14px","textIndent":"2em","float":"right","height":"392px"}' v-html="aboutUsDetail.content"></div>
		  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		</div>
		
						<div class="news" :style='{"width":"58%","margin":"10px auto 10px","position":"relative","textAlign":"center","background":"none"}'>
		<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
			<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		</div>
		
		<div class="title" :style='{"width":"100%","padding":"0 20px","margin":"0 auto 20px","lineHeight":"50px","textAlign":"left","background":"url(http://codegen.caihongy.cn/20230106/3c1030df5b01476da876dcb77796e839.png) no-repeat left top / auto 100%,url(http://codegen.caihongy.cn/20230106/f2208a9b176f427fa196c3e89d7bf7e1.png) no-repeat right top / auto 100%,url(http://codegen.caihongy.cn/20230106/539e485aa0d94fea9f2fbd11dd4c74b6.png) repeat-x center center / auto 100%"}'>
			<span :style='{"color":"#333","fontSize":"16px"}'>电影资讯</span>
		</div>
		
			
			
			
			
			
			
			
			
			
			
			<!-- 样式十 -->
		<div v-if="newsList.length" class="list list10 index-pv1" :style='{"padding":"10px 20px","flexWrap":"wrap","textAlign":"left","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		  <div v-if="newsList.length>0" @click="toDetail('newsDetail', newsList[0])" :style='{"border":"1px solid #e6e6e6","padding":"10px","margin":"0 0px","background":"#fff","width":"48%","position":"relative","height":"auto"}' class="new10-list-item animation-box">
		    <img :style='{"width":"100%","boxShadow":"0px 56px 36px -60px #999","objectFit":"cover","display":"block","height":"254px"}' :src="baseUrl + newsList[0].picture" alt="">
			<div :style='{"padding":"4px 10px","whiteSpace":"nowrap","overflow":"hidden","color":"#3d74c0","width":"calc(100% - 80px)","fontSize":"14px","lineHeight":"28px","textOverflow":"ellipsis","fontWeight":"600"}' class="new9-list-item-title line1">{{newsList[0].title}}</div>
			<div :style='{"fontSize":"12px","lineHeight":"24px","position":"absolute","right":"10px","color":"#888","top":"270px"}' class="new9-list-item-time">{{newsList[0].addtime.split(' ')[0]}}</div>
		    <div :style='{"padding":"0 10px","overflow":"hidden","color":"#666","fontSize":"14px","lineHeight":"24px","textIndent":"2em","height":"72px"}' class="new9-list-item-descript line2">{{newsList[0].introduction}}</div>
			<div :style='{"padding":"0 10px","margin":"0 10px 10px","color":"#999","background":"#fff","display":"none","fontSize":"12px","lineHeight":"24px"}' class="new9-list-item-identification">新闻动态</div>
		  </div>
		  <div v-if="newsList.length>1" :style='{"margin":"0 0px","background":"none","flexDirection":"column","display":"flex","width":"48%","position":"relative","justifyContent":"space-between","height":"auto"}'>
		    <div v-for="(item,index) in newsList" v-if="index<4 && index>0" :key="index" @click="toDetail('newsDetail', item)" :style='{"border":"1px solid #e6e6e6","width":"100%","position":"relative","background":"#fff","height":"120px"}' class="new10-list-item animation-box">
		        <div :style='{"padding":"4px 10px","whiteSpace":"nowrap","overflow":"hidden","color":"#3d74c0","width":"calc(100% - 80px)","fontSize":"14px","lineHeight":"28px","textOverflow":"ellipsis","fontWeight":"600"}' class="new9-list-item-title line1">{{ item.title }}</div>
		        <div :style='{"fontSize":"12px","lineHeight":"24px","position":"absolute","right":"10px","color":"#e3aa80","top":"4px"}' class="new9-list-item-time">{{ item.addtime.split(' ')[0] }}</div>
				<div :style='{"padding":"0 10px","margin":"0 auto","overflow":"hidden","color":"#666","width":"calc(100% - 0px)","fontSize":"14px","lineHeight":"24px","textIndent":"2em","height":"72px"}' class="new9-list-item-descript line2">{{ item.introduction }}</div>
				<div :style='{"padding":"0 10px","fontSize":"12px","lineHeight":"24px","color":"#999","background":"#fff","display":"none"}' class="new9-list-item-identification">新闻动态</div>
		    </div>
		  </div>
		</div>
			
		<div @click="moreBtn('news')" :style='{"border":"0","padding":"0 20px","margin":"0px auto","top":"0","textAlign":"center","background":"none","display":"inline-block","width":"auto","lineHeight":"50px","position":"absolute","right":"20px"}'>
			<span :style='{"color":"#555","fontSize":"12px"}'>查看更多</span>
			<i v-if="true" :style='{"color":"#555","fontSize":"12px"}' class="el-icon-d-arrow-right"></i>
		</div>
		
		</div>
						

<div class="recommend" :style='{"width":"100%","margin":"10px auto 10px","position":"relative","background":"none"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"width":"100%","padding":"0 20px","margin":"0px auto 0px","lineHeight":"50px","textAlign":"left","background":"url(http://codegen.caihongy.cn/20230106/3c1030df5b01476da876dcb77796e839.png) no-repeat left top / auto 100%,url(http://codegen.caihongy.cn/20230106/f2208a9b176f427fa196c3e89d7bf7e1.png) no-repeat right top / auto 100%,url(http://codegen.caihongy.cn/20230106/539e485aa0d94fea9f2fbd11dd4c74b6.png) repeat-x center center / auto 100%"}'>
		<span :style='{"color":"#333","fontSize":"16px"}'>电影推荐</span>
	</div>
	
	
	
	
	
	
	<!-- 样式五 -->
	<div class="list list5 index-pv1">
		<div id="recommend-five-swiperdianying" class="swiper-container recommend-five-swiper" :style='{"width":"100%","padding":"50px 10px","margin":"10px 0","background":"none"}'>
			<div class="swiper-wrapper">
				<div :style='{"border":"0px solid #e6e6e6","padding":"10px","fontSize":"0","position":"relative","borderRadius":"4px"}' class="swiper-slide" v-for="(item,index) in dianyingRecommend" :key="index" @click="toDetail('dianyingDetail', item)">
					<img :style='{"border":"0","width":"100%","height":"220px"}' v-if="preHttp(item.haibao)" :src="item.haibao.split(',')[0]" alt="" />
					<img :style='{"border":"0","width":"100%","height":"220px"}' v-else :src="baseUrl + (item.haibao?item.haibao.split(',')[0]:'')" alt="" />
				</div>
			</div>
			<!-- Add Arrows -->
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div>
	</div>
	
	
	
	
	
	<div @click="moreBtn('dianying')" :style='{"border":"0","padding":"0 20px","margin":"0px auto 0px","top":"0","textAlign":"center","background":"none","display":"block","width":"auto","lineHeight":"50px","position":"absolute","right":"20px"}'>
		<span :style='{"color":"#555","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#555","fontSize":"14px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>



<div class="lists" :style='{"width":"60%","margin":"20px auto 0px","position":"relative","background":"none"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"100%","margin":"0px auto 0px","lineHeight":"50px","textAlign":"left","background":"url(http://codegen.caihongy.cn/20230106/3c1030df5b01476da876dcb77796e839.png) no-repeat left top / auto 100%,url(http://codegen.caihongy.cn/20230106/f2208a9b176f427fa196c3e89d7bf7e1.png) no-repeat right top / auto 100%,url(http://codegen.caihongy.cn/20230106/539e485aa0d94fea9f2fbd11dd4c74b6.png) repeat-x center center / auto 100%"}'>
	  <span :style='{"color":"#333","margin":"0 8px 0 20px","fontSize":"18px"}'>电影展示</span>
	</div>
	
	
	
	<!-- 样式二 -->
	<div class="list list2 index-pv1" :style='{"padding":"0 20px","margin":"20px 0px 0","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
		<div :style='{"border":"1px solid #e6e6e6","padding":"10px","margin":"0 0 20px","flexWrap":"wrap","background":"rgba(255,255,255,1)","display":"flex","width":"48%","position":"relative","justifyContent":"space-between","height":"212px"}' v-for="(item,index) in dianyingList" class="list-item animation-box" :key="index" @click="toDetail('dianyingDetail', item)">
			<img :style='{"width":"48%","boxShadow":"0px 56px 36px -60px #999","objectFit":"cover","borderRadius":"4px","display":"inline-block","height":"90%"}' v-if="preHttp(item.haibao)" :src="item.haibao.split(',')[0]" alt="" />
			<img :style='{"width":"48%","boxShadow":"0px 56px 36px -60px #999","objectFit":"cover","borderRadius":"4px","display":"inline-block","height":"90%"}' v-else :src="baseUrl +  (item.haibao?item.haibao.split(',')[0]:'')" alt="" />
			<div :style='{"width":"48%","padding":"10px 0px","overflow":"hidden","display":"inline-block","height":"100%"}' class="item-info">
				<div class="name line1" :style='{"borderColor":"#eee","margin":"0 0 10px","whiteSpace":"nowrap","overflow":"hidden","color":"#3d74c0","borderWidth":"0 0 1px","width":"90%","lineHeight":"40px","fontSize":"14px","textOverflow":"ellipsis","borderStyle":"solid"}'>{{item.dianyingmingcheng}}</div>
				<div class="name line1" :style='{"borderColor":"#eee","margin":"0 0 10px","whiteSpace":"nowrap","overflow":"hidden","color":"#3d74c0","borderWidth":"0 0 1px","width":"90%","lineHeight":"40px","fontSize":"14px","textOverflow":"ellipsis","borderStyle":"solid"}'>{{item.dianyingfenlei}}</div>
			</div>
		</div>
	</div>
	
	
	
	
	
	
	
	
	<div @click="moreBtn('dianying')" :style='{"border":"0","padding":"0 20px","margin":"0px auto 40px","top":"0","textAlign":"center","background":"none","display":"block","width":"auto","lineHeight":"50px","position":"absolute","right":"20px"}'>
		<span :style='{"color":"#555","fontSize":"14px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#555","fontSize":"14px"}' class="el-icon-d-arrow-right"></i>
	</div>
	

</div>


	<!-- 系统简介 -->
	<div :style='{"padding":"0 0 0px","boxShadow":"0 0px 0px rgba(255, 255, 255, .3)","margin":"20px auto 10px","background":"none","width":"38%","position":"relative","height":"auto"}'>
	  <div :style='{"padding":"0 20px","margin":"0 auto 20px","color":"#333","textAlign":"left","background":"url(http://codegen.caihongy.cn/20230106/3c1030df5b01476da876dcb77796e839.png) no-repeat left top / auto 100%,url(http://codegen.caihongy.cn/20230106/c34a6be9f73642afb1c2b3e11b43b032.png) no-repeat right top / auto 100%,url(http://codegen.caihongy.cn/20230106/539e485aa0d94fea9f2fbd11dd4c74b6.png) repeat-x center center / auto 100%","width":"100%","lineHeight":"50px","fontSize":"16px"}'>{{systemIntroductionDetail.title}}</div>
	  <div :style='{"margin":"0 0 10px","color":"#999","textAlign":"center","display":"none","width":"100%","lineHeight":"1.5","fontSize":"20px"}'>{{systemIntroductionDetail.subtitle}}</div>
	  <div :style='{"padding":"0","top":"302px","flexWrap":"wrap","display":"flex","width":"100%","position":"absolute","justifyContent":"space-between","height":"auto"}'>
	    <img :style='{"border":"1px solid #e6e6e6","padding":"10px","margin":"0 0px","objectFit":"cover","background":"#fff","display":"block","width":"100%","height":"212px"}' :src="baseUrl + systemIntroductionDetail.picture1">
	    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture2">
	    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture3">
	  </div>
	  <div :style='{"border":"1px solid #e6e6e6","padding":"10px","margin":"0 0 10px 0","overflow":"hidden","color":"rgb(102, 102, 102)","background":"#fff","width":"100%","lineHeight":"2","fontSize":"14px","textIndent":"2em","height":"212px"}' v-html="systemIntroductionDetail.content"></div>
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>
</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        systemIntroductionDetail: {},
        newsList: [],
        dianyingRecommend: [],

        dianyingList: [],
      }
    },
    created() {
      this.baseUrl = this.$config.baseUrl;
      this.getNewsList();
      this.getAboutUs();
      this.getSystemIntroduction();
      this.getList();
    },
    //方法集合
    methods: {
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
		getNewsList() {
			this.$http.get('news/list', {params: {
				page: 1,
				limit: 4,
                sort: 'addtime',
			order: 'desc'}}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
          let autoSortUrl = "";
          autoSortUrl = "dianying/autoSort";
          if(localStorage.getItem('Token')) {
              autoSortUrl = "dianying/autoSort2";
          }
			this.$http.get(autoSortUrl, {params: {
				page: 1,
				limit: 6,
			}}).then(res => {
				if (res.data.code == 0) {
					this.dianyingRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					this.$nextTick(() => {
						new Swiper('#recommend-five-swiperdianying', {
							loop: true,
							speed: 500,
							slidesPerView: Number(5),
							spaceBetween: Number(10),
							autoplay: {"delay":3000,"disableOnInteraction":false},
							centeredSlides: true,
							watchSlidesProgress: true,
							navigation: {"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},
							on: {
								setTranslate: function() {
									var slides = this.slides
									for (var i = 0; i < slides.length; i++) {
										var slide = slides.eq(i)
										var progress = slides[i].progress
										// slide.html(progress.toFixed(2)); //看清楚progress是怎么变化的
										slide.css({
											'opacity': '',
											'background': ''
										});
										slide.transform(''); //清除样式
										slide.transform('scale(' + (1.5 - Math.abs(progress) / 4) + ')');
									}
								},
								setTransition: function(transition) {
									for (var i = 0; i < this.slides.length; i++) {
										var slide = this.slides.eq(i)
										slide.transition(transition);
									}
								},
							},
						});
					})
					
				}
			});
			
			this.$http.get('dianying/list', {params: {
				page: 1,
				limit: 4,
			}}).then(res => {
				if (res.data.code == 0) {
					this.dianyingList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {detailObj: JSON.stringify(item)}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
	
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(360deg) scale(1.2) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(360deg) scale(0.8) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: scale(0.96);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: scale(1.09);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
</style>
