const path = require('path');

module.exports = {
  entry: './src/index.js',  // Replace with the path to your entry JavaScript file
  output: {
    filename: 'bundle.js',  // Replace with your desired output file name
    path: path.resolve(__dirname, 'dist')  // Replace 'dist' with your desired output directory
  }
};
