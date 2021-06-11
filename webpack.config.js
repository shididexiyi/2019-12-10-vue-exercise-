
module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ttf$/,
                use: [
                  {
                    loader: 'ttf-loader',
                    options: {
                      name: '.src/font/[hash].[ext]',
                    },
                  },
                ]
            },
            {
                test:/\.(png|jpg|gif|jpeg)/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500
                    }
                }]
            },
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
            },
            {
                test: /\.sass$/,
                loader: 'sass-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                  appendTsSuffixTo: [/\.vue$/],
                }
            },
        ],
    },
    
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            '~': 'src/components',
        }
    }
}