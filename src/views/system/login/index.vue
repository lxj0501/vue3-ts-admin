<script setup lang="ts">
import { useGlobalSetting } from '@/hooks/setting';
import { Input, Form, FormItem, InputPassword, Button } from 'ant-design-vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { reactive } from 'vue';
import { useUserStore } from '@/store/features/user';

interface LoginFormState {
  username: string;
  password: string;
}

const { title } = useGlobalSetting();
const loginFormState = reactive<LoginFormState>({ username: '', password: '' });
const userStore = useUserStore();

const onFinish = async (e: LoginFormState) => {
  await userStore.login(e);
};
</script>

<template>
  <div class="pt-[110px]">
    <div class="h-[44px] text-center leading-[44px] mb-[40px]">
      <img
        src="@/assets/images/vue.svg"
        alt=""
        class="inline h-[44px] mr-[16px] align-top"
      />
      <span class="text-[33px] font-[600] text-[rgba(0,0,0,0.88)]">
        {{ title }}
      </span>
    </div>

    <div class="min-w-[260px] w-[368px] m-[0_auto]">
      <Form :model="loginFormState" @finish="onFinish">
        <FormItem
          name="username"
          :rules="[{ required: true, message: '请输入用户名' }]"
        >
          <Input
            size="large"
            style="border-radius: 8px"
            placeholder="用户名"
            v-model:value="loginFormState.username"
          >
            <template #prefix>
              <UserOutlined class="!text-primary" />
            </template>
          </Input>
        </FormItem>

        <FormItem
          name="password"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <InputPassword
            size="large"
            style="border-radius: 8px"
            placeholder="密码"
            v-model:value="loginFormState.password"
          >
            <template #prefix>
              <LockOutlined class="!text-primary" />
            </template>
          </InputPassword>
        </FormItem>

        <FormItem>
          <Button
            class="w-full !rounded-[8px]"
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
</template>

<style lang="scss" scoped></style>
