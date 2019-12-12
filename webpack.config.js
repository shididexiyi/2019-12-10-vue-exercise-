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
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            }
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