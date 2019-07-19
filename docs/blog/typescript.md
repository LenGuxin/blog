---
title: vue + typescript结合
date: '2019/04/30 12:00:00'
type: post
tag: ['ts', 'typescript']
meta:
  -
    name: description
    content: vue和typescript的结合使用
  -
    name: keywords
    content: vue, typescript 
---

<plContent>

:100: vue+typescript的基本使用
<!-- more -->

自尤大神去年9月推出vue对typescript的支持后，一直想开箱尝试vue+ts，最近一个新项目准备入手typescript，也遇到了很多坑，下面就一步步来吧！！！

## 1. 项目创建和初始化
### 1.1 安装脚手架、创建项目
全局安装 vue-cli脚手架
```js
$ npm install -g @vue/cli
```
等待安装完成后开始下一步，检查是否安装成功: Vue -v

### 1.2. 初始化项目
```js
$ vue create vue-ts
```
1. 选择预设的模板
![An image](https://user-gold-cdn.xitu.io/2019/4/30/16a6bdf5e89bc8d2?w=666&h=191&f=png&s=6636)
选择更多功能 `Manully select features`   
回车后来到选择插件
2. 选择插件   
这边选择了（Babel、Typescript、Router、Css预处理器、Linter / Formatter 格式检查、Unit测试框架）  
`使用键盘空格选择插件`
![An image](https://user-gold-cdn.xitu.io/2019/4/30/16a6be50d19434c7?w=474&h=251&f=png&s=7121)
3. 自动检测typescript（yes）
![An image](https://user-gold-cdn.xitu.io/2019/4/30/16a6bed1eea7aaa1?w=564&h=18&f=png&s=1453)
4. 路由模式选择  
是否使用 history模式的路由 （Yes）
![An image](https://user-gold-cdn.xitu.io/2019/4/30/16a6bee3cad31e82?w=881&h=23&f=png&s=2265)
5. 选择一个css预处理器 (Sass/SCSS)
![An image](https://user-gold-cdn.xitu.io/2019/4/30/16a6bee874044778?w=878&h=86&f=png&s=4325)
6. 选择格式检查规则（什么时候进行 tslint 校验: Line on save）
![An image](https://user-gold-cdn.xitu.io/2019/4/30/16a6bf064a05d085?w=834&h=73&f=png&s=4476)
7. 是否保存这份预设配置？（yes）   
选是的话，下次创建一个vue项目，可以直接使用这个预设文件，而无需再进行新的配置，直接使用选择的模板创建项目

等待所有的依赖完成
![An image](https://user-gold-cdn.xitu.io/2019/4/30/16a6bf4d58956f4d?w=567&h=378&f=png&s=425594)

> 通过node生产组件和页面是基于`lentoo`的[vuecli3-project](https://juejin.im/post/5c4a6fcd518825469414e062#heading-7)基础上稍作更改
### 2. 通过node来生成组件
安装chalk
```shell
$ npm install chalk --save-dev
```
在根目录中创建一个 scripts 文件夹，

#### 2.1. 通过node来生成组件
新增一个generateComponent.js文件，放置生成组件的代码、

新增一个template.js文件，放置组件模板的代码
template.js文件
```js
    /**
 * 将驼峰命名转为中横杠例如：PlInputGroup --> pl-input-group
 * @param str 
 */
function toMiddleLine (str) {
  let temp = str.replace(/[A-Z]/g,
  function (match) {
    return "-" + match.toLowerCase()
  });
  if (temp.slice(0, 1) === '-') { //如果首字母是大写，执行replace时会多一个-，这里需要去掉
    temp = temp.slice(1)
  }
  return temp;
}

/**
 * 首字母大写
 * @param {*} str 字符串
 * @returns
 */
function initialToUp (str) {  
  return str.slice(0, 1).toUpperCase() + str.slice(1);  
}

module.exports = {
vueTemplate: componentName => {
  return `<template>
  <div class="${toMiddleLine(componentName)}">
    ${toMiddleLine(componentName)}
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop, Watch, Emit, Provide, Inject } from 'vue-property-decorator'
  
  @Component({})
  export default class ${initialToUp(componentName)} extends Vue {
    
  }
</script>

<style lang="scss" scoped>
// @import './style.scss';
.${toMiddleLine(componentName)} {}
</style>`
},
styleTemplate: componentName => {
  return `.${toMiddleLine(componentName)} {}`
},
entryTemplate: `import Main from './main.vue'
export default Main
`
}

```
generateComponent.js文件
```js
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')

const resolve = (...file) => path.resolve(__dirname, ...file)
const log = message => console.log(chalk.green(`${message}`))
const successLog = message => console.log(chalk.blue(`${message}`))
const errorLog = error => console.log(chalk.red(`${error}`))
const { vueTemplate, entryTemplate, styleTemplate } = require('./template')

const generateFile = (path, data) => {
  if (fs.existsSync(path)) {
    errorLog(`${path}文件已存在`)
    return
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', err => {
      if (err) {
        errorLog(err.message)
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}
log('请输入要生成的组件名称、如需生成全局组件，请加 global/ 前缀')
let componentName = ''
process.stdin.on('data', async chunk => {
  const inputName = String(chunk).trim().toString()
  /**
   * 组件目录路径
   */
  const componentDirectory = resolve('../src/components', inputName)

  /**
   * vue组件路径
   */
  const componentVueName = resolve(componentDirectory, 'main.vue')
  /**
   * 入口文件路径
   */
  const entryComponentName = resolve(componentDirectory, 'index.ts')
  /**
   * style样式路径
   */
  const styleComponentName = resolve(componentDirectory, 'style.less')

  const hasComponentDirectory = fs.existsSync(componentDirectory)
  if (hasComponentDirectory) {
    errorLog(`${inputName}组件目录已存在，请重新输入`)
    return
  } else {
    log(`正在生成 component 目录 ${componentDirectory}`)
    await dotExistDirectoryCreate(componentDirectory)
    // fs.mkdirSync(componentDirectory);
  }
  try {
    if (inputName.includes('/')) {
      const inputArr = inputName.split('/')
      componentName = inputArr[inputArr.length - 1]
    } else {
      componentName = inputName
    }
    log(`正在生成 vue 文件 ${componentVueName}`)
    await generateFile(componentVueName, vueTemplate(componentName))
    log(`正在生成 entry 文件 ${entryComponentName}`)
    await generateFile(entryComponentName, entryTemplate)
    log(`正在生成 style 文件 ${styleComponentName}`)
    await generateFile(styleComponentName, styleTemplate(componentName))
    successLog('生成成功')
  } catch (e) {
    errorLog(e.message)
  }

  process.stdin.emit('end')
})
process.stdin.on('end', () => {
  log('exit')
  process.exit()
})
function dotExistDirectoryCreate (directory) {
  return new Promise((resolve) => {
    mkdirs(directory, function () {
      resolve(true)
    })
  })
}

// 递归创建目录
function mkdirs (directory, callback) {
  var exists = fs.existsSync(directory)
  if (exists) {
    callback()
  } else {
    mkdirs(path.dirname(directory), function () {
      fs.mkdirSync(directory)
      callback()
    })
  }
}

```
配置package.json
```shell
"new:comp": "node ./scripts/generateComponent"
```
执行 npm / cnpm / yarn run new:comp 生成组件
#### 2.2. 通过node来生成页面组件
在scripts目录下新建一个generateView.js文件

generateView.js文件
```js
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')

const resolve = (...file) => path.resolve(__dirname, ...file)
const log = message => console.log(chalk.green(`${message}`))
const successLog = message => console.log(chalk.blue(`${message}`))
const errorLog = error => console.log(chalk.red(`${error}`))
const { vueTemplate } = require('./template')

const generateFile = (path, data) => {
  if (fs.existsSync(path)) {
    errorLog(`${path}文件已存在`)
    return
  }
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', err => {
      if (err) {
        errorLog(err.message)
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}
log('请输入要生成的页面组件名称、会生成在 views/目录下')
let componentName = ''
process.stdin.on('data', async chunk => {
  const inputName = String(chunk).trim().toString()
  /**
   * Vue页面组件路径
   */
  let componentVueName = resolve('../src/views', inputName)
  // 如果不是以 .vue 结尾的话，自动加上
  if (!componentVueName.endsWith('.vue')) {
    componentVueName += '.vue'
  }
  /**
   * vue组件目录路径
   */
  const componentDirectory = path.dirname(componentVueName)

  const hasComponentExists = fs.existsSync(componentVueName)
  if (hasComponentExists) {
    errorLog(`${inputName}页面组件已存在，请重新输入`)
    return
  } else {
    log(`正在生成 component 目录 ${componentDirectory}`)
    await dotExistDirectoryCreate(componentDirectory)
  }
  try {
    if (inputName.includes('/')) {
      const inputArr = inputName.split('/')
      componentName = inputArr[inputArr.length - 1]
    } else {
      componentName = inputName
    }
    log(`正在生成 vue 文件 ${componentVueName}`)
    await generateFile(componentVueName, vueTemplate(componentName))
    successLog('生成成功')
  } catch (e) {
    errorLog(e.message)
  }

  process.stdin.emit('end')
})
process.stdin.on('end', () => {
  log('exit')
  process.exit()
})
function dotExistDirectoryCreate (directory) {
  return new Promise((resolve) => {
    mkdirs(directory, function () {
      resolve(true)
    })
  })
}

// 递归创建目录
function mkdirs (directory, callback) {
  var exists = fs.existsSync(directory)
  if (exists) {
    callback()
  } else {
    mkdirs(path.dirname(directory), function () {
      fs.mkdirSync(directory)
      callback()
    })
  }
}

```
配置package.json
```shell
"new:view": "node ./scripts/generateView"
```
执行 npm / cnpm / yarn run new:view 生成页面

### 3. vue与typescript结合
#### 3.1. 首先组件声明
若对vue-property-decorator库不了解的，请点击[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)的了解更多

创建组件如下：
```js
<script lang="ts">
  import { Component, Prop, Vue, Watch, Emit, Provide, Inject } from 'vue-property-decorator'
  @Component
  export default class Test extends Vue {}
</script>
```
#### 3.2. data定义

若对ts的基本类型不了解的, 请点击 [typescript中文文档](https://www.tslang.cn/docs/handbook/basic-types.html)
```js
  private listTotal: number = 50
  private form: any = {
    addText: [],
    addTextarea: [],
    text: '',
    textarea: '',
    imgUrl: ''
  }
```
#### 3.3 props声明
```js
  // align justify 弹性布局对齐方式
  @Prop({default: 'center'})
  private align!: string
  @Prop({default: 'flex-start'})
  private justify!: string
  // 千万不要这样定义 @Prop private align: string = 'center' ---> 踩
</script>
```
#### 3.4 vue生命周期及自定义方法
methods不需要像vue里面 methods: { text () {return console.log(222)} }
```js
  public created (): void {}
  public mounted (): void {}
  
  public handleClick () {} // methods定义
```
#### 3.5 Watch
```js
  // 监听路由变化
  @Watch('$route')
  onRouteChanged(route: any, oldRoute: any):void {
    console.log(route, oldRoute)
  }
```

#### 3.6 computed
```js
 public get msg () {
   return 'from typescript'
 }
```
#### 3.7 Emit
```js
  @Emit('change')
  private methodName(x: number, y: string) {
    console.log('child to parent a value')
  }
```

### 5. 踩坑
#### 5.1 tinymac富文本编辑器的结合ts的使用，[tiny中文文档](http://tinymce.ax-z.cn/)
引入tinymac的时候，会报错
![An image](https://user-gold-cdn.xitu.io/2019/4/30/16a6c2c1338ece89?w=1268&h=160&f=png&s=25076)

解决方法：src目录下面新建一个shims-tinymce.d.ts文件
```js
declare module 'tinymce/tinymce'
```
重新启动项目就ok了

#### 5.2 主题、样式、语言配置
1. 主题

引入主题报错import 'tinymce/themes/modern/theme'

可以使用sliver主题
```
   import 'tinymce/themes/silver/theme'
```
2. 样式及语言汉化

在public目录新建的static文件

2.1 将node_modules/tinymce/skins文件拷贝到static中

2.2 [zh_CN.js](http://tinymce.ax-z.cn/static/tiny/langs/zh_CN.js) 下载，拷贝到static文件中

![An image](https://user-gold-cdn.xitu.io/2019/4/30/16a6c341f445d1bd?w=222&h=88&f=png&s=2587)

#### 5.3 引入主题，样式，语言包
配置如下
```
public editorInit: any = {
    language_url: '/static/zh_CN.js',
    language: 'zh_CN',
    selector: 'textarea',
    skin_url: '/static/skins/ui/oxide',
    height: 300,
    browser_spellcheck: true, // 拼写检查
    branding: false, // 去水印
    // elementpath: false,  //禁用编辑器底部的状态栏
    statusbar: false, // 隐藏编辑器底部的状态栏
    paste_data_images: true, // 允许粘贴图像
    plugins: setPlugins,
    toolbar: setToolbar,
    // 启用菜单栏并显示如下项 [文件 编辑 插入 格式 表格]
    menubar: 'file edit insert view format table',
    // 配置每个菜单栏的子菜单项（如下是默认配置）
    menu: {
      file: {
        title: 'File',
        items: 'newdocument'
      },
      edit: {
        title: 'Edit',
        items: 'undo redo | cut copy paste pastetext | selectall'
      },
      insert: {
        title: 'Insert',
        items: 'link media | template hr'
      },
      view: {
        title: 'View',
        items: 'visualaid'
      },
      format: {
        title: 'Format',
        items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'
      },
      table: {
        title: 'Table',
        items: 'inserttable tableprops deletetable | cell row column'
      }
    },
    // 覆盖默认的字体单位为pt
    fontsize_formats: '8px 10px 12px 14px 16px 18px 20px 24px 36px',
    /**
     * 下面方法是为tinymce添加自定义插入图片按钮
     * 也可以借助elementui的Upload组件，上传图片
     */
    images_upload_url: '/api/image', // 上传图片接口地址
    images_upload_handler: (blobInfo: any, success: any, failure: any) => {
      let xhr: any = null
      let formData: any = null
      xhr = new XMLHttpRequest()
      xhr.withCredentials = false
      xhr.open('POST', this.$store.state.imgUrl)
      xhr.onload = () => {
        if (xhr.status < 200 || xhr.status >= 300) {
          failure(xhr.status)
          return
        }
        let json = JSON.parse(xhr.responseText)
        if (json.code === 0) {
          success(json.data[0].newFileName)
        } else {
          failure('HTTP Error: ' + json.msg)
        }
      }
      formData = new FormData()
      formData.append('file', blobInfo.blob(), blobInfo.filename())
      xhr.send(formData)
    }
  }
```
附上效果图：
![An image](https://user-gold-cdn.xitu.io/2019/4/30/16a6c40fac5dd493?w=660&h=338&f=png&s=29358)


### 相关资源链接
1. [TypeScript 体系调研报告](https://juejin.im/post/59c46bc86fb9a00a4636f939)
2. [ts通俗易懂文档](https://ts.xcatliu.com/)
3. [ts中文文档](http://tinymce.ax-z.cn/)
4. [vue-cli3 项目从搭建优化到docker部署](https://juejin.im/post/5c4a6fcd518825469414e062#heading-8)

</plContent>