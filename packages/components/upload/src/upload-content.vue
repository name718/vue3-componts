<template>
  <div
    :class="[bem.b()]"
    @click="handleClick"
  >
    <template v-if="drag">
      <uploadDragger @file="uploadFiles">
        <slot />
      </uploadDragger>
    </template>
    <template v-else>
      <slot />
    </template>

    <input
      ref="inputRef"
      :name="name"
      type="file"
      :accept="accept"
      :multiple="multiple"
      @change="handleChange"
    >
  </div>
</template>
<script setup lang="ts">
  import { createNamespace } from '@mjt/utils/create'
  import { uploadContentProps } from './upload-content'
  import { genId, UploadRawFile } from './upload'
  import { ref } from 'vue'
  import { httpRequest } from './ajax'
  import uploadDragger from './upload-dragger.vue'

  const bem = createNamespace('upload')
  const inputRef = ref<HTMLInputElement | null>(null)
  const props = defineProps(uploadContentProps)
  defineOptions({
    name: 'UploadContent',
    inheritAttrs: false
  })
  const upload = async (file: UploadRawFile) => {
    inputRef.value!.value = ''
    const result = await props.beforeUpload?.(file)
    if (result === false) return props.onRemove?.(file)
    const { method, name, headers, action, data } = props
    httpRequest({
      method,
      name,
      headers,
      action,
      data,
      file,
      onError: (err) => {
        props.onError?.(err, file)
        props.onRemove?.(file)
      },
      onSuccess: (res) => {
        props.onSuccess?.(res, file)
        props.onRemove?.(file)
      },
      onProgress: (e) => {
        props.onProgress?.(e, file)
      }
    })
  }
  const uploadFiles = (files: FileList) => {
    for (let i = 0; i < files!.length; i++) {
      const rawFile = files![i] as UploadRawFile
      rawFile.uid = genId()
      props.onStart?.(rawFile)
      upload(rawFile)
    }
  }
  const handleChange = (e: Event) => {
    const files = (e.target as HTMLInputElement).files!
    uploadFiles(files)
  }
  const handleClick = () => {
    inputRef.value!.value = ''
    inputRef.value?.click()
  }
</script>
