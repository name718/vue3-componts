<template>
  <div
    :class="[
      bem.b(),
      bem.is('success', validateState === 'success'),
      bem.is('error', validateState === 'error')
    ]"
  >
    <label :class="bem.e('label')">
      <slot name="label">{{ label }}</slot>
      <!-- 如果父组件没有提供具名插槽 label 的内容，那么会显示 label 
      变量的值作为默认内容。 -->
    </label>
    <div :class="bem.e('content')">
      <slot></slot>
      <div :class="bem.e('error')">
        <slot name="error">{{ validateMessage }}</slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { createNamespace } from '@mjt/utils/create'
  import { defineProps, provide, ref, toRefs, reactive } from 'vue'
  import {
    formItemProps,
    FormItemValidateState,
    formItemContextKey,
    FormItemContext
  } from './form-item'
  const bem = createNamespace('form-item')
  const props = defineProps(formItemProps)
  defineOptions({
    name: 'z-form-item'
  })

  const validateState = ref<FormItemValidateState>('')
  const validateMessage = ref('校验失败')

  const validate: FormItemContext['validate'] = async (
    trigger: string,
    callback?
  ) => {
    console.log('validate', trigger)
  }
  const context: FormItemContext = reactive({
    ...toRefs(props),
    validate
  })
  provide(formItemContextKey, context)
</script>
