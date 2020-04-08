import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import configJs from '../config.js'
import $ from 'jquery'
console.log('config', configJs)
import L from 'leaflet';
import("leaflet/dist/leaflet.css");
import * as Provider from "leaflet.chinatmsproviders"; //全局引入
// const esri = require("esri-leaflet");
import * as esri from "esri-leaflet"; //全局引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import pagination from '@/components/pagination.vue'
Vue.component('pagination',pagination)
Vue.L = L
// 解决 leaflet 默认 maker 无法显示的问题   start
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
const DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;
Vue.config.productionTip = false
if (process.env.NODE_ENV === 'production') {
	if (process.env.OUTPUT_NAME = 'testDist') {
		//测试环境api
		axios.defaults.baseURL = configJs.test_url
	} else {
		//正式api
		axios.defaults.baseURL = configJs.build_url
	}
} else {
	//本地运行api
	axios.defaults.baseURL = configJs.dev_url
}
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.headers.common['Authorization'] = ''; //token
axios.defaults.timeout = 15000; //token
//配置发送请求前的拦截器 可以设置token信息 
axios.interceptors.request.use(config => {
	//loading开始
	return config;
}, error => {
	//出错
	return Promise.reject(error);
});
// 配置响应拦截器 
axios.interceptors.response.use(res => {
	//这里面写所需要的代码
	return Promise.resolve(res);
}, error => {
	return Promise.reject(error);
})
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
