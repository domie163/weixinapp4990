import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import storeup from '@/views/modules/storeup/list'
    import shangjia from '@/views/modules/shangjia/list'
    import xueshengyonghu from '@/views/modules/xueshengyonghu/list'
    import chat from '@/views/modules/chat/list'
    import discussjianzhixinxi from '@/views/modules/discussjianzhixinxi/list'
    import jianzhixinxi from '@/views/modules/jianzhixinxi/list'
    import guanyuwomen from '@/views/modules/guanyuwomen/list'
    import messages from '@/views/modules/messages/list'
    import jianzhifenlei from '@/views/modules/jianzhifenlei/list'
    import jubaoxinxi from '@/views/modules/jubaoxinxi/list'
    import config from '@/views/modules/config/list'
    import jianzhibaoming from '@/views/modules/jianzhibaoming/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告资讯',
        component: news
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/shangjia',
        name: '商家',
        component: shangjia
      }
      ,{
	path: '/xueshengyonghu',
        name: '学生用户',
        component: xueshengyonghu
      }
      ,{
	path: '/chat',
        name: '在线客服',
        component: chat
      }
      ,{
	path: '/discussjianzhixinxi',
        name: '兼职信息评论',
        component: discussjianzhixinxi
      }
      ,{
	path: '/jianzhixinxi',
        name: '兼职信息',
        component: jianzhixinxi
      }
      ,{
	path: '/guanyuwomen',
        name: '关于我们',
        component: guanyuwomen
      }
      ,{
	path: '/messages',
        name: '反馈建议',
        component: messages
      }
      ,{
	path: '/jianzhifenlei',
        name: '兼职分类',
        component: jianzhifenlei
      }
      ,{
	path: '/jubaoxinxi',
        name: '举报信息',
        component: jubaoxinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/jianzhibaoming',
        name: '兼职报名',
        component: jianzhibaoming
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
