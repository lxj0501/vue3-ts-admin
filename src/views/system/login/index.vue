<script setup lang="ts">
import { useAppStore } from '@/store/features/app'
import { useUserStore } from '@/store/features/user'
import { Button, Form, FormItem, Input, Switch } from 'ant-design-vue'
import { reactive } from 'vue'
import IconSun from '@/components/icons/IconSun.vue'
import IconMoon from '@/components/icons/IconMoon.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import useTheme from '@/hooks/setting/useTheme'

interface LoginFormState {
  username: string
  password: string
}

const {
  projectSetting: {
    appSetting: { title, logo, github }
  }
} = useAppStore()

const loginFormState = reactive<LoginFormState>({ username: '', password: '' })
const userStore = useUserStore()

const onFinish = async (e: LoginFormState) => {
  await userStore.login(e)
}

const { isLight, toggleTheme } = useTheme()
</script>

<template>
  <div
    class="h-full w-full pt-[96px] bg-center bg-no-repeat bg-cover md:bg-[url('/assets/images/background/bg-login.jpg')]"
  >
    <div
      class="w-full md:w-[464px] md:rounded-[40px] md:bg-theme dark:md:bg-[#242731] mx-auto"
    >
      <div
        class="pt-[40px] w-[310px] md:pt-[48px] md:pb-[56px] md:w-[363px] mx-auto"
      >
        <div class="h-[60px]">
          <img :src="logo" alt="" class="inline h-[60px] mr-[16px] align-top" />
          <span class="text-h3 text-primaryText dark:text-primaryText-dark">
            {{ title }}
          </span>
        </div>

        <div class="mt-[42px]">
          <Form :model="loginFormState" @finish="onFinish">
            <div class="mb-[16px] text-caption2 text-captionText">用户名</div>

            <FormItem
              class="mb-[24px]"
              name="username"
              :rules="[{ required: true, message: '请输入用户名' }]"
            >
              <Input
                size="large"
                style="border-radius: 8px; height: 56px; border: none"
                class="!bg-grey25 dark:!bg-grey10-dark"
                v-model:value="loginFormState.username"
              >
              </Input>
            </FormItem>

            <div class="mb-[16px] text-caption2 text-captionText">密码</div>

            <FormItem
              class="mb-[24px]"
              name="password"
              :rules="[{ required: true, message: '请输入密码' }]"
            >
              <Input
                size="large"
                style="border-radius: 8px; height: 56px; border: none"
                class="!bg-grey25 dark:!bg-grey10-dark"
                v-model:value="loginFormState.password"
              >
              </Input>
            </FormItem>

            <FormItem>
              <Button
                class="w-full !rounded-[16px] !h-[56px]"
                size="large"
                type="primary"
                html-type="submit"
              >
                登录
              </Button>
            </FormItem>
          </Form>
        </div>

        <div class="mt-[52px] flex justify-between">
          <IconSun v-if="isLight" class="stroke-[#7FBA7A] fill-[#7FBA7A]" />
          <IconMoon v-else />
          <Switch :checked="isLight" @click="toggleTheme"></Switch>
          <a :href="github" target="_blank">
            <IconGithub
              class="stroke-primaryText dark:stroke-primaryText-dark"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
