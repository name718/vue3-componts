<template>
  <form :class="bem.b()">
    <slot></slot>
  </form>
</template>
<script setup lang="ts">
  import { provide } from 'vue'
  import { formProps, formContextKey } from './form'
  import { createNamespace } from '@mjt/utils/create'

  const bem = createNamespace('form')
  defineOptions({
    name: 'z-form'
  })
  const props = defineProps(formProps)
  const context = {
    ...props
  }
  provide(formContextKey, context)
</script>
