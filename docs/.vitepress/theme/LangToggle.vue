<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute, useRouter } from 'vitepress'

const { lang } = useData()
const route = useRoute()
const router = useRouter()

const isEn = computed(() => lang.value === 'en-US')
const label = computed(() => (isEn.value ? '切换中文' : 'Switch to English'))

function switchLanguage() {
  const current = route.path
  if (current.startsWith('/en/')) {
    localStorage.setItem('noke-nya-lang', 'zh')
    const target = current.replace(/^\/en/, '') || '/'
    if (target !== current) router.go(target)
  } else {
    localStorage.setItem('noke-nya-lang', 'en')
    const target = '/en' + (current === '/' ? '/' : current)
    if (target !== current) router.go(target)
  }
}
</script>

<template>
  <button
    class="lang-toggle"
    type="button"
    role="switch"
    :aria-checked="isEn"
    :aria-label="label"
    :title="label"
    @click="switchLanguage"
  >
    <span class="lang-toggle__track">
      <span class="lang-toggle__knob" :class="{ 'is-en': isEn }" aria-hidden="true"></span>
      <span class="lang-toggle__opt" :class="{ 'is-active': !isEn }">中</span>
      <span class="lang-toggle__opt" :class="{ 'is-active': isEn }">EN</span>
    </span>
  </button>
</template>
