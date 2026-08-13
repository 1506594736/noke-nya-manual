import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Neko Nya 说明书',
  description: 'Neko Nya Slime 追踪器中文使用说明、固件与故障排查。',
  // 关闭 cleanUrls：OSS 静态托管按路径精确匹配文件，
  // 无后缀链接会导致 404，且 OSS 对无后缀文件不返回 text/html。
  cleanUrls: false,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#0b8f87' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    // 按浏览器语言自动跳转中英文（尊重用户手动选择）
    [
      'script',
      {},
      `(function () {
        try {
          var pref = localStorage.getItem('noke-nya-lang');
          if (pref) return; // 用户手动选过语言，不再自动跳转
          var lang = (navigator.language || '').toLowerCase();
          var enBrowser = lang.indexOf('en') === 0;
          var onEn = location.pathname.indexOf('/en/') === 0;
          if (enBrowser && !onEn) {
            location.replace('/en' + location.pathname + location.hash);
          } else if (!enBrowser && onEn) {
            location.replace((location.pathname.replace(/^\\/en/, '') || '/') + location.hash);
          }
        } catch (e) {}
      })();`,
    ],
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Neko Nya 说明书',
      description: 'Neko Nya Slime 追踪器中文使用说明、固件与故障排查。',
      themeConfig: {
        nav: [
          { text: '快速开始', link: '/guide/quick-start' },
          { text: '常见问题', link: '/info/faq' },
          { text: '故障排查', link: '/support/troubleshooting' },
          { text: '下载', link: '/support/downloads' },
          { text: '联系支持', link: '/support/' },
        ],
        sidebar: [
          {
            text: '产品信息',
            items: [
              { text: '套餐与兼容性', link: '/info/product' },
              { text: '常见问题', link: '/info/faq' },
            ],
          },
          {
            text: '开始使用',
            items: [
              { text: '说明书首页', link: '/' },
              { text: '快速开始', link: '/guide/quick-start' },
              { text: '组装与佩戴', link: '/guide/assembly' },
              { text: '充电与按键', link: '/guide/charging-controls' },
              { text: '新增或更换追踪器', link: '/guide/add-tracker' },
            ],
          },
          {
            text: '软件与设备',
            items: [
              { text: 'SlimeVR 软件使用', link: '/software/' },
              { text: 'VRChat 配置', link: '/software/vrchat' },
              { text: '固件更新', link: '/device/firmware' },
              { text: '设备校准', link: '/device/calibration' },
              { text: '磁力计', link: '/device/magnetometer' },
            ],
          },
          {
            text: '帮助与支持',
            items: [
              { text: '故障排查', link: '/support/troubleshooting' },
              { text: '购买与加购', link: '/support/buy' },
              { text: '维修与寄修', link: '/support/repair' },
              { text: '下载中心', link: '/support/downloads' },
              { text: '联系支持', link: '/support/' },
            ],
          },
        ],
        outline: {
          level: [2, 3],
          label: '本页内容',
        },
        lastUpdated: { text: '最后更新' },
        docFooter: { prev: '上一页', next: '下一页' },
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '目录',
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换浅色模式',
        darkModeSwitchTitle: '切换深色模式',
        footer: {
          message: 'Neko Nya Slime 追踪器中文说明书',
          copyright: '内容持续完善中',
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Neko Nya Manual',
      description: 'Neko Nya Slime tracker manual — setup, wearing, software, firmware and troubleshooting.',
      themeConfig: {
        nav: [
          { text: 'Quick Start', link: '/en/guide/quick-start' },
          { text: 'FAQ', link: '/en/info/faq' },
          { text: 'Troubleshooting', link: '/en/support/troubleshooting' },
          { text: 'Downloads', link: '/en/support/downloads' },
          { text: 'Support', link: '/en/support/' },
        ],
        sidebar: [
          {
            text: 'Product Info',
            items: [
              { text: 'Packages & Compatibility', link: '/en/info/product' },
              { text: 'FAQ', link: '/en/info/faq' },
            ],
          },
          {
            text: 'Getting Started',
            items: [
              { text: 'Manual Home', link: '/en/' },
              { text: 'Quick Start', link: '/en/guide/quick-start' },
              { text: 'Assembly & Wearing', link: '/en/guide/assembly' },
              { text: 'Charging & Buttons', link: '/en/guide/charging-controls' },
              { text: 'Add or Replace Trackers', link: '/en/guide/add-tracker' },
            ],
          },
          {
            text: 'Software & Device',
            items: [
              { text: 'SlimeVR Software', link: '/en/software/' },
              { text: 'VRChat Setup', link: '/en/software/vrchat' },
              { text: 'Firmware Update', link: '/en/device/firmware' },
              { text: 'Device Calibration', link: '/en/device/calibration' },
              { text: 'Magnetometer', link: '/en/device/magnetometer' },
            ],
          },
          {
            text: 'Help & Support',
            items: [
              { text: 'Troubleshooting', link: '/en/support/troubleshooting' },
              { text: 'Buy & Add-on', link: '/en/support/buy' },
              { text: 'Repair & RMA', link: '/en/support/repair' },
              { text: 'Downloads', link: '/en/support/downloads' },
              { text: 'Contact Support', link: '/en/support/' },
            ],
          },
        ],
        outline: {
          level: [2, 3],
          label: 'On this page',
        },
        lastUpdated: { text: 'Last updated' },
        docFooter: { prev: 'Previous', next: 'Next' },
        returnToTopLabel: 'Back to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light mode',
        darkModeSwitchTitle: 'Switch to dark mode',
        footer: {
          message: 'Neko Nya Slime Tracker Manual',
          copyright: 'Under continuous improvement',
        },
      },
    },
  },
  themeConfig: {
    logo: '/brand-mark.svg',
    siteTitle: 'Neko Nya',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索说明书', buttonAriaLabel: '搜索说明书' },
              modal: {
                noResultsText: '没有找到相关内容',
                resetButtonTitle: '清除搜索',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
              },
            },
          },
          en: {
            translations: {
              button: { buttonText: 'Search manual', buttonAriaLabel: 'Search manual' },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear search',
                footer: { selectText: 'to select', navigateText: 'to navigate', closeText: 'to close' },
              },
            },
          },
        },
      },
    },
  },
})
