<template>
	<div class="mainWrap">
		<div id="map"></div>
	</div>
</template>
<script>
	import TerraformerWKT from 'terraformer-wkt-parser'
	export default {
		components: {
			L
		},
		data() {
			return {
				map: null,
				map_config: {
					zoom: 9,
					center: [39.40861097325809, 117.26806640625001],
					minZoom: 6,
					maxZoom: 18,
					key: "ff19838854ae3d41e75b90bb56f0aed6"
				},
				points: [],
				lines: null,
				tempLines: null,
				endGeoJSON: null
			}
		},
		mounted() {
			this.$nextTick(() => {
				this.initMap();
			})
		},
		methods: {
			initMap() {
				let _this = this; //防止与leaflet中 this  冲突
				var normalm = L.tileLayer.chinaProvider('TianDiTu.Normal.Map', {
						maxZoom: _this.map_config.maxZoom,
						minZoom: _this.map_config.minZoom,
						key: _this.map_config.key
					}),
					normala = L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion', {
						maxZoom: _this.map_config.maxZoom,
						minZoom: _this.map_config.minZoom,
						key: _this.map_config.key
					}),
					imgm = L.tileLayer.chinaProvider('TianDiTu.Satellite.Map', {
						maxZoom: _this.map_config.maxZoom,
						minZoom: _this.map_config.minZoom,
						key: _this.map_config.key
					}),
					imga = L.tileLayer.chinaProvider('TianDiTu.Satellite.Annotion', {
						maxZoom: _this.map_config.maxZoom,
						minZoom: _this.map_config.minZoom,
						key: _this.map_config.key
					});
				var normal = L.layerGroup([normalm, normala]),
					image = L.layerGroup([imgm, imga]);
				var baseLayers = {
					"<div class='localMap'></div>": normal,
					"<div class='local2Map'></div>": image,
				}
				this.map = L.map("map", {
					layers: [normal],
					center: this.map_config.center,
					zoom: this.map_config.zoom,
					zoomControl: false,
					attributionControl: false,
					drawControl: true
				});
				this.map.doubleClickZoom.disable(); //绘制后需要双击，so禁止双击当大功能
				// var editableLayers = new L.FeatureGroup();
				// this.map.addLayer(editableLayers);
				// var drawControl = new L.Control.Draw({
				// 	position: 'topleft',
				// 	draw: {
				// 		polyline: false,
				// 		polygon: false,
				// 		circle: {},
				// 		rectangle: false,
				// 		marker: false,
				// 		remove: true
				// 	},
				// 	edit: {
				// 		featureGroup: editableLayers,
				// 		remove: true
				// 	}
				// });
				// this.map.addControl(drawControl);
				// var geojsonFeature = {"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[[116.139221,39.89288],[116.600647,39.888665],[116.60614,39.698734],[116.125488,39.675484],[116.119995,39.484965],[116.603394,39.493444],[116.586914,39.270537],[116.40564,39.336422],[116.40564,39.336422],[116.40564,39.336422]]}}
				// // let a = new Terraformer.WKT.parse(_this.mapJson.spatialData);
				// let rMap = L.geoJson(geojsonFeature, {
				// 	style(feature) {
				// 		return {
				// 			color: 'rgb(56,168,0)',
				// 			fillOpacity: 0,
				// 			weight: 5,
				// 		}
				// 	}
				// }).addTo(this.map)
				L.control.layers(baseLayers).addTo(this.map);
				this.lines = new L.polyline(this.points)
				this.tempLines = new L.polyline([])
				this.map.on('click', this.mapClick)
				this.map.on('dblclick', this.mapDbClick)
			},
			mapClick(e) {
				console.log(e.latlng)
				this.points.push([e.latlng.lat, e.latlng.lng])
				this.lines.addLatLng(e.latlng)
				this.map.addLayer(this.lines)
				this.map.addLayer(L.circle(e.latlng, {
					color: '#ff0000',
					fillColor: 'ff0000',
					fillOpacity: 1
				}))
				this.map.on('mousemove', this.onMove)
			},
			mapDbClick(e) {
				this.endGeoJSON = this.lines.toGeoJSON()
				console.log('this.endGeoJSON', JSON.stringify(this.endGeoJSON))
				alert(JSON.stringify(this.endGeoJSON.geometry))
				L.polyline(this.points).addTo(this.map)
				this.points = []
				this.lines = new L.polyline(this.points)
				this.map.off('mousemove')
			},
			onMove(e) {
				if (this.points.length > 0) {
					let ls = [this.points[this.points.length - 1],
						[e.latlng.lat, e.latlng.lng]
					]
					this.tempLines.setLatLngs(ls)
					this.map.addLayer(this.tempLines)
				}
			}
		},
		beforeDestroy() {
			if (this.map) {
				this.map.remove();
			}
		}
	}
</script>
<style scoped lang="less">
	@import '../assets/css/control.css';

	#map {
		height: 780px;
		cursor: default;
	}
</style>
