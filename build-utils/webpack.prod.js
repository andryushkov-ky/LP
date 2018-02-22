const
    webpack = require('webpack'),
    commonPaths = require("./common-paths");

const CompressionPlugin = require("compression-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    module: {
        rules: [
            {
                test: /\.pcss$/,
                use : ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                alias: {
                                    // you can use this alias for  background: url("~svg/...") || url("~raster/..."), don't forget to use "~" in your url
                                    // but it wouldn't work if you use background: inline("...")
                                    // look loadPaths in Plugin postcss-assets
                                    svg: commonPaths.svgPath,
                                    raster: commonPaths.rasterPath,
                                }
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    path: './postcss.config.js'
                                }
                            }
                        },
                    ]
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: "index.css"
        }),

        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        }),

        // new CompressionPlugin({
        //     asset: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     test: /\.js$|\.json$|\.css$|\.html$/,
        //     deleteOriginalAssets: true
        // })
    ]
};

module.exports = config;