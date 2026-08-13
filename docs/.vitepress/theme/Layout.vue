<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import ImageLightbox from './ImageLightbox.vue'
import LangToggle from './LangToggle.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <LangToggle />
    </template>
  </Layout>
  <ImageLightbox />
</template>
