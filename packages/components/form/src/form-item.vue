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
  import {
    inject,
    defineProps,
    provide,
    ref,
    toRefs,
    reactive,
    computed
  } from 'vue'
  import {
    formItemProps,
    FormItemValidateState,
    formItemContextKey,
    FormItemContext,
    FormItemRule,
    Arrayable
  } from './form-item'
  import { formContextKey } from './form'
  import { rules } from 'eslint-plugin-vue'
  import AsyncValidator from 'async-validator'

  const bem = createNamespace('form-item')
  const props = defineProps(formItemProps)
  defineOptions({
    name: 'z-form-item'
  })
  const formContext = inject(formContextKey)
  const validateState = ref<FormItemValidateState>('')
  const validateMessage = ref('')
  const converArray = (
    rules: Arrayable<FormItemRule> | undefined
  ): FormItemRule[] => {
    return rules ? (Array.isArray(rules) ? rules : [rules]) : []
  }
  const _rules = computed(() => {
    const rules: FormItemRule[] = converArray(props.rules)
    const formRules = formContext?.rules
    if (formRules && props.prop) {
      const formPropRules = formRules[props.prop]
      if (formPropRules) {
        rules.push(...converArray(formPropRules))
      }
    }
    return rules
  })

  const getRuleFiltered = (trigger: string) => {
    return _rules.value.filter((rule) => {
      if (!rule.trigger || !trigger) return true
      if (Array.isArray(rule.trigger)) {
        return rule.trigger.includes(trigger)
      } else {
        return rule.trigger === trigger
      }
    })
  }
  const onValidateSuccess = () => {
    validateState.value = 'success'
    validateMessage.value = ''
  }
  const onValidateFailed = (err) => {
    validateState.value = 'error'
    const { errors } = err
    validateMessage.value = errors ? errors[0].message : 'error'
  }
  const validate: FormItemContext['validate'] = async (
    trigger: string,
    callback?
  ) => {
    const rules = getRuleFiltered(trigger)
    const modelName = props.prop
    const validator = new AsyncValidator({
      [modelName]: rules
    })
    validator
      .validate({
        [modelName]: modelName[modelName]
      })
      .then(() => {
        onValidateSuccess()
      })
      .catch((error) => {
        onValidateFailed(error)
      })
    console.log('validate', trigger, rules, formContext?.model, props.prop)
  }
  const context: FormItemContext = reactive({
    ...toRefs(props),
    validate
  })
  provide(formItemContextKey, context)
</script>
