module.exports = {
    title: 'Nova UI',
    description: '基于 Vue 3 的高质量组件库',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'keywords', content: 'Vue3, 组件库, UI, TypeScript, Nova UI' }],
        ['meta', { name: 'author', content: 'name718' }]
    ],
    themeConfig: {
        logo: '/logo.svg',
        siteTitle: 'Nova UI',
        lastUpdated: {
            text: '最后更新时间',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },
        outline: {
            level: [2, 3],
            label: '页面导航'
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        darkModeSwitchLabel: '主题',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        editLink: {
            pattern: 'https://github.com/name718/vue3-componts/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页'
        },
        footer: {
            message: 'Released under the ISC License.',
            copyright: 'Copyright © 2024-present name718'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/name718/vue3-componts' }
        ],
        nav: [
            {
                text: '组件',
                link: '/component/introduction',
                activeMatch: '/component/'
            },
            {
                text: '更新日志',
                link: '/changelog'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/name718/vue3-componts'
            }
        ],
        sidebar: {
            '/component/': [
                {
                    text: '开发指南',
                    items: [
                        { text: '介绍', link: '/component/introduction' },
                        { text: '快速上手', link: '/component/quickstart' },
                        { text: '贡献指南', link: '/component/contributing' }
                    ]
                },
                {
                    text: '基础组件',
                    items: [
                        { text: 'Button 按钮', link: '/component/button' },
                        { text: 'Icon 图标', link: '/component/icon' }
                    ]
                },
                {
                    text: '表单组件',
                    items: [
                        { text: 'Input 输入框', link: '/component/input' },
                        { text: 'Checkbox 复选框', link: '/component/checkbox' },
                        { text: 'Form 表单', link: '/component/form' }
                    ]
                },
                {
                    text: '数据展示',
                    items: [
                        { text: 'Tree 树形控件', link: '/component/tree' },
                        { text: 'Calendar 日历', link: '/component/calendar' }
                    ]
                },
                {
                    text: '高级组件',
                    items: [
                        { text: 'Upload 上传', link: '/component/upload' },
                        { text: 'VirtualList 虚拟列表', link: '/component/virtual-list' },
                        { text: 'VirtualScrollList 虚拟滚动', link: '/component/virtual-scroll-list' }
                    ]
                }
            ]
        },
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档'
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换',
                            closeText: '关闭'
                        }
                    }
                }
            }
        }
    }
};
