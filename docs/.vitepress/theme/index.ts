import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ManualHome from './ManualHome.vue'
import SupportFab from './SupportFab.vue'
import Layout from './Layout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ManualHome', ManualHome)
    app.component('SupportFab', SupportFab)
  },
  Layout,
} satisfies Theme
