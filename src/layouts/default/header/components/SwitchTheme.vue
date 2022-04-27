<template>
  <div>
    <a-switch :checked="state.theme === 'dark'" checked-children="Dark" un-checked-children="Light" @change="changeTheme" />
  </div>
</template>

<script setup lang="ts">
import type { MenuTheme } from 'ant-design-vue'
import { themeStore } from '~/stores/modules/theme'
const theme = themeStore()
const state = reactive({
  theme: 'dark' as MenuTheme,
  selectedKeys: ['1'],
  openKeys: ['sub1']
})
const changeTheme = (checked: boolean) => {
  state.theme = checked ? 'dark' : 'light'
  // 保存到pinia中
  theme.setTheme(state.theme)
}
</script>
