<template>
  <div
    @dragover.prevent="onDragOver"
    @dragleave.prevent="isOver = false"
    @drop="onDrop"
  >
    <slot />
  </div>
</template>
<script lang="ts" setup>
  import { createNamespace } from '@nova-ui/utils/create'
  import { ref } from 'vue'
  const bem = createNamespace('upload-dragger')
  const isOver = ref(false)
  const emit = defineEmits({})
  const onDragOver = (e: DragEvent) => {
    isOver.value = true
    emit('file', Array.from(e.dataTransfer!.files))
    console.log('dragover', e.dataTransfer!.files)
  }
  const onDrop = (e: DragEvent) => {
    e.stopPropagation()
  }
</script>
