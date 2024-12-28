import {
  baseProps,
  UploadProgressEvent,
  uploadProps,
  UploadRawFile
} from './upload'
import { PropType, ExtractPropTypes } from 'vue'
const NOOP = () => {}
export const uploadContentProps = {
  ...baseProps,
  beforeUpload: uploadProps['beforeUpload'],
  onStart: {
    type: Function as PropType<(rawFile: UploadRawFile) => void>,
    default: NOOP
  },
  onProgress: {
    type: Function as PropType<
      (e: UploadProgressEvent, rawFile: UploadRawFile) => void
    >,
    default: NOOP
  },
  onRemove: {
    type: Function as PropType<(rawFile: UploadRawFile) => void>,
    default: NOOP
  },
  onError: {
    type: Function as PropType<(error: any, rawFile: UploadRawFile) => void>,
    default: NOOP
  },
  onSuccess: {
    type: Function as PropType<(res: any, rawFile: UploadRawFile) => void>,
    default: NOOP
  }
} as const

export type UploadContentProps = ExtractPropTypes<typeof uploadContentProps>