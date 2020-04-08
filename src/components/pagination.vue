<template>
	<div>
		<el-pagination 
			background 
			@size-change="handleSizeChange" 
			@current-change="handleCurrentChange" 
			@prev-click="handleCurrentChange" 
			@next-click="handleCurrentChange" 
			:current-page="currentPage" 
			:page-sizes="pageSizes" 
			:page-size="pageSize" 
			:layout="layout" 
			:total="total">
		</el-pagination>
	</div>
</template>
<script>
	export default {
		props:{
			currentPage:{
				type:Number,
				default:1
			},
			total:{
				type:Number,
				default:0
			},
			layout:{
				type:String,
				default:"prev, pager, next,total, sizes, jumper"
			},
			pageSize:{
				type:Number,
				default:10
			},
			pageSizes:{
				type:Array,
				default(){
					return [10, 20, 30, 40]
				}
			}
		},
		data() {
			return {
				changing:false
			}
		},
		methods:{
			handleSizeChange(value){
				this.$emit('size-change',value);
			},
			handleCurrentChange(value){
				if(this.changing) return//点prev和next时会触发两次
				this.changing = true
				setTimeout(()=>{
					this.changing = false
				},200)
				this.$emit('page-change',value);
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>