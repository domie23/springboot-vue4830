import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import dianyingList from '../pages/dianying/list'
import dianyingDetail from '../pages/dianying/detail'
import dianyingAdd from '../pages/dianying/add'
import dianyingfenleiList from '../pages/dianyingfenlei/list'
import dianyingfenleiDetail from '../pages/dianyingfenlei/detail'
import dianyingfenleiAdd from '../pages/dianyingfenlei/add'
import dianyingpingfenList from '../pages/dianyingpingfen/list'
import dianyingpingfenDetail from '../pages/dianyingpingfen/detail'
import dianyingpingfenAdd from '../pages/dianyingpingfen/add'
import aboutusList from '../pages/aboutus/list'
import aboutusDetail from '../pages/aboutus/detail'
import aboutusAdd from '../pages/aboutus/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'dianying',
					component: dianyingList
				},
				{
					path: 'dianyingDetail',
					component: dianyingDetail
				},
				{
					path: 'dianyingAdd',
					component: dianyingAdd
				},
				{
					path: 'dianyingfenlei',
					component: dianyingfenleiList
				},
				{
					path: 'dianyingfenleiDetail',
					component: dianyingfenleiDetail
				},
				{
					path: 'dianyingfenleiAdd',
					component: dianyingfenleiAdd
				},
				{
					path: 'dianyingpingfen',
					component: dianyingpingfenList
				},
				{
					path: 'dianyingpingfenDetail',
					component: dianyingpingfenDetail
				},
				{
					path: 'dianyingpingfenAdd',
					component: dianyingpingfenAdd
				},
				{
					path: 'aboutus',
					component: aboutusList
				},
				{
					path: 'aboutusDetail',
					component: aboutusDetail
				},
				{
					path: 'aboutusAdd',
					component: aboutusAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
