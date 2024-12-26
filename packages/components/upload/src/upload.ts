import { ExtractPropTypes, h, PropType } from 'vue'

export interface UploadFile {
  uid?: number
  name: string
  url?: string
  percentage?: number
  raw?: File
  size?: number
  status: string
}
export type UploadFiles = UploadFile[]

export const baseProps = {
  FileList: {
    type: Array as PropType<UploadFiles>,
    default: () => [] as const // as const 会将对象的属性变为只读
  },
  action: {
    type: String,
    required: ''
  },
  multiple: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: 'file'
  },
  accept: {
    type: String,
    default: ''
  },
  // 上传的额外参数
  method: {
    type: String,
    default: 'post'
  },
  headers: {
    type: Object,
    default: () => ({})
  },
  data: {
    type: Object,
    default: () => ({})
  }
} as const

// export type BaseProps = Partial<ExtractPropTypes<typeof baseProps>>

export type UploadRawFile = File & { uid: number }
export type UploadProgressEvent = ProgressEvent & { percent: number }
const NOOP = () => {}
export const uploadProps = {
  ...baseProps,
  onPreview: {
    type: Function as PropType<(file: UploadFile) => void>,
    default: NOOP
  }, // 预览图片
  beforeUpload: {
    type: Function as PropType<
      (file: UploadRawFile) => boolean | Promise<boolean>
    >,
    default: NOOP
  }, // 上传前的钩子
  onChange: {
    type: Function as PropType<(file: UploadFile) => void>,
    default: NOOP
  }, // 文件状态改变时的钩子
  beforeRemove: {
    type: Function as PropType<
      (file: UploadFile, uploadFile: UploadFile) => boolean | Promise<boolean>
    >,
    default: NOOP
  }, // 删除文件之前的钩子
  onRemove: {
    type: Function as PropType<(file: UploadFile) => void>,
    default: NOOP
  }, // 文件移除时的钩子
  onProgress: {
    type: Function as PropType<
      (
        file: UploadProgressEvent,
        uploadFile: UploadFile,
        uploadFiles: UploadFiles
      ) => void
    >,
    default: NOOP
  }, // 上传进度回调
  onSuccess: {
    type: Function as PropType<
      (reponse: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void
    >,
    default: NOOP
  }, // 上传成功回调
  onError: {
    type: Function as PropType<
      (error: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void
    >,
    default: NOOP
  } // 上传失败回调
} as const
export type UploadProps = Partial<ExtractPropTypes<typeof uploadProps>>
