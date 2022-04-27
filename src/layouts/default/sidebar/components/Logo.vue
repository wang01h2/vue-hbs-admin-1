<template>
  <div class="logo">
    <img class="max-h-full" :src="LogoUrl" alt="Logo">
    <span v-show="showTitle" :class="theme.getTheme === 'dark'?'ml-8px text-white text-base font-bold':'ml-8px text-black text-base font-bold'">HbsAdmin</span>
  </div>
</template>

<script setup lang="ts">
import LogoUrl from '~/assets/logo.png'
import { themeStore } from '~/stores/modules/theme'
const theme = themeStore()
defineProps({
  showTitle: { type: Boolean, default: true }
})
</script>

<style scoped lang="less">
.logo {
  @apply flex items-center p-10px w-full;

  height: var(--header-height);
}
</style>
