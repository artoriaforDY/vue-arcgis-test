<template>
	<div id="app">
		<div id="navWrap">
			<router-link to="/">leaflet首页</router-link> -
			<router-link to="/arcgisHome">arcgiss首页</router-link> -
			<router-link to="/arcgisCustomLayer">arcgis坐标点</router-link> -
			<router-link to="/leafletMarker">leaflet坐标点</router-link> -
			<router-link to="/leafletReach">leaflet河段管理</router-link> -
			<router-link to="/leafletControl">leaflet自定义控件</router-link> -
			<router-link to="/leafletChangeMap">leaflet地图切换</router-link> -
			<router-link to="/leafletDrawLine">leaflet绘制河流</router-link> -
			<router-link to="/pagination">分页封装</router-link>
		</div>
		<router-view /> </div>
</template>
<style lang="less">
	@import './assets/css/base.css';
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #333;
		font-size: 12px;
	}
	
	#navWrap {
		width: 100%;
		padding: 20px 0;
		a {
			color: #2c3e50;
			display: inline;
			font-size: 14px;
			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>