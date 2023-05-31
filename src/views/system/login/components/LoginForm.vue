<script setup lang="ts">
import IconGithubFill from '@/components/icons/IconGithubFill.vue'
import IconAlipay from '@/components/icons/IconAlipay.vue'
import IconTwitter from '@/components/icons/IconTwitter.vue'
import IconApple from '@/components/icons/IconApple.vue'
import IconGoogle from '@/components/icons/IconGoogle.vue'
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
  <div class="relative w-full md:w-[464px] h-[689px]">
    <div
      class="hidden md:block absolute left-[13.5px] top-[89px] w-[437px] h-[600px] rounded-[40px] bg-[#14161B] blur-[12px] opacity-[80%] dark:opacity-[40%]"
    ></div>

    <div
      class="absolute w-full md:w-[464px] md:rounded-[40px] md:bg-theme dark:md:bg-[#242731]"
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
              class="!bg-grey25 dark:!bg-grey10-dark text-primaryText dark:text-primaryText-dark"
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
              type="password"
              class="!bg-grey25 dark:!bg-grey10-dark text-primaryText dark:text-primaryText-dark"
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

        <div class="mt-[24px] h-[56px] flex justify-around">
          <IconGithubFill
            class="fill-captionText cursor-pointer hover:fill-primary-main"
          />
          <IconAlipay
            class="fill-captionText cursor-pointer hover:fill-primary-main"
          />
          <IconTwitter
            class="fill-captionText stroke-captionText cursor-pointer hover:fill-primary-main hover:stroke-primary-main"
          />
          <IconApple
            class="fill-captionText stroke-captionText cursor-pointer hover:fill-primary-main hover:stroke-primary-main"
          />
          <IconGoogle
            class="fill-captionText cursor-pointer hover:fill-primary-main"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
