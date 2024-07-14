module.exports = {
    title: 'happyblog',
    description: '基于 vuepress 的简易博客平台',
    themeConfig: {
        nav: [{ text: "首页", link: "/" },
        { text: "mini-Vue2 文档", link: "/miniVue2/" },
        { text: "性能优化实践", link: "/performance/" },
        { text: "前端杂谈", link: "/chat/" },
        { text: "GitHub", link: "https://github.com/Nwu23787/mini-Vue2" },
        ],
        sidebar: {
            // '/miniVue2/': [
            //     ['1', 'Vue2 中如何实现响应式数据的监听'],
            //     ['path', '作为前端也需要知道的路径知识'],
            //     ['stream', 'node核心模块-stream'],
            // ],
            '/miniVue2/': [
                // ['', '1'],
                {
                    title: 'mini-Vue2 文档',
                    collabsable: false,
                    children: [
                        { title: "1、Vue2 中如何实现响应式数据的监听", path: "/miniVue2/1" },
                        { title: "2、render 函数和 h 函数", path: "/miniVue2/2" },
                        { title: "3、Vue 2 中如何将模版解析为 AST 语法树", path: "/miniVue2/3" },
                        { title: "4、AST语法树如何转化为render函数", path: "/miniVue2/4" },
                        { title: "5、虚拟DOM如何转化为真实DOM", path: "/miniVue2/5" },
                        { title: "6、Vue2 依赖收集和视图同步更新原理", path: "/miniVue2/6" },
                        { title: "7、$nextTick 实现原理", path: "/miniVue2/7" },
                    ],
                },
            ],
        },
    }
}
