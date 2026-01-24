import { withInstall } from '@nova-ui/utils/with-install'
import _ZVirtualScrollList from './src/virtual-list'
const VirtualList = withInstall(_ZVirtualScrollList)

export default VirtualList
declare module 'vue' {
  export interface GlobalComponents {
    ZVirtualScrollList: typeof _ZVirtualScrollList
  }
}

export type { VirtualProps } from './src/props'
