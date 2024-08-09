(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{392:function(t,n,a){"use strict";a.r(n);var s=a(14),e=Object(s.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"虚拟-dom-如何转化为真实-dom"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-如何转化为真实-dom"}},[t._v("#")]),t._v(" 虚拟 DOM 如何转化为真实 DOM")]),t._v(" "),n("p",[t._v("上节讲解了 render 函数的生成，调用 render 函数之后，可以得到模版对应的虚拟 DOM。但虚拟 DOM 只是一个抽象出来的 JavaScript 对象，我们要将其渲染到页面上，必须将其转化为真实的 DOM 结构，然后再挂载到指定的位置上。在源码中，调用 render 函数之后获得的 VNode 会继续传递给 update 函数，执行 update 函数，就可以实现虚拟 DOM 向真实 DOM 的转化。本篇文章就来简略分析一下，Vue2 中是如何将虚拟 DOM 转化为真实 DOM 的。源码项目地址："),n("a",{attrs:{href:"https://github.com/Nwu23787/mini-Vue2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nwu23787/mini-Vue2: 手写 Vue2 核心源码 (github.com)"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"_1、patch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、patch"}},[t._v("#")]),t._v(" 1、patch")]),t._v(" "),n("p",[t._v("大名鼎鼎的 patch 方法，相信大家都并不陌生，"),n("strong",[t._v("update 函数内部其实就是调用了 patch 函数")]),t._v("。patch 函数是 Vue 核心源码中非常重要的一个函数，他主要有两个功能：")]),t._v(" "),n("ol",[n("li",[t._v("在"),n("strong",[t._v("初次渲染")]),t._v("时，将虚拟 DOM 转换为真实 DOM，然后将真实 DOM 挂载到页面上对应的位置，替换该位置原有的 DOM 结构。")]),t._v(" "),n("li",[t._v("在后续 "),n("strong",[t._v("DOM 更新")]),t._v("时，对比新旧 VNode，通过 diff 算法找出两者的差异，进行 DOM 的更新。")])]),t._v(" "),n("p",[t._v("本文主要讨论第一种情况，有关 DOM 更新和 diff 算法的内容将在后续博客中介绍。")]),t._v(" "),n("p",[t._v("patch 函数如何区分上面的两种情况呢，主要是靠传入的参数来确定的，具体来说，就是由"),n("strong",[t._v("第一个参数的类型")]),t._v("决定的。patch 函数接收两个参数：")]),t._v(" "),n("ol",[n("li",[t._v("如果第一个参数为真实的 DOM 对象（一般来说是我们传入的 el），第二个参数为 VNode，则说明要执行初渲染流程，那么就根据第二个参数，生成真实 DOM，替换第一个 DOM 对象。")]),t._v(" "),n("li",[t._v("如果第一个参数 和 第二个参数都为 VNode，则通过 diff 算法，比较两者 VNode差异，更新真实 DOM。")])]),t._v(" "),n("p",[t._v("下面看一下 patch 函数在"),n("strong",[t._v("初渲染部分")]),t._v("的实现：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 接收两个参数\n * 1. 初渲染：第一个参数为真实的 DOM 对象，第二个参数为 VNode，则根据第二个参数，生成真实 DOM，替换第一个 DOM 对象\n * 2. 更新：第一个参数 和 第二个参数都为 VNode，则比较两者 vnode差异，更新真实 dom\n * @param {Object} oldVnode 一个 VNode 或者是一个真实的 DOM 对象\n * @param {Object} newVnode 新的 VNode\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("patch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("oldVnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newVnode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isRealElement "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldVnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeType\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isRealElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象上有 nodeType 属性，则为真实 DOM")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" elm "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldVnode\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" parentElm "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" elm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取到老节点的父节点，便于后面删除和新增（即替换）操作")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建真实 dom")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" newElm "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElm")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newVnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newElm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先把新 DOM 插入到老DOM的后面，然后再删除老DOM，这样可以保证新DOM替换了老DOM")]),t._v("\n        parentElm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newElm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" elm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nextSibling"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        parentElm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("elm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return newElm")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进行 diff 算法，更新")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("patch 函数在初渲染流程主要分为以下几步：")]),t._v(" "),n("ol",[n("li",[t._v("通过 parentNode 属性，获取到真实 DOM（也就是第一个参数）的父节点")]),t._v(" "),n("li",[t._v("通过 createElm 函数，将 VNode 转化为真实 DOM")]),t._v(" "),n("li",[t._v("将生成的真实 DOM 插入到旧的 DOM 之后")]),t._v(" "),n("li",[t._v("将旧的 DOM 从父节点中删除，完成新旧 DOM 的替换")])]),t._v(" "),n("p",[t._v("后面两步主要是为了保证新的 DOM 一定会取代原有的旧的 DOM 在文档中的位置。")]),t._v(" "),n("h2",{attrs:{id:"_2、createelm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、createelm"}},[t._v("#")]),t._v(" 2、createElm")]),t._v(" "),n("p",[t._v("这个函数是 Vue2 中真正负责将 VNode 转化为真实 DOM 的函数。其只接收一个参数，就是虚拟 DOM。在内部对虚拟 DOM 进行"),n("strong",[t._v("递归")]),t._v("操作，通过 VNode 节点的 tag 属性，来判断该节点是文本节点还是元素节点。如果是文本节点，则使用 JavaScript 原生的 createTextNode 方法来生成文本节点。如果是元素节点，就调用 JavaScript 原生的 createElement 方法，生成一个元素节点。然后再递归遍历该 VNode 的所有子节点，递归执行 createElm 方法，最后将传入的 VNode 转化为真实 DOM 返回。")]),t._v(" "),n("p",[t._v("createElm 函数源码：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建真实DOM")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElm")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("vnode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 VNode 解构")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" tag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vnode\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" tag "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传入的是标签，文本节点的tag为undefined")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建元素")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ！！！把真实 DOM 挂载到 虚拟DOM 上！便于后续更新，比如修改了属性，就可以直接找到真实的dom进行更新")]),t._v("\n        vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新元素属性")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("patchProps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建子DOM")]),t._v("\n        children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 挂载子DOM")]),t._v("\n            vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElm")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTextNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" vnode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);