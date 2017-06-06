import path from 'path';
import autoprefixer from 'autoprefixer';
import nodeExternals from 'webpack-node-externals';

const NAME = 'movie-info';

// App files location
const PATHS = {
    app: path.resolve(__dirname, '../src/'),
    dist: path.resolve(__dirname, '../dist/'),
    nodeModules: path.resolve(__dirname, '../node_modules/'),
    serverBase: path.resolve(__dirname, '../')
};

const SASS_LOADERS = [
    'style-loader',
    'css-loader?sourceMap',
    'postcss-loader',
    'sass-loader?outputStyle=expanded'
];

module.exports = {
    entry: {
        app: [PATHS.app + '/movie-info.js', 'webpack-material-design-icons']
    },
    output: {
        path: PATHS.dist,
        filename: `${NAME}.bundle.js`
    },
    externals: [nodeExternals({modulesDir: 'node_modules'})],
    stats: {
        colors: true,
        reasons: true
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: SASS_LOADERS.join('!')
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader?limit=10000&name=[name].[ext]'
            },
            {
                test: /\.(ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.html$/,
                loader: 'ngtemplate!html'
            }
        ]
    },
    postcss: function () {
        return [autoprefixer({
            browsers: ['last 2 versions']
        })];
    },
    devServer: {
        contentBase: PATHS.serverBase,
        port: 3000,
        historyApiFallback: true
    },
    sassLoader: {
        includePaths: [PATHS.nodeModules]
    }
};