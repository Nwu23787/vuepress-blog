# node 的模块查找规则

当我们在 node 环境中使用 import/requery 引入其他模块的时候，node 会帮助我们去查找对应的模块并执行。那么 node 查找模块的机制是什么呢？

## 1、文件查找 

当我们书写的路径是以绝对路径或者相对路径开头的时候，就会进行文件查找的逻辑。

没有书写文件后缀时：

1. 先找是否存在这个文件：
   若存在，则执行

   ```js
   // a
   console.log('a')
   
   // main.js
   require('./a') // 打印 a
   ```

2. 若不存在，则尝试给路径中的文件添加后缀名
   支持添加 js 或 json

   ```js
   // a.js
   console.log('a')
   
   // main.js
   require('./a') // 打印 a
   ```

3. 尝试添加文件后缀名后还是找不到，进入文件夹查找

## 2、文件夹查找

如果查找不到对应的文件，则查找同名文件夹：

1. 查看目标文件夹下是否存在 package.json 文件，若不存在，默认找文件夹下的 index.js 文件

   ```js
   // ./a/index.js
   console.log('a')
   
   // main.js
   require('./a') // 打印 a
   ```

2. 若存在 package.json 则查找 main 配置项指向的文件
   ```js
   // package.json
   {
       "main": "p.js"
   }
   
   // p.js
   console.log('a');
   
   // main.js
   require('./a') // 打印 a
   ```

3. 若 main 执向不存在的文件，或没有 main 配置项，还是查找 ndex.js 文件，若没有则报错。

## 3、内置模块查找

当我们书写的路径不是以相对路径或者绝对路径开头的时候，就会触发内置模块查找和第三方模块查找。

模块查找就是检查我们想要导入的模块是不是 node 的内置模块，比如 http、fs 等等，如果是，可以直接拿到结果。

## 4、第三方模块查找

当我们想导入的模块不是 node 的内置模块时，会进入最后一个查找步骤：第三方模块查找。

进行第三方模块查找，会先查找当前目录下的 node_modules 目录，如果目录下有我们要查找的文件，就执行

```js
// node_modules/a
console.log('a')

//main.js
require('a') // a
```

如果没有发现同名文件，就继续进行文件查找（补后缀）和文件夹查找逻辑
