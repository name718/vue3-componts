<template>
  <form :class="bem.b()">
    <slot></slot>
  </form>
</template>
<script setup lang="ts">
  import { provide } from 'vue'
  import { formProps, formContextKey, FormContext } from './form'
  import { createNamespace } from '@mjt/utils/create'
  import { FormItemContext } from './form-item'
  import { Values } from 'async-validator'

  const bem = createNamespace('form')
  defineOptions({
    name: 'z-form'
  })
  const props = defineProps(formProps)
  const fields: FormItemContext[] = []
  const validate = async (
    callback?: (valid: boolean, fields: Values) => void
  ) => {
    let errors: Values = {}
    for (const field of fields) {
      try {
        await field.validate('')
      } catch (error) {
        errors = {
          ...errors,
          ...(error as Values).fields
        }
      }
    }
    if (Object.keys(errors).length) {
      callback?.(false, errors)
    } else {
      if (callback) {
        callback(true, {})
      } else {
        return Promise.reject(errors)
      }
    }
  }

  const addField: FormContext['addField'] = (context) => {
    fields.push(context)
  }
  const context = {
    ...props,
    addField
  }
  provide(formContextKey, context)
  defineExpose({
    validate
  })
</script>
