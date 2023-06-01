<script setup lang="ts">
import MenuFooter from '@/components/MenuFooter.vue'
import { Drawer } from 'ant-design-vue'
import { ref } from 'vue'
const visible = ref(false)

const showDrawer = () => {
  visible.value = true
}

const closeDrawer = () => {
  visible.value = false
}
</script>

<template>
  <div
    class="w-[32px] h-[32px] flex flex-col justify-center"
    @click="showDrawer"
  >
    <div
      class="w-[32px] h-[2px] rounded-[1px] mb-[6px] bg-darkMain dark:bg-theme"
    ></div>
    <div class="w-[32px] h-[2px] rounded-[1px] bg-darkMain dark:bg-theme"></div>
  </div>

  <Drawer
    :visible="visible"
    placement="left"
    @close="closeDrawer"
    :content-wrapper-style="{ width: '256px' }"
    :closable="false"
    :footer-style="{ height: '72px', padding: 0, border: 'none' }"
    :body-style="{ padding: 0 }"
  >
    <div class="h-full w-full !bg-theme dark:!bg-theme-dark"></div>
    <template #footer>
      <MenuFooter
        class="w-full h-full px-[40px] !bg-theme dark:!bg-theme-dark"
      />
    </template>
  </Drawer>
</template>

<style lang="scss"></style>
