import { ExtractPropTypes, InjectionKey, PropType, SetupContext } from 'vue'

export type Key = string | number
export interface TreeNode extends Required<TreeOptions> {
  level: number
  rawNode: TreeOptions
  children: TreeNode[]
  isLeaf: boolean
  parentKey: Key | undefined
}
export interface TreeOptions {
  label?: Key
  key?: Key
  children?: TreeOptions[]
  isLeaf?: boolean
  disabled?: boolean
  [key: string]: unknown
}
export const treeProps = {
  data: {
    type: Array as PropType<TreeOptions[]>,
    default: () => []
  },
  defaultExpandedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },
  labelFiled: {
    type: String,
    default: 'label'
  },
  keyFiled: {
    type: String,
    default: 'key'
  },
  childrenFiled: {
    type: String,
    default: 'children'
  },
  onLoad: Function as PropType<(node: TreeOptions) => Promise<TreeOptions[]>>,
  selectedKeys: {
    type: Array as PropType<Key[]>
  },
  selectable: {
    type: Boolean,
    default: true
  },
  multiple: {
    type: Boolean,
    default: false
  },
  defaultCheckedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },
  showCheckbox: {
    type: Boolean,
    default: false
  }
} as const

export const treeNodeProps = {
  node: {
    type: Object as PropType<TreeNode>,
    required: true
  },
  expanded: {
    type: Boolean,
    required: true
  },
  loadingKeys: {
    type: Object as PropType<Set<Key>>,
    required: true
  },
  selectedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  indeterminate: {
    type: Boolean,
    default: false
  }
} as const

export const treeNodeEmitts = {
  toggle: (node: TreeNode) => node,
  select: (node: TreeNode) => node,
  check: (node: TreeNode, value: boolean) => Boolean
}

export const treeEmitts = {
  'update:selectedKeys': (keys: Key[]) => keys
}

export interface TreeContext {
  slots: SetupContext['slots']
  //   emit: SetupContext<typeof treeEmitts>['emit'];
}

export type TreeNodeProps = Partial<ExtractPropTypes<typeof treeNodeProps>>
type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>

export const treeInjectKey: InjectionKey<TreeContext> = Symbol()

export const treeNodeContentProps = {
  node: {
    type: Object as PropType<TreeNode>,
    required: true
  }
}
