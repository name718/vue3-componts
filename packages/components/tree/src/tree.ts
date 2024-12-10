import { ExtractPropTypes, PropType } from 'vue';

type Key = string | number;
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
  isLeaf: boolean;
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
  }
} as const;

export type TreeNodeProps = Partial<ExtractPropTypes<typeof treeNodeProps>>;
type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>;
