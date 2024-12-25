<template>
  <div :class="[bem.b()]">
    <div :class="bem.e('group')">
      <div
        v-if="slots.prepend"
        :class="bem.be('groud', 'prepend')"
      >
        <slot name="prepend"></slot>
      </div>
      <div :class="[bem.e('wrapper')]">
        <span
          v-if="slots.prefixIcon"
          :class="bem.e('prefix')"
        >
          <slot name="prefixIcon"></slot>
        </span>
        <input
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          v-bind="attrs"
          ref="inputRef"
          @input="handleInput"
          @change="handleChange"
          @blur="handleBlur"
          @focus="handleFocus"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :class="bem.e('inner')"
        />
        <span
          v-if="slots.sufixIcon"
          :class="bem.e('suffix')"
        >
          <slot name="sufixIcon"></slot>
        </span>
        <z-icon
          v-if="showPwdVisible"
          style="line-height: 16px; font-weight: bold"
          @click="handlePasswordVisible"
        >
          X
        </z-icon>
        <z-icon
          v-if="showClear"
          style="line-height: 16px; font-weight: bold"
          @click="clear"
        >
          X
        </z-icon>
      </div>
      <div
        v-if="slots.append"
        :class="bem.be('groud', 'append')"
      >
        <slot name="append"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { createNamespace } from '@mjt/utils/create'
  import {
    useAttrs,
    useSlots,
    watch,
    ref,
    onMounted,
    nextTick,
    computed,
    inject
  } from 'vue'
  import { formItemContextKey } from '../../form/src/form-item'
  import { inputEmits, inputProps } from './input'

  const formItemContext = inject(formItemContextKey, null)

  const bem = createNamespace('input')
  const props = defineProps(inputProps)
  const emit = defineEmits(inputEmits)
  defineOptions({
    name: 'z-input',
    inheritAttrs: false
  })
  const slots = useSlots()
  const attrs = useAttrs()
  const inputRef = ref<HTMLInputElement>()
  const passwordVisible = ref(false)
  const focus = async () => {
    await nextTick()
    if (inputRef.value) {
      inputRef.value.focus()
    }
  }
  const handlePasswordVisible = () => {
    passwordVisible.value = !passwordVisible.value
    focus()
  }
  watch(
    () => props.modelValue,
    () => {
      formItemContext?.validate('change').catch(() => {})
      setNativeInputValue()
    }
  )
  function setNativeInputValue() {
    if (inputRef.value) {
      inputRef.value.value = String(props.modelValue)
    }
  }
  function handleInput(e: Event) {
    const value = (e.target as HTMLInputElement).value
    emit('update:modelValue', value)
    emit('input', value)
  }
  function handleChange(e: Event) {
    const value = (e.target as HTMLInputElement).value
    emit('change', value)
  }
  function handleBlur(e: FocusEvent) {
    formItemContext?.validate('blur').catch(() => {})
    emit('blur', e)
  }
  function handleFocus(e: FocusEvent) {
    emit('focus', e)
  }
  const showClear = computed(() => {
    return (
      props.clearable && !props.disabled && !props.readonly && props.modelValue
    )
  })
  const showPwdVisible = computed(() => {
    return (
      props.modelValue &&
      props.showPassword &&
      !props.disabled &&
      !props.readonly
    )
  })
  const clear = () => {
    emit('update:modelValue', '')
    emit('input', '')
    emit('clear')
    focus()
  }
  onMounted(() => {
    setNativeInputValue()
  })
</script>
