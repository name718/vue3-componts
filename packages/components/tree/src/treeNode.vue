<template>
    <div :class="bem.b()">
        <div :class="bem.e('content')" :style="{ paddingLeft: `${node.level * 16}px` }">
            <span :class="[bem.e('expand-icon'), { expanded: props.expanded && !node.isLeaf }]">
                <z-icon size="25">
                    <Switcher />
                </z-icon>
            </span>
            <span>{{ props.node?.label }}</span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { treeNodeProps } from './tree';
import { createNamespace } from '@mjt/utils/create';
import Switcher from './icon/Switcher';
import ZIcon from '@mjt/components/icon'

const props = defineProps(treeNodeProps)
const bem = createNamespace('tree-node')
</script>