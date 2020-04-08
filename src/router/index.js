import Vue from 'vue'
import VueRouter from 'vue-router'
import leafletHome from '../views/leafletHome.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'leafletHome',
		component: leafletHome,
		meta: {
			title: '首页'
		}
	},
	{
		path: '/arcgisHome',
		name: 'arcgisHome',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/arcgisHome.vue'),
		meta: {
			title: 'arcgis 首页'
		}
	},
	{
		path: '/arcgisCustomLayer',
		name: 'arcgisCustomLayer',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/arcgisCustomLayer.vue'),
		meta: {
			title: '添加arcgis坐标点'
		}
	},
	{
		path: '/leafletMarker',
		name: 'leafletMarker',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/leafletMarker.vue'),
		meta: {
			title: '添加leaflet坐标点'
		}
	},
	{
		path: '/leafletReach',
		name: 'leafletReach',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/leafletReach.vue'),
		meta: {
			title: 'leaflet河段管理'
		}
	},
	{
		path: '/leafletControl',
		name: 'leafletControl',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/leafletControl.vue'),
		meta: {
			title: 'leaflet自定义控件'
		}
	},
	{
		path: '/leafletChangeMap',
		name: 'leafletChangeMap',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/leafletChangeMap.vue'),
		meta: {
			title: 'leaflet地图类型切换'
		}
	},
	{
		path: '/leafletDrawLine',
		name: 'leafletDrawLine',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/leafletDrawLine.vue'),
		meta: {
			title: 'leaflet绘制河道并获取空间数据'
		}
	},
	{
		path: '/pageTest',
		name: 'pageTest',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/pageTest.vue'),
		meta: {
			title: '分页组件封装'
		}
	}
]

const router = new VueRouter({
	routes
})

export default router

router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})
