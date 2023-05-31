import { useAppStore } from '@/store/features/app'
import { computed, unref } from 'vue'

export default function useTheme() {
  const appStore = useAppStore()

  const isLight = computed(() => appStore.theme === 'light')

  const toggleTheme = () => {
    appStore.setTheme(!unref(isLight))
  }

  return { isLight, toggleTheme }
}
