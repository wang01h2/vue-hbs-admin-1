import { defineStore } from 'pinia'
import { EnumCache } from '~/enums'
import localCache from '~/utils/cache'

interface SwitchTheme {
  theme: string
}

export const themeStore = defineStore('theme', {
  state: (): SwitchTheme => ({
    theme: 'dark'
  }),

  getters: {
    getTheme(): string {
      return this.theme
    }
  },

  actions: {
    setTheme(theme: string | undefined): void {
      this.theme = theme || ''
      localCache.setCache(EnumCache.THEME_KEY, theme)
    }
  }
})
