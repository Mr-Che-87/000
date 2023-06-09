const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    mode: 'development',  //по умолчанию - "production"
    entry: './src/index.js',   // точка входа в приложение

    
    output: {            //опции для файла, который генерирует webpack для сборки модулей         
        filename: 'main.js'      
    },

    module: {
        rules: [
          { test: /\.css$/,  //чтобы загрузчик пропускал только css-файлы
           use: [
            {      loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,  // позволяет MiniCssExtractPlugin.loader работать в ES6 модулями
            },
       }, 
       'css-loader'] }  //перечисляем загрузчики. Будут выведены в обратном порядке – сначала ‘css-loader’
      ]
      },

      plugins: [new MiniCssExtractPlugin()]


    
}
