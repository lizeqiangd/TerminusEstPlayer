module.exports = {
    entry: './src/com/lizeqiangd/player/TerminusEstPlayer/TerminusEstPlayer.js',
    output: {
        path: './bin',
        filename: 'TerminusEstPlayer.js'
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=819200'
            }
        ]
    }
};