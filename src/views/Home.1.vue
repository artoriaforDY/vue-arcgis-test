<template>
	<div class="mainWrap">
		<div id="map"></div>
	</div>
</template>
<script>
	import {
		loadModules
	} from 'esri-loader';
	export default {
		components: {
			loadModules
		},
		data() {
			return {
				view: null,
			}
		},
		mounted() {
			this.$nextTick(() => {
				loadModules(['esri/Map', 'esri/views/MapView', 'esri/layers/WebTileLayer', 'esri/layers/support/TileInfo', 'dojo/domReady!'
				], {
					css: true
				}).then(([Map, MapView, WebTileLayer, TileInfo]) => {
					var TDTBaseUrl = "http://{subDomain}.tianditu.gov.cn"; //天地图服务地址
					var tk = "ff19838854ae3d41e75b90bb56f0aed6"; //天地图key
					var tileInfo = new TileInfo({
						dpi: 90.71428571427429,
						rows: 256,
						cols: 256,
						compressionQuality: 0,
						origin: {
							x: -180,
							y: 90
						},
						spatialReference: {
							wkid: 4326
						},
						lods: [{level : 2,levelValue: 2, resolution : 0.3515625, scale : 147748796.52937502},
          {level : 3,levelValue: 3, resolution : 0.17578125, scale : 73874398.264687508},
          {level : 4,levelValue: 4,resolution : 0.087890625, scale : 36937199.132343754},
          {level : 5,levelValue: 5, resolution : 0.0439453125, scale : 18468599.566171877},
          {level : 6,levelValue: 6, resolution : 0.02197265625, scale : 9234299.7830859385},
          {level : 7,levelValue: 7, resolution : 0.010986328125, scale : 4617149.8915429693},
          {level : 8,levelValue: 8, resolution : 0.0054931640625, scale : 2308574.9457714846},
          {level : 9,levelValue: 9, resolution : 0.00274658203125, scale : 1154287.4728857423},
          {level : 10,levelValue: 10, resolution : 0.001373291015625, scale : 577143.73644287116},
          {level : 11,levelValue: 11, resolution : 0.0006866455078125, scale : 288571.86822143558},
          {level : 12,levelValue: 12, resolution : 0.00034332275390625, scale : 144285.93411071779},
          {level : 13,levelValue: 13, resolution : 0.000171661376953125, scale : 72142.967055358895},
          {level : 14,levelValue: 14, resolution : 8.58306884765625e-005, scale : 36071.483527679447},
          {level : 15,levelValue: 15, resolution : 4.291534423828125e-005, scale : 18035.741763839724},
          {level : 16,levelValue: 16, resolution : 2.1457672119140625e-005, scale : 9017.8708819198619},
          {level : 17,levelValue: 17, resolution : 1.0728836059570313e-005, scale : 4508.9354409599309},
          {level : 18,levelValue: 18, resolution : 5.3644180297851563e-006, scale : 2254.4677204799655},
          { level: 19,levelValue: 19, resolution: 2.68220901489257815e-006, scale: 1127.23386023998275 },
          { level: 20,levelValue: 20, resolution: 1.341104507446289075e-006, scale: 563.616930119991375 }]
					})
					var tiledLayer = new WebTileLayer({
						urlTemplate: 'http://{subDomain}.tianditu.com/DataServer?T=vec_c&x={col}&y={row}&l={level}&tk=ff19838854ae3d41e75b90bb56f0aed6',
						subDomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
						tileInfo: tileInfo
					})
					var layer_anno = new WebTileLayer({
							urlTemplate:'http://{subDomain}.tianditu.com/DataServer?T=cva_c&x={col}&y={row}&l={level}&tk=ff19838854ae3d41e75b90bb56f0aed6', 
							subDomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
							tileInfo: tileInfo
						})
					var map = new Map({
						spatialReference: {
						                    wkid: 4326
						                },
						                basemap: {
						                    baseLayers: [tiledLayer]
						                }
					});
					var view = new MapView({
						container: "map",
						spatialReference: {
							wkid: 4326
						},
						map: map,
						center: [117.1666, 39.1805],
						scale: 200000
					});
				});
			})
		},
		beforeDestroy() {
			if (this.view) {
				this.view.container = null;
			}
		}
	}
</script>
<style scoped lang="less">
	#map {
		height: 500px;
	}
</style>
