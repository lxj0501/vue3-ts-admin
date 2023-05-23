import { useAppStore } from '@/store/features/app';
import { computed, unref } from 'vue';

export default function useMenuSetting() {
  const appStore = useAppStore();

  const isMenuCollapse = computed(() => appStore.getMenuSetting.isCollapse);

  const toggleMenu = () => {
    appStore.setMenuSetting({ isCollapse: !unref(isMenuCollapse) });
  };

  return {
    isMenuCollapse,
    toggleMenu,
  };
}
