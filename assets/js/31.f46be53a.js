(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{164:function(t,a,s){"use strict";s.r(a);var e=s(2),v=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("plContent",[s("p",[t._v("💯 vue组件开发规范和思路\n")]),t._v(" "),s("p",[t._v("🎉 🎉 🎉 组件库就是为了统一不同/相同产品线之间的风格，给用户更好的体验，减少单次开发中写UI组件时浪费的时间和人力，提高开发效率。封装组件可以从中提炼自己的技术点和更深层次的对vue的理解，构建自己的网站和Blog（使用vuepress）,加强文档的编写能力")]),t._v(" "),s("h2",{attrs:{id:"_1-封装组件库收获"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-封装组件库收获","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 封装组件库收获")]),t._v(" "),s("ul",[s("li",[t._v("深入对vue的理解")]),t._v(" "),s("li",[t._v("学习组件封装技能，掌握组件设计思路")]),t._v(" "),s("li",[t._v("劣实js/css基础")]),t._v(" "),s("li",[t._v("加强文档编写能力")])]),t._v(" "),s("h2",{attrs:{id:"_2-组件设计的思路和标准"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-组件设计的思路和标准","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 组件设计的思路和标准")]),t._v(" "),s("ul",[s("li",[t._v("可扩展性强")]),t._v(" "),s("li",[t._v("适用程度高")]),t._v(" "),s("li",[t._v("文档清楚详细")]),t._v(" "),s("li",[t._v("版本隔离，小版本优化加功能，大改需要大版本更新")]),t._v(" "),s("li",[t._v("和UI协调统一，要求UI交互参与进来")])]),t._v(" "),s("h3",{attrs:{id:"_3-组件设计和开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-组件设计和开发","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 组件设计和开发")]),t._v(" "),s("p",[t._v("💯 开发用到的vue api")]),t._v(" "),s("ul",[s("li",[t._v("$parent： 获取当前组件父组件。继承父组件的props")]),t._v(" "),s("li",[t._v("$props: 获取继承父组件的props")]),t._v(" "),s("li",[t._v("$slots：获取当前插槽。")]),t._v(" "),s("li",[t._v("$refs： 一个对象，持有注册过 ref 特性 的所有 DOM 元素和组件实例。")]),t._v(" "),s("li",[t._v("$el: Vue实例使用的根 DOM 元素。")]),t._v(" "),s("li",[t._v("$emit： 组件触发自定义事件。")]),t._v(" "),s("li",[t._v('.sync：语法糖，单向数据流中，父组件监听到子组件props并修改，用了.sync不需要显式在父组件监听组件内部触发的自定义事件去修改值, 父组件只要写:x.sync="value", 注意此时子组件触发的事件必须是"update:x"此语法糖才生效。')])]),t._v(" "),s("h4",{attrs:{id:"部分效果展示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部分效果展示","aria-hidden":"true"}},[t._v("#")]),t._v(" 部分效果展示")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/23/16ae3e5553970921?w=361&h=642&f=gif&s=1201931",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/23/16ae3eff314deb33?w=381&h=672&f=gif&s=44496",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/5/23/16ae35430e58923b?w=413&h=733&f=gif&s=73782",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_4-组件库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-组件库","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 组件库")]),t._v(" "),s("h4",{attrs:{id:"_4-1-toast组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-toast组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.1. Toast组件")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"基本用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提示文案'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'loading'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'加载中...'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nToast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'成功文案'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nToast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'失败文案'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("方法名")]),t._v(" "),s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("返回值")]),t._v(" "),s("th",[t._v("介绍")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Toast")]),t._v(" "),s("td",[s("code",[t._v("options/message")])]),t._v(" "),s("td",[t._v("toast 实例")]),t._v(" "),s("td",[t._v("展示提示")])]),t._v(" "),s("tr",[s("td",[t._v("Toast.loading")]),t._v(" "),s("td",[s("code",[t._v("options/message")])]),t._v(" "),s("td",[t._v("toast 实例")]),t._v(" "),s("td",[t._v("展示加载提示")])]),t._v(" "),s("tr",[s("td",[t._v("Toast.success")]),t._v(" "),s("td",[s("code",[t._v("options/message")])]),t._v(" "),s("td",[t._v("toast 实例")]),t._v(" "),s("td",[t._v("展示成功提示")])]),t._v(" "),s("tr",[s("td",[t._v("Toast.fail")]),t._v(" "),s("td",[s("code",[t._v("options/message")])]),t._v(" "),s("td",[t._v("toast 实例")]),t._v(" "),s("td",[t._v("展示失败提示")])]),t._v(" "),s("tr",[s("td",[t._v("Toast.close")]),t._v(" "),s("td",[s("code",[t._v("close: Boolean")])]),t._v(" "),s("td",[s("code",[t._v("Void")])]),t._v(" "),s("td",[t._v("关闭提示")])])])]),t._v(" "),s("h4",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("提示类型，可选值为"),s("code",[t._v("loading")]),t._v(" "),s("code",[t._v("success")]),t._v(" "),s("code",[t._v("fail")]),t._v(" "),s("code",[t._v("close")]),t._v(" "),s("code",[t._v("normal")]),t._v(" "),s("code",[t._v("colorful")]),t._v(" "),s("code",[t._v("html")])]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("text")])])]),t._v(" "),s("tr",[s("td",[t._v("position")]),t._v(" "),s("td",[t._v("位置，可选值为 "),s("code",[t._v("top bottom")])]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("middle")])])]),t._v(" "),s("tr",[s("td",[t._v("duration")]),t._v(" "),s("td",[t._v("展示时长(ms)")]),t._v(" "),s("td",[s("code",[t._v("Number")])]),t._v(" "),s("td",[s("code",[t._v("3000")])])]),t._v(" "),s("tr",[s("td",[t._v("mask")]),t._v(" "),s("td",[t._v("是否显示背景遮罩层")]),t._v(" "),s("td",[s("code",[t._v("Boolean")])]),t._v(" "),s("td",[s("code",[t._v("true")])])]),t._v(" "),s("tr",[s("td",[t._v("transition")]),t._v(" "),s("td",[t._v("提示开场动画，可选值为"),s("code",[t._v("slide-down")]),t._v(" "),s("code",[t._v("slide-up")]),t._v(" "),s("code",[t._v("slide-left")]),t._v(" "),s("code",[t._v("slide-right")])]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("fade")])])]),t._v(" "),s("tr",[s("td",[t._v("bgContent")]),t._v(" "),s("td",[t._v("提示内容的背景颜色，可选值为"),s("code",[t._v("white")]),t._v(" "),s("code",[t._v("transparent")])]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("black")])])]),t._v(" "),s("tr",[s("td",[t._v("background")]),t._v(" "),s("td",[t._v("遮盖层的背景，支持十六进制和rgb格式")]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("rgba(0, 0, 0, 0.3)")])])]),t._v(" "),s("tr",[s("td",[t._v("colorText")]),t._v(" "),s("td",[t._v("色彩文案，只限于type为"),s("code",[t._v("colorful")]),t._v("使用")]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("color")]),t._v(" "),s("td",[t._v("色彩文案颜色，只限于type为"),s("code",[t._v("colorful")]),t._v("使用")]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("#F89516")])])]),t._v(" "),s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("标题，只限于type为"),s("code",[t._v("normal")]),t._v("使用")]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("icon")]),t._v(" "),s("td",[t._v("加载的图标，只支持svg")]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("loading")])])]),t._v(" "),s("tr",[s("td",[t._v("size")]),t._v(" "),s("td",[t._v("加载的图标大小")]),t._v(" "),s("td",[s("code",[t._v("Number")])]),t._v(" "),s("td",[s("code",[t._v("48")])])]),t._v(" "),s("tr",[s("td",[t._v("isClose")]),t._v(" "),s("td",[t._v("主动关闭加载提示")]),t._v(" "),s("td",[s("code",[t._v("Boolean")])]),t._v(" "),s("td",[s("code",[t._v("false")])])]),t._v(" "),s("tr",[s("td",[t._v("animation")]),t._v(" "),s("td",[t._v("是否开启加载的动画，只限于type为loading")]),t._v(" "),s("td",[s("code",[t._v("Boolean")])]),t._v(" "),s("td",[s("code",[t._v("false")])])]),t._v(" "),s("tr",[s("td",[t._v("animationName")]),t._v(" "),s("td",[t._v("开启加载的动画名，只限于type为loading")]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[t._v("-")])])])]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_4-2-step组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-step组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.2. Step组件")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"基本用法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本用法-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pl-step")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":active")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("active"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("active-text-color")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#313131"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pl-steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("预约成功"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pl-steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pl-steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("预约专家"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pl-steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pl-steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("正在服务"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pl-steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pl-steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("完成服务"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pl-steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pl-step")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h4",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("active")]),t._v(" "),s("td",[t._v("当前步骤")]),t._v(" "),s("td",[s("code",[t._v("Number")])]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("active-svg")]),t._v(" "),s("td",[t._v("自定义激活状态底部图标，详见svg组件")]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("checked")])])]),t._v(" "),s("tr",[s("td",[t._v("dot-svg")]),t._v(" "),s("td",[t._v("自定义未激活状态底部图标，详见svg组件")]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("dot-circle")])])]),t._v(" "),s("tr",[s("td",[t._v("active-text-color")]),t._v(" "),s("td",[t._v("自定义激活状态颜色")]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("#268AED")])])]),t._v(" "),s("tr",[s("td",[t._v("active-line-color")]),t._v(" "),s("td",[t._v("自定义激活线束颜色")]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("#268AED")])])])])]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"_4-3-collapse组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-collapse组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.3. collapse组件")]),t._v(" "),s("hr"),t._v(" "),s("h4",{attrs:{id:"基本用法-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本用法-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pl-collapse")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pl-collapse")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("character"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("align")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pl-collapse")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("align")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("character"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("unfold-text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("详细"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("fold-text")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("挂起"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("h4",{attrs:{id:"api-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-2","aria-hidden":"true"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[t._v("展开的内容")]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("展开方式, 可选值"),s("code",[t._v("character")])]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("arrow")])])]),t._v(" "),s("tr",[s("td",[t._v("align")]),t._v(" "),s("td",[t._v("展开动作的位置"),s("code",[t._v("left")]),t._v(" "),s("code",[t._v("right")])]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("center")])])]),t._v(" "),s("tr",[s("td",[t._v("unfold-text")]),t._v(" "),s("td",[t._v("展开描述文字")]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("展开")])])]),t._v(" "),s("tr",[s("td",[t._v("fold-text")]),t._v(" "),s("td",[t._v("折叠描述文字")]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[s("code",[t._v("收起")])])])])]),t._v(" "),s("hr"),t._v(" "),s("blockquote",[s("p",[t._v("未完待续")])])])],1)},[],!1,null,null,null);a.default=v.exports}}]);