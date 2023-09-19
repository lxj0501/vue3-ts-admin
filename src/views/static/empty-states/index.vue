<script setup lang="ts">
import { Button, Result } from 'ant-design-vue'
// import { ResultStatusType } from 'ant-design-vue/lib/result'

// const props = defineProps<{ status: ResultStatusType }>()
</script>

<template>
  <Result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <Button type="primary">Back Home</Button>
    </template>
  </Result>
</template>

<style lang="scss"></style>
