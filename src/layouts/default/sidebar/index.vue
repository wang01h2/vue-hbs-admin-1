<template>
  <a-layout-sider
    v-model:collapsed="getCollapsed"
    :class="getSidebarClass"
    :trigger="null"
    collapsible
    collapsed-width="56"
    :theme="theme.getTheme"
  >
    <logo :show-title="!getCollapsed" />
    <Menu />
  </a-layout-sider>
</template>

<script setup lang="ts">
import { useCollapsed } from '../useCollapsed'

import Logo from './components/Logo.vue'
import Menu from './components/Menu.vue'
import { themeStore } from '~/stores/modules/theme'
const theme = themeStore()
const { getCollapsed } = useCollapsed()
const getSidebarClass = computed(() => {
  return ['layout-sidebar', 'layout-sidebar--fixed']
})
</script>

<style scoped lang="less">
.layout-sidebar {
  &--fixed {
    @apply z-20 fixed top-0 bottom-0 left-0;
  }
}
</style>
