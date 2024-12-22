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
          :type="type"
          v-bind="attrs"
          :class="bem.e('inner')"
        />
        <span
          v-if="slots.sufixIcon"
          :class="bem.e('suffix')"
        >
          <slot name="sufixIcon"></slot>
        </span>
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
  import { useAttrs, useSlots } from 'vue'
  import { inputEmits, inputProps } from './input'

  const bem = createNamespace('input')
  const props = defineProps(inputProps)
  const emit = defineEmits(inputEmits)
  defineOptions({
    name: 'z-input',
    inheritAttrs: false
  })
  const slots = useSlots()
  const attrs = useAttrs()
</script>
