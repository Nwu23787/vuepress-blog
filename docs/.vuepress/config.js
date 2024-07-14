module.exports = {
    title: 'Happyblog',
    base: '/vuepress-blog/',
    description: '基于 vuepress 的简易博客平台',
    themeConfig: {
        nav: [{ text: "首页", link: "/" },
        { text: "mini-Vue2 文档", link: "/miniVue2/" },
        { text: "性能优化实践", link: "/performance/" },
        { text: "前端杂谈", link: "/chat/" },
        { text: "GitHub", link: "https://github.com/Nwu23787/mini-Vue2" },
        ],
        sidebar: {
            '/miniVue2/': [
                {
                    title: 'mini-Vue2 文档',
                    collabsable: false,
                    children: [
                        { title: "响应式数据的监听", path: "/miniVue2/1" },
                        { title: "render 函数和 h 函数", path: "/miniVue2/2" },
                        { title: "模版解析为 AST 语法树", path: "/miniVue2/3" },
                        { title: "AST语法树转化为 render 函数", path: "/miniVue2/4" },
                        { title: "虚拟DOM转化为真实DOM", path: "/miniVue2/5" },
                        { title: "依赖收集和视图同步更新", path: "/miniVue2/6" },
                        { title: "$nextTick", path: "/miniVue2/7" },
                        { title: "异步更新", path: "/miniVue2/8" },
                        { title: "数组的依赖收集和更新", path: "/miniVue2/9" },
                        { title: "computed 计算属性", path: "/miniVue2/10" },
                        { title: "watch 侦听器", path: "/miniVue2/11" },
                        { title: "mixin", path: "/miniVue2/12" },
                    ],
                },
            ],
            '/performance/': [
                {
                    title: '性能优化实践',
                    collabsable: false,
                    children: [
                        { title: "仿渐进式图片优化首屏时间", path: "/performance/仿渐进式图片优化首屏时间" },
                    ],
                },
            ],
            '/chat/': [
                {
                    title: '前端杂谈',
                    collabsable: false,
                    children: [
                        { title: "浏览器指纹", path: "/chat/浏览器指纹" },
                        { title: "浏览器中 ESModule 的工作原理", path: "/chat/浏览器中 ESModule 的工作原理" },
                        { title: "浏览器中的事件循环", path: "/chat/浏览器中的事件循环" },
                        { title: "资源提示符", path: "/chat/资源提示符" },
                        { title: "node模块查找策略", path: "/chat/node模块查找策略" },
                    ],
                },
            ],
        },
    },
}
