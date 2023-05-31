<script setup lang="ts">
import { useUserStore } from '@/store/features/user'
import { Button, Form, FormItem, Input } from 'ant-design-vue'
import { reactive } from 'vue'

interface LoginFormState {
  username: string
  password: string
}

const loginFormState = reactive<LoginFormState>({ username: '', password: '' })
const userStore = useUserStore()

const onFinish = async (e: LoginFormState) => {
  await userStore.login(e)
}
</script>

<template>
  <div
    class="w-full md:w-[464px] md:rounded-[40px] md:bg-theme dark:md:bg-[#242731]"
  >
    <div
      class="pt-[40px] w-[310px] md:pt-[48px] md:pb-[65px] md:w-[363px] mx-auto"
    >
      <div class="text-h3 text-primaryText dark:text-primaryText-dark">
        登录
      </div>

      <div class="mt-[24px] flex">
        <div class="text-caption2 text-captionText">没有账号?</div>
        <div class="text-caption2 text-primary-main ml-[43px]">创建账号</div>
      </div>

      <Form :model="loginFormState" @finish="onFinish">
        <div class="mt-[42px] mb-[16px] text-caption2 text-captionText">
          用户名
        </div>

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

      <div class="mt-[24px] text-caption2 text-captionText">其他方式</div>

      <div class="mt-[24px] h-[56px]"></div>

      <!-- </div> -->
    </div>
  </div>
</template>

<style lang="scss"></style>
