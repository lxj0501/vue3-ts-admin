<script setup lang="ts">
import IconGithubFill from '@/components/icons/IconGithubFill.vue'
import IconAlipay from '@/components/icons/IconAlipay.vue'
import IconTwitter from '@/components/icons/IconTwitter.vue'
import IconApple from '@/components/icons/IconApple.vue'
import IconGoogle from '@/components/icons/IconGoogle.vue'
import { useUserStore } from '@/store/features/user'
import { Button, Form, FormItem, Input, message } from 'ant-design-vue'
import { reactive, ref } from 'vue'

interface LoginFormState {
  username: string
  password: string
}

const loginFormState = reactive<LoginFormState>({ username: '', password: '' })
const userStore = useUserStore()
const isLoading = ref(false)

const onFinish = async (e: LoginFormState) => {
  try {
    isLoading.value = true
    await userStore.login(e, 'none')
  } catch (error) {
    message.error('登录失败！')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="relative w-full md:w-[464px] h-[689px]">
    <div
      class="hidden md:block absolute left-[13.5px] top-[89px] w-[437px] h-[600px] rounded-[40px] bg-[#14161B] blur-[12px] opacity-[80%] dark:opacity-[40%]"
    ></div>

    <div
      class="absolute w-full md:w-[464px] md:rounded-[40px] md:bg-theme-light dark:md:bg-[#242731]"
    >
      <div
        class="pt-[40px] w-[310px] md:pt-[48px] md:pb-[65px] md:w-[363px] mx-auto"
      >
        <div class="text-h3 text-text-color dark:text-text-color-inverse">
          登录
        </div>

        <div class="mt-[24px] flex">
          <div class="text-caption2 text-caption-color">没有账号?</div>
          <div class="text-caption2 text-primary-color ml-[43px]">创建账号</div>
        </div>

        <Form :model="loginFormState" @finish="onFinish">
          <div class="mt-[42px] mb-[16px] text-caption2 text-caption-color">
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
              class="!bg-[rgba(228,228,228,0.25)] dark:!bg-[rgba(228,228,228,0.10)] text-text-color dark:text-text-color-inverse"
              v-model:value="loginFormState.username"
              :disabled="isLoading"
            >
            </Input>
          </FormItem>

          <div class="mb-[16px] text-caption2 text-caption-color">密码</div>

          <FormItem
            class="mb-[24px]"
            name="password"
            :rules="[{ required: true, message: '请输入密码' }]"
          >
            <Input
              size="large"
              style="border-radius: 8px; height: 56px; border: none"
              type="password"
              class="!bg-[rgba(228,228,228,0.25)] dark:!bg-[rgba(228,228,228,0.10)] text-text-color dark:text-text-color-inverse"
              v-model:value="loginFormState.password"
              :disabled="isLoading"
            >
            </Input>
          </FormItem>

          <FormItem>
            <Button
              class="w-full !rounded-[16px] !h-[56px]"
              size="large"
              type="primary"
              html-type="submit"
              :loading="isLoading"
            >
              登录
            </Button>
          </FormItem>
        </Form>

        <div class="mt-[24px] text-caption2 text-caption-color">其他方式</div>

        <div class="mt-[24px] h-[56px] flex justify-around">
          <IconGithubFill
            class="fill-caption-color cursor-pointer hover:fill-primary-color"
          />
          <IconAlipay
            class="fill-caption-color cursor-pointer hover:fill-primary-color"
          />
          <IconTwitter
            class="fill-caption-color stroke-caption-color cursor-pointer hover:fill-primary-color hover:stroke-primary-color"
          />
          <IconApple
            class="fill-caption-color stroke-caption-color cursor-pointer hover:fill-primary-color hover:stroke-primary-color"
          />
          <IconGoogle
            class="fill-caption-color cursor-pointer hover:fill-primary-color"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
