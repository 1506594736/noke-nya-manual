<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import { X, ZoomIn } from 'lucide-vue-next'

const { lang } = useData()
const isEn = computed(() => lang.value === 'en-US')
const fallbackAlt = computed(() => (isEn.value ? 'Manual image' : '说明书图片'))
const closeLabel = computed(() => (isEn.value ? 'Close image' : '关闭大图'))

const isOpen = ref(false)
const imageSrc = ref('')
const imageAlt = ref('')
const closeButton = ref<HTMLButtonElement | null>(null)
let previousOverflow = ''

function isZoomableImage(target: EventTarget | null): target is HTMLImageElement {
  return target instanceof HTMLImageElement
    && Boolean(target.closest('.VPDoc'))
    && !target.closest('.image-lightbox')
    && !target.closest('a')
    && !target.classList.contains('no-lightbox')
}

function openLightbox(event: MouseEvent) {
  if (!isZoomableImage(event.target)) return
  imageSrc.value = event.target.currentSrc || event.target.src
  imageAlt.value = event.target.alt || fallbackAlt.value
  isOpen.value = true
  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  nextTick(() => closeButton.value?.focus())
}

function closeLightbox() {
  isOpen.value = false
  document.body.style.overflow = previousOverflow
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && isOpen.value) closeLightbox()
}

onMounted(() => {
  document.addEventListener('click', openLightbox)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', openLightbox)
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = previousOverflow
})
</script>

<template>
  <Teleport to="body">
    <Transition name="lightbox-fade">
      <div v-if="isOpen" class="image-lightbox" role="dialog" aria-modal="true" :aria-label="imageAlt" @click.self="closeLightbox">
        <button ref="closeButton" class="image-lightbox__close" type="button" :aria-label="closeLabel" @click="closeLightbox">
          <X :size="24" />
        </button>
        <div class="image-lightbox__content">
          <img :src="imageSrc" :alt="imageAlt" />
          <p><ZoomIn :size="16" />{{ imageAlt }}</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
