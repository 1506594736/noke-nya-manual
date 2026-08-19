<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

interface Step {
  path: string
  zh: string
  en: string
}

// 首次使用线性流程：从确认配件到首次校准，一路"下一步"走完
const FLOW: Step[] = [
  { path: '/info/product',        zh: '确认配件',     en: 'Check contents' },
  { path: '/guide/quick-start',   zh: '连接与开机',   en: 'Connect & power on' },
  { path: '/software/',           zh: '配置 SlimeVR', en: 'Configure SlimeVR' },
  { path: '/guide/assembly',      zh: '组装与佩戴',   en: 'Assembly & wearing' },
  { path: '/device/calibration',  zh: '首次校准',     en: 'First calibration' },
]

const { lang } = useData()
const route = useRoute()

const isEn = computed(() => lang.value === 'en-US')

// route.path 在 cleanUrls:false 时可能带 .html，且英文带 /en 前缀，统一归一化
const base = computed(() => {
  let p = route.path.replace(/\.html$/, '')
  if (p.startsWith('/en')) p = p.slice(3) || '/'
  if (p.length > 1) p = p.replace(/\/+$/, '')
  return p
})

const idx = computed(() => FLOW.findIndex((s) => s.path === base.value))
const inFlow = computed(() => idx.value >= 0)
const stepNo = computed(() => (inFlow.value ? idx.value + 1 : 0))
const total = FLOW.length

const prev = computed(() => (idx.value > 0 ? FLOW[idx.value - 1] : null))
const next = computed(() => (idx.value < FLOW.length - 1 ? FLOW[idx.value + 1] : null))

const label = (s: Step) => (isEn.value ? s.en : s.zh)
const link = (s: Step) => (isEn.value ? '/en' + s.path : s.path)

const nav = computed(() => ({
  prev: prev.value ? { text: label(prev.value), href: link(prev.value) } : null,
  next: next.value ? { text: label(next.value), href: link(next.value) } : null,
  hint: isEn.value ? 'Follow these steps in order' : '首次使用请按顺序完成',
  stepLabel: isEn.value ? `Step ${stepNo.value} of ${total}` : `第 ${stepNo.value} 步，共 ${total} 步`,
}))
</script>

<template>
  <div v-if="inFlow" class="linear-guide">
    <div class="linear-guide__head">
      <span class="linear-guide__badge">→</span>
      <span class="linear-guide__title">{{ nav.stepLabel }}</span>
      <span class="linear-guide__hint">{{ nav.hint }}</span>
    </div>
    <div class="linear-guide__btns">
      <a v-if="nav.prev" class="linear-guide__btn linear-guide__btn--prev" :href="nav.prev.href">
        <span class="linear-guide__dir">←</span>
        <span>
          <span class="linear-guide__label">{{ isEn ? 'Previous' : '上一步' }}</span>
          <span class="linear-guide__name">{{ nav.prev.text }}</span>
        </span>
      </a>
      <a v-if="nav.next" class="linear-guide__btn linear-guide__btn--next" :href="nav.next.href">
        <span>
          <span class="linear-guide__label">{{ isEn ? 'Next' : '下一步' }}</span>
          <span class="linear-guide__name">{{ nav.next.text }}</span>
        </span>
        <span class="linear-guide__dir">→</span>
      </a>
      <a v-else-if="nav.prev" class="linear-guide__btn linear-guide__btn--done" href="/">
        <span>
          <span class="linear-guide__label">{{ isEn ? 'Finished' : '已完成' }}</span>
          <span class="linear-guide__name">{{ isEn ? 'Back to home' : '返回首页' }}</span>
        </span>
      </a>
    </div>
  </div>
</template>
