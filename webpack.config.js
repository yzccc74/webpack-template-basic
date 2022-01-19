// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
	// 파일을 읽어들이기 시작하는 진입점 설정
	entry: './js/main.js',
	
	// 결과물(번들)을 반환하는 설정
	output: {
		// path: path.resolve(__dirname, 'dist'), // nodeJS에서 요구하는 절대 경로 명시
		// filename: 'main.js',
		clean: true // 기존 결과물 제거
	},

	module: {
		rules: [
			{
				test: /\.s?css$/, // .(s있을수도있고없을수도)css로 끝나는 것을 찾는 정규식
				use: [
					'style-loader', // 해석된 내용을 실제로 html에서 사용할 수 있도록 삽입
					'css-loader', // main.js의 import된 css를 해석
					'postcss-loader',
					'sass-loader' // 가장 먼저 해석됨
				]
			},
			{
				test: /\.js/,
				use: [
					'babel-loader'
				]
			}
		]
	},

	// 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
	plugins: [
		new HtmlPlugin({
			template: './index.html'
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'static'}
			]
		})
	],
	
	// devServer: {
	// 	host: 'localhost'
	// }
}