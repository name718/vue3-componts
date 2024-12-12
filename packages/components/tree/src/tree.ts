import { ExtractPropTypes, PropType } from 'vue';

export type Key = string | number;
export interface TreeNode extends Required<TreeOptions> {
  level: number;
  rawNode: TreeOptions;
  children: TreeNode[];
  isLeaf: boolean;
}
export interface TreeOptions {
  label?: Key;
  key?: Key;
  children?: TreeOptions[];
  isLeaf?: boolean;
  [key: string]: unknown;
}
export const treeProps = {
  data: {
    type: Array as PropType<TreeOptions[]>,
    default: () => []
  },
  defaultCheckedKeys: {
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
  }
} as const;

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
  }
} as const;

export const treeNodeEmitts = {
  toggle: (node: TreeNode) => node,
  select: (node: TreeNode) => node
};

export const treeEmitts = {
  'update:selectedKeys': (keys: Key[]) => keys
};

export type TreeNodeProps = Partial<ExtractPropTypes<typeof treeNodeProps>>;
type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>;
