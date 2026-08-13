<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { LifeBuoy } from 'lucide-vue-next'

const { lang } = useData()
const isEn = computed(() => lang.value === 'en-US')
const label = computed(() => (isEn.value ? 'Contact support' : '联系支持'))
const href = computed(() => (isEn.value ? '/en/support/' : '/support/'))
</script>

<template>
  <a class="support-fab" :href="href" :aria-label="label" :title="label">
    <LifeBuoy :size="20" aria-hidden="true" />
    <span>{{ label }}</span>
  </a>
</template>
