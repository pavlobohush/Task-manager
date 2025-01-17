import path from 'path';

export default {
    mode: 'development',
    entry: './src/main/resources/static/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('src/main/resources/static/js'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
