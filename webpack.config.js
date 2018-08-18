const path = require('path');
var nodeExternals = require('webpack-node-externals');


module.exports = {
mode: 'development',
//    mode: 'production',

 //This is essential for Code Splittingweb 
  entry: {
    index: [
        './assets/js/bootstrap.min.js',
]
  },
  
// entry: './index.js',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
 
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder  
 optimization: {
    splitChunks: {
       chunks: 'all'
     }
   }
};