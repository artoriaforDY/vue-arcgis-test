<template>
	<div class="mainWrap">
		<pagination :total="200" :currentPage="currentPage" @size-change="sizePage" @page-change="pageChange"></pagination>
	</div>
</template>
<script>
	export default {
		components: {
			
		},
		data() {
			return {
				currentPage:2
			}
		},
		mounted() {
			this.$nextTick(() => {
			})
		},
		methods:{
			sizePage(value){
				this.currentPage = 1;
				console.log('value1:',value)
			},
			pageChange(value){
				console.log('value2:',value)
			}
		}
	}
</script>
<style scoped lang="less">
</style>
