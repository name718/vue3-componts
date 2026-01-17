<template>
  <label :class="bem.b()">
    <span :class="bem.e('input')">
      <input
        ref="inputRef"
        v-model="model"
        type="checkbox"
        :disabled="disabled"
        :value="label"
        @change="handleChange"
      >
    </span>
    <span
      v-if="$slots.default || label"
      :class="bem.e('label')"
    >
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script setup lang="ts">
  import { createNamespace } from '@mjt/utils/create'
  import { checkboxEmits, checkboxProps } from './checkbox'
  import { computed, onMounted, watch, ref } from 'vue'

  const bem = createNamespace('checkbox')
  const props = defineProps(checkboxProps)
  const emit = defineEmits(checkboxEmits)
  defineOptions({
    name: 'ZCheckbox'
  })

  const model = computed({
    get() {
      return props.moduleValue
    },
    set(val: string | boolean | number) {
      return emit('update:modelValue', val)
    }
  })
  const inputRef = ref<HTMLInputElement>()
  function indeterminate(value: boolean) {
    inputRef.value!.indeterminate = value
  }

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement
    const value = target.checked ? true : false
    emit('change', value)
  }

  watch(() => props.indeterminate, indeterminate)
  onMounted(() => {
    indeterminate(props.indeterminate)
  })
</script>
