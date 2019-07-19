---
title: wepy开发小程序
date: '2019/04/30 10:22:35'
type: post
tag: ['wepy', '小程序']
meta:
  -
    name: description
    content: 小程序开发
  -
    name: keywords
    content: wepy
---

<plContent>

:100: H5富文本和踩坑记
<!-- more -->

### 1.0 H5内嵌富文本编辑器
微信小程序没有支持的原生富文本组件，可以通过web-view内嵌H5实现富文本编辑功能，起初使用的是wangEditor富文本编辑器，因为项目使用的是七牛云存储，wangEditor在pc端上传是没有问题的，但在在移动端调用不了本地图片，于是换了个功能强大二次开发较强的富文本编辑器[vue-quill-editor](!https://github.com/surmon-china/vue-quill-editor),更多请参考[官方文档](!https://github.com/surmon-china/vue-quill-editor)， 基于此对上传图片进行二次开发。

> 七牛云 + elementUi + vue-quill-editor上传图片和富文本

```shell
$ npm install vue-quill-editor element-ui --save
```

``` html
<template>
  <div class="editor">
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
      <!-- @blur="onEditorBlur($event)" -->
    </quill-editor>
    <!-- 文件上传input 将它隐藏-->
    <el-upload
      class="upload-demo"
      :action="qnLocation"
      :before-upload='beforeUpload'
      :data="uploadData"
      :on-success='upScuccess'
      ref="upload"
      style="display:none">
      <el-button
        size="small"
        type="primary"
        id="imgInput"
        v-loading.fullscreen.lock="fullscreenLoading">
      </el-button>
    </el-upload>
    <div class="btn_box flex">
      <button class="flex-1 save_draft" @click="handleCancel">取消</button>
      <button class="flex-1 save_release" @click="handleSubmit" :disabled="!content">确定</button>
    </div>
  </div>
</template>

<script>
import Quill from 'quill'
import api from '@/request/api'
import Cookies from 'js-cookie'

const DOMAIN = 'https://img.makeapoint.info/'

export default {
  name: 'qillEditor',
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  created () {
    this.$nextTick(() => {
      if (this.$route.query.content) {
        this.content = this.$route.query.content
        this.tempRichText = this.content
      }
      let token = this.$route.query.currentToken
      Cookies.set('currentToken_mini', token)
    })
  },
  mounted () {
    this.$refs.myQuillEditor.quill.getModule('toolbar').addHandler('image', this.imgHandler)
  },
  data () {
    return {
      qnLocation: 'https://up-z2.qbox.me',
      uploadData: {}, // 上传参数
      fullscreenLoading: false,
      addRange: [],
      uploadType: '', // 上传的文件类型
      content: '', // 提交的富文本内容
      tempRichText: '', // 临时富文本内容
      editorOption: { // 自定义菜单
        placeholder: "请输入游记正文",
        modules: {
          toolbar: [
            // ['bold', 'italic', 'underline', 'strike'],
            // [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            // [{ 'script': 'sub' }, { 'script': 'super' }],
            // [{ 'indent': '-1' }, { 'indent': '+1' }], // 缩进
            // [{ 'direction': 'rtl' }], // 反向
            // [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
            // [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // 标题
            // [{ 'font': [] }], // 字体
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['blockquote'],
            ['link', 'image'],
            ['clean']
          ]
        }
      }
    }
  },
  methods: {
    handleCancel () { // 回退至小程序
      window.wx.miniProgram.navigateBack({
        delta: 1
      })
      window.wx.miniProgram.postMessage({ // 向小程序发送数据
        data: this.tempRichText
      })
    },
    handleSubmit () { // 返回小程序并提交富文本内容
      window.wx.miniProgram.navigateBack({
        delta: 1
      })
      window.wx.miniProgram.postMessage({ // 向小程序发送数据
        data: this.content
      })
    },
    // 图片上传前获得数据token数据
    qnUpload (file) {
      this.fullscreenLoading = true
      const suffix = file.name.split('.')
      const ext = suffix.splice(suffix.length - 1, 1)[0]
      return api.upload().then(res => {
        this.uploadData = {
          key: `image/${suffix.join('.')}_${new Date().getTime()}.${ext}`,
          token: res.data.data
        }
      })
    },
    // 图片上传之前调取的函数
    beforeUpload (file) {
      return this.qnUpload(file)
    },
    // 图片上传成功回调插入到编辑器中
    upScuccess (e, file, fileList) {
      this.fullscreenLoading = false
      let url = ''
      url = DOMAIN + e.key
      if (url != null && url.length > 0) {  // 将文件上传后的URL地址插入到编辑器文本中
        let value = url
        this.addRange = this.$refs.myQuillEditor.quill.getSelection()
        // 调用编辑器的 insertEmbed 方法，插入URL
        this.$refs.myQuillEditor.quill.insertEmbed(this.addRange !== null ? this.addRange.index : 0, this.uploadType, value, Quill.sources.USER)
      }
      this.$refs['upload'].clearFiles() // 插入成功后清除input的内容
    },
    // 点击图片icon触发事件
    imgHandler(state) {
      this.addRange = this.$refs.myQuillEditor.quill.getSelection()
      if (state) {
        let fileInput = document.getElementById('imgInput')
        fileInput.click() // 加一个触发事件
      }
      this.uploadType = 'image'
    },
    // 点击视频icon触发事件
    // videoHandler(state) {
    //   this.addRange = this.$refs.myQuillEditor.quill.getSelection()
    //   if (state) {
    //     let fileInput = document.getElementById('imgInput')
    //     fileInput.click() // 加一个触发事件
    //   }
    //   this.uploadType = 'video'
    // },
    // onEditorBlur(editor) {
    //   this.content = html
    // },
    // 编辑器获得光标
    onEditorFocus(editor) {
      editor.enable(true)
    },
    // 编辑器文本发生变化
    onEditorChange({ editor, html, text }) {
      this.content = html
    }
  }
}
</script>
```

```css

<style lang="less">
.quill-editor {
  .ql-container {
    min-height: 50vh;
  }
}
.ql-editor img {
  width: 100%;
  height: 200px;
}
</style>

<style lang="less" scoped>
.editor {
  width: 100%;
  height: 100vh;
  .flex {
    display: flex;
  }
  .flex-1 {
    flex: 1;
  }
  .btn_box {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    z-index: 999;
    background: #FAFAFA;
    box-shadow:0px 1px 0px 0px rgba(217,217,217,0.5);
    border-top: 1px solid #D9D9D9;
    text-align: center;
    button {
      font-size: 16px;
      line-height: 50px;
      margin: 0;
      padding: 0;
      border: 1px solid #D9D9D9;  //自定义边框
      outline: none;
    }
    .save_draft{
      color: #B3B3B3;
      border-right: 1px solid #D9D9D9;
    }
    .save_release{
      color: #fff;
      border: 1px solid #00DBD2;
      background: #00DBD2
    }
  }
}
</style>
```
### 2.0 使用[web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html)组件传递数据的问题
小程序内嵌网页向小程序回传数据时，尽量不要使用路由传参，比如富文本内容会自动截取掉src等号之后的字符串，应使用wx.miniProgram.postMessage()方法向小程序发送数据

>注意：官方描述--网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息

也就是说只有在小程序后退、组件销毁、分享时才会触发，若无效可以调换下顺序就可以了

内嵌的网页代码：
```js
wx.miniProgram.navigateBack({delta: 1})
wx.miniProgram.postMessage({ data: '数据' })
```
小程序内代码：
```html
<web-view src="{{url}}" bindmessage="handleGetmsg"></web-view>
```
```js
methods = {
    handleGetmsg (ev) {
      this.data = ev.detail.data[0]
      this.$apply()
    }
}
```

总结一下：wepy开发最多的问题就是数据缓存，组件双向绑定最好使用twoWay: true来实现。

</plContent>