const path = require('path');
const webpack = require('webpack');
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
	assetsDir: 'static',
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	outputDir: process.env.OUTPUT_NAME,//从.env活.env.test获取
	pages: {
		index: {
			// page 的入口
			entry: 'src/main.js',
			// 模板来源
			template: 'public/index.html', //一般指最外层的那个index.html
			// 在 outputDir中的 index.html 输出
			filename: 'index.html',
			// 当使用 title 选项时，定义title的名称
			// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
			title: '这是一个测试的程序',
			// 在这个页面中包含的块，默认情况下会包含;(据说是多入口时用的，用于决定时候讲定义的js加入到页面)
			// 提取出来的通用 chunk 和 vendor chunk。
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		},
	},
	productionSourceMap: true,//如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
	//crossorigin:'anonymous',//需要资源跨域时可以启用；需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签；
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$: "jquery",
				jQuery: "jquery",
				"windows.jQuery": "jquery"
			})
		]
	},
	css: {
		sourceMap: true //开发的时候用来调试css和发现css错误；发布的时候关闭
	},
	
	chainWebpack: config => {
		//重定义文件夹路径并制定别名
		config.resolve.alias
		.set('@', resolve('src'))
		.set('@static', resolve('static'))
		.set('@assets', resolve('src/assets'))
		.set('@components', resolve('src/components'))
	},
	
	devServer: {
		host: 'localhost', //运行的主机地址，也可以使用'localhost'
		port: 8082, //端口号，不配置的话程序自动配置不冲突的端口号
		open: true, //设为true时，npm启动后自动打开页面
		proxy: {
			'/patrolMgr': {//最后的地址前缀，请求地址变为：/patrolMgr/xxx/xxx
			  target: 'http://122.224.129.35:5555/patrolMgr',
			  ws: true,
			  changeOrigin: true,
			  pathRewrite: {
			    '^/patrolMgr': ''
			  }
			},//多个地址的时候用
			'/uip': {
			  target: 'http://122.224.129.35:5555/uip',
			  ws: true,
			  changeOrigin: true,
			  pathRewrite: {
			    '^/uip': ''
			  }
			}
		}
	}
}
