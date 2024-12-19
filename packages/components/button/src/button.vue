<template>
  <button
    :class="[
      bem.b(),
      bem.m(type),
      bem.m(size),
      bem.is('round', round),
      bem.is('loading', loading),
      bem.is('disabled', disabled)
    ]"
    :type="nativeType"
    :disabled="disabled || loading"
  >
    <z-icon>
      <LoadingComponent v-if="loading"></LoadingComponent>
    </z-icon>
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
  import { createNamespace } from '@mjt/utils/create'
  import { buttonEmits, buttonProps } from './button'
  import LoadingComponent from '@mjt/components/internal-icon/Loading'
  import ZIcon from '@mjt/components/icon'
  defineOptions({
    name: 'z-button'
  })
  const bem = createNamespace('button')
  const props = defineProps(buttonProps)
  const emit = defineEmits(buttonEmits)
</script>
