<script setup lang="ts">
import IconSun from '@/components/icons/IconSun.vue'
import IconMoon from '@/components/icons/IconMoon.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import { Switch } from 'ant-design-vue'
import useTheme from '@/hooks/setting/useTheme'
import { useAppStore } from '@/store/features/app'

const props = defineProps<{ isMenuCollapse?: boolean }>()

const { isLight, toggleTheme } = useTheme()
const {
  projectSetting: {
    appSetting: { github }
  }
} = useAppStore()
</script>

<template>
  <div v-if="props.isMenuCollapse" class="flex justify-center items-center">
    <Switch :checked="isLight" @click="toggleTheme" />
  </div>
  <div v-else class="flex justify-between items-center">
    <IconSun v-if="isLight" class="stroke-[#7FBA7A] fill-[#7FBA7A]" />
    <IconMoon v-else />
    <Switch :checked="isLight" @click="toggleTheme" />
    <a :href="github" target="_blank">
      <IconGithub class="stroke-white" />
    </a>
  </div>
</template>

<style lang="scss"></style>
