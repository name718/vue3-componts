<template>
  <div>
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
      @click="emitClick"
      @mousedown="emitMousedown"
    >
      <template v-if="iconPlacement === 'left'">
        <z-icon>
          <LoadingComponent v-if="loading"></LoadingComponent>
          <template v-else-if="slots.icon">
            <component :is="slots.icon"></component>
          </template>
        </z-icon>
      </template>
      <slot></slot>
      <template v-if="iconPlacement === 'right'">
        <z-icon>
          <LoadingComponent v-if="loading"></LoadingComponent>
          <template v-else-if="slots.icon">
            <component :is="slots.icon"></component>
          </template>
        </z-icon>
      </template>
    </button>
  </div>
</template>
<script lang="ts" setup>
  import { createNamespace } from '@mjt/utils/create'
  import { buttonEmits, buttonProps } from './button'
  import LoadingComponent from '@mjt/components/internal-icon/Loading'
  import ZIcon from '@mjt/components/icon'
  import { useSlots, type Slots } from 'vue'
  
  defineOptions({
    name: 'z-button',
    inheritAttrs: false // 不支持用户绑定属性
  })
  
  const bem = createNamespace('button')
  const props = defineProps(buttonProps)
  const emit = defineEmits(buttonEmits)

  const slots = useSlots() as Slots & {
    icon?: () => any
  }

  const emitClick = (e: MouseEvent) => {
    emit('click', e)
  }
  const emitMousedown = (e: MouseEvent) => {
    emit('mousedown', e)
  }
</script>
