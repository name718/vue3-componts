import { ExtractPropTypes, PropType } from 'vue';

type Key = string | number;
export interface TreeNode extends Required<TreeOptions> {
  level: number;
  rawNode: TreeOptions;
}
export interface TreeOptions {
  label?: Key;
  key?: Key;
  children?: TreeOptions[];
  [key: string]: unknown;
}
export const treeProps = {
  data: {
    type: Array as PropType<TreeOptions[]>,
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

type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>;
