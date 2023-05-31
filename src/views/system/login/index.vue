<script setup lang="ts">
import { useAppStore } from '@/store/features/app'
import { useUserStore } from '@/store/features/user'
import { Button, Form, FormItem, Input } from 'ant-design-vue'
import { reactive } from 'vue'

interface LoginFormState {
  username: string
  password: string
}

const {
  projectSetting: {
    appSetting: { title, logo }
  }
} = useAppStore()

const loginFormState = reactive<LoginFormState>({ username: '', password: '' })
const userStore = useUserStore()

const onFinish = async (e: LoginFormState) => {
  await userStore.login(e)
}
</script>

<template>
  <div
    class="h-full w-full pt-[96px] bg-center bg-no-repeat bg-cover md:bg-[url('/assets/images/background/bg-login.jpg')]"
  >
    <div class="pt-[40px] w-[310px] mx-auto">
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
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
