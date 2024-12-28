<template>
  <UploadContent v-bind="uploadContentProps">
    <slot></slot>
  </UploadContent>
</template>

<script lang="ts" setup>
  import UploadContent from './upload-content.vue'
  import { UploadContentProps } from './upload-content'
  import { uploadProps, genId, UploadRawFile } from './upload'
  import { computed } from 'vue'
  const props = defineProps(uploadProps)
  defineOptions({
    name: 'z-upload'
  })

  const uploadContentProps = computed<UploadContentProps>(() => ({
    ...props,
    onStart: (rawFile) => {
      console.log('start')
    },
    onProgress: (e) => {
      console.log('progress')
    },
    onRemove: (rawFile) => {
      console.log('remove')
    },
    onError: (err) => {
      console.log('error')
    },
    onSuccess: (res) => {
      console.log('success')
    }
  }))
</script>
