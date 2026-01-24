import { withInstall } from '@nova-ui/utils/with-install';
import _Ztree from './src/tree.vue';
const Tree = withInstall(_Ztree);

export default Tree;
declare module 'vue' {
  export interface GlobalComponents {
    ZTree: typeof Tree;
  }
}

export * from './src/tree';
