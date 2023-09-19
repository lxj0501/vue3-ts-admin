<script setup lang="ts">
import AppLogo from './components/AppLogo.vue'
import LoginForm from './components/LoginForm.vue'
</script>

<template>
  <div
    class="h-full w-full min-h-[800px] pt-[96px] bg-center bg-no-repeat bg-cover md:bg-[url('/assets/images/background/bg-login.jpg')]"
  >
    <div class="flex justify-center items-center">
      <AppLogo />
      <LoginForm />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
