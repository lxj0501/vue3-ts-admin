<script setup lang="ts">
import IconSun from '@/components/icons/IconSun.vue'
import IconMoon from '@/components/icons/IconMoon.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import { Switch } from 'ant-design-vue'
import useTheme from '@/hooks/setting/useTheme'
import { useAppStore } from '@/store/features/app'

const { isLight, toggleTheme } = useTheme()
const {
  projectSetting: {
    appSetting: { title, logo, github }
  }
} = useAppStore()
</script>

<template>
  <div class="hidden lg:block">
    <div class="mr-[256px] flex flex-col items-center">
      <div class="h-[60px]">
        <img :src="logo" alt="" class="inline h-[60px] mr-[16px] align-top" />
        <span class="text-h3 text-primaryText-dark">
          {{ title }}
        </span>
      </div>

      <div class="text-title text-primaryText-dark mt-[28px]">
        一个开箱即用的 vue3 脚手架
      </div>

      <div class="w-[240px] mt-[52px] flex justify-between">
        <IconSun v-if="isLight" class="stroke-[#7FBA7A] fill-[#7FBA7A]" />
        <IconMoon v-else />
        <Switch :checked="isLight" @click="toggleTheme"></Switch>
        <a :href="github" target="_blank">
          <IconGithub class="stroke-primaryText-dark" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
