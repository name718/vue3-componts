<template>
  <UploadContent v-bind="uploadContentProps">
    <slot />
  </UploadContent>
</template>

<script lang="ts" setup>
  import UploadContent from './upload-content.vue'
  import { UploadContentProps } from './upload-content'
  import {
    uploadProps,
    genId,
    UploadRawFile,
    UploadFiles,
    UploadFile
  } from './upload'
  import { computed, ref, watch } from 'vue'
  const props = defineProps(uploadProps)
  defineOptions({
    name: 'ZUpload'
  })
  const emit = defineEmits({})
  const uploadFiles = ref<UploadFiles>(props.FileList)

  watch(uploadFiles, (val) => {
    emit('update:file-list', val)
  })
  const findFile = (rawFile: UploadRawFile) => {
    return uploadFiles.value.find((file) => file.uid === rawFile.uid)
  }
  const uploadContentProps = computed<UploadContentProps>(() => ({
    ...props,
    onStart: (rawFile) => {
      console.log('start')
      const uploadFile: UploadFile = {
        uid: rawFile.uid,
        name: rawFile.name,
        status: 'uploading',
        url: '',
        percentage: 0,
        raw: rawFile,
        size: rawFile.size
      }
      uploadFile.url = new URL(window.URL.createObjectURL(rawFile)).href
      uploadFiles.value = [...uploadFiles.value, uploadFile]
      props.onChange?.(uploadFile)
    },
    onProgress: (e, rawFile) => {
      console.log('progress')
      const uploadFile = findFile(rawFile)!
      uploadFile.status = 'uploading'
      uploadFile.percentage = e.percent
      props.onProgress?.(e, uploadFile, uploadFiles.value)
    },
    onRemove: async (rawFile) => {
      console.log('remove')
      const uploadFile = findFile(rawFile)!
      const r = await props.beforeRemove?.(uploadFile, uploadFiles.value)
      if (r === false) return
      uploadFiles.value = uploadFiles.value.filter(
        (file) => file.uid !== rawFile.uid
      )
      props.onRemove?.(uploadFile, uploadFiles.value)
    },
    onError: (err, rawFile) => {
      console.log('error')
      const uploadFile = findFile(rawFile)!
      uploadFile.status = 'failed'
      uploadFiles.value = uploadFiles.value.filter(
        (file) => file.uid !== rawFile.uid
      )
      props.onError?.(err, uploadFile, uploadFiles.value)
    },
    onSuccess: (res, rawFile) => {
      console.log('success')
      const uploadFile = findFile(rawFile)!
      uploadFile.status = 'success'
      props.onSuccess?.(res, uploadFile, uploadFiles.value)
    }
  }))
</script>
