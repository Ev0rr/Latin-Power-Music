{
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
  exclude: [path.resolve(__dirname, 'src/styles.css')],
}
