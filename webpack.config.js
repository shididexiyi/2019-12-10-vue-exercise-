module.exports = {
    mode: 'development',
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
      ]
}