# umi-plugin-git-version

[![NPM version](https://img.shields.io/npm/v/umi-plugin-git-version.svg?style=flat)](https://npmjs.org/package/umi-plugin-git-version)
[![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-git-version.svg?style=flat)](https://npmjs.org/package/umi-plugin-git-version)

此功能基于 [git-revision-webpack-plugin](https://github.com/pirelenito/git-revision-webpack-plugin)封装

## 使用方法

1. 安装

   ```bash
   npm install umi-plugin-git-version --save
   # or
   yarn add umi-plugin-git-version
   ```

2. 使用

    在umi@4中使用

   ```javascript
   // .umirc.js 或者 .umirc.ts
   // 添加
   export default {
     plugins: ['umi-plugin-git-version'],
   }
   ```
    在umi@3中使用

    ```javascript
      // do nothing, umi@3 will scan your node_modules and add to plugins
    ```

3. 在页面中使用变量

```javascript
  __VERSION__: 当前版本号
  __COMMIT_HASH__: 当前提交hash值
  __BRANCH__: 当前提交分支
  __LAST_COMMIT_DATETIME__: 最后提交时间
```

## LICENSE

MIT
