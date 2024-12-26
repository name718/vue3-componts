import { withInstall } from '@mjt/utils/with-install'
import _Upload from './src/upload.vue'
const Upload = withInstall(_Upload)

export default Upload

declare module 'vue' {
  export interface GlobalComponents {
    ZUpload: typeof _Upload
  }
}
export * from './src/upload'
export type { UploadProps } from './src/upload'
