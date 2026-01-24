# Upload 上传

通过点击或者拖拽上传文件。

## 基础用法

通过 `action` 属性设置上传的地址。

<demo>

```vue
<template>
  <z-upload
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-success="handleSuccess"
    :on-error="handleError"
  >
    <z-button type="primary">点击上传</z-button>
  </z-upload>
</template>

<script setup>
const handleSuccess = (response, file, fileList) => {
  console.log('上传成功', response, file, fileList)
}

const handleError = (error, file, fileList) => {
  console.log('上传失败', error, file, fileList)
}
</script>
```

</demo>

## 拖拽上传

通过 `drag` 属性开启拖拽上传。

<demo>

```vue
<template>
  <z-upload
    action="https://jsonplaceholder.typicode.com/posts/"
    drag
    :on-success="handleSuccess"
  >
    <div class="upload-drag-content">
      <p>将文件拖到此处，或点击上传</p>
    </div>
  </z-upload>
</template>

<script setup>
const handleSuccess = (response, file, fileList) => {
  console.log('上传成功', response)
}
</script>

<style scoped>
.upload-drag-content {
  padding: 40px;
  text-align: center;
  color: #999;
}
</style>
```

</demo>

## 多文件上传

通过 `multiple` 属性开启多文件上传。

<demo>

```vue
<template>
  <z-upload
    action="https://jsonplaceholder.typicode.com/posts/"
    multiple
    :on-change="handleChange"
  >
    <z-button type="primary">选择多个文件</z-button>
  </z-upload>
</template>

<script setup>
const handleChange = (file, fileList) => {
  console.log('文件列表变化', fileList)
}
</script>
```

</demo>

## 文件类型限制

通过 `accept` 属性限制上传文件的类型。

<demo>

```vue
<template>
  <div class="upload-demo">
    <z-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      accept="image/*"
    >
      <z-button type="primary">只能上传图片</z-button>
    </z-upload>
    
    <z-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      accept=".pdf,.doc,.docx"
    >
      <z-button type="primary">只能上传文档</z-button>
    </z-upload>
  </div>
</template>

<style scoped>
.upload-demo {
  display: flex;
  gap: 12px;
}
</style>
```

</demo>

## 上传前钩子

通过 `before-upload` 钩子可以在上传前进行文件校验。

<demo>

```vue
<template>
  <z-upload
    action="https://jsonplaceholder.typicode.com/posts/"
    :before-upload="beforeUpload"
  >
    <z-button type="primary">上传文件（限制2MB）</z-button>
  </z-upload>
</template>

<script setup>
const beforeUpload = (file) => {
  const isLt2M = file.size / 1024 / 1024 < 2

  if (!isLt2M) {
    alert('上传文件大小不能超过 2MB!')
    return false
  }
  return true
}
</script>
```

</demo>

## 自定义上传参数

通过 `data` 和 `headers` 属性设置上传时附带的额外参数和请求头。

<demo>

```vue
<template>
  <z-upload
    action="https://jsonplaceholder.typicode.com/posts/"
    :data="uploadData"
    :headers="uploadHeaders"
    :on-success="handleSuccess"
  >
    <z-button type="primary">上传文件</z-button>
  </z-upload>
</template>

<script setup>
const uploadData = {
  userId: '123',
  type: 'avatar'
}

const uploadHeaders = {
  'Authorization': 'Bearer token'
}

const handleSuccess = (response) => {
  console.log('上传成功', response)
}
</script>
```

</demo>

## 上传进度

通过 `on-progress` 钩子监听上传进度。

<demo>

```vue
<template>
  <div>
    <z-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-progress="handleProgress"
    >
      <z-button type="primary">上传文件</z-button>
    </z-upload>
    <p v-if="progress > 0">上传进度：{{ progress }}%</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const progress = ref(0)

const handleProgress = (event, file, fileList) => {
  progress.value = Math.round(event.percent)
}
</script>
```

</demo>

## 删除文件

通过 `before-remove` 和 `on-remove` 钩子处理文件删除。

<demo>

```vue
<template>
  <z-upload
    action="https://jsonplaceholder.typicode.com/posts/"
    :before-remove="beforeRemove"
    :on-remove="handleRemove"
  >
    <z-button type="primary">上传文件</z-button>
  </z-upload>
</template>

<script setup>
const beforeRemove = (file, fileList) => {
  return confirm(`确定移除 ${file.name}？`)
}

const handleRemove = (file, fileList) => {
  console.log('文件已删除', file, fileList)
}
</script>
```

</demo>

## API

### Upload Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| action | 上传的地址（必填） | string | - |
| file-list | 上传的文件列表 | array | [] |
| multiple | 是否支持多选文件 | boolean | false |
| name | 上传的文件字段名 | string | file |
| accept | 接受上传的文件类型 | string | - |
| method | 上传请求的 http method | string | post |
| headers | 设置上传的请求头部 | object | {} |
| data | 上传时附带的额外参数 | object | {} |
| drag | 是否启用拖拽上传 | boolean | false |
| before-upload | 上传文件之前的钩子 | function(file) | - |
| on-preview | 点击文件列表中已上传的文件时的钩子 | function(file) | - |
| on-remove | 文件列表移除文件时的钩子 | function(file, fileList) | - |
| before-remove | 删除文件之前的钩子 | function(file, fileList) | - |
| on-change | 文件状态改变时的钩子 | function(file, fileList) | - |
| on-progress | 文件上传时的钩子 | function(event, file, fileList) | - |
| on-success | 文件上传成功时的钩子 | function(response, file, fileList) | - |
| on-error | 文件上传失败时的钩子 | function(error, file, fileList) | - |

### Upload Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 触发文件选择框的内容 |
| tip | 提示说明文字 |

### Upload 文件对象

```typescript
interface UploadFile {
  uid?: number          // 文件唯一标识
  name: string          // 文件名
  url?: string          // 文件地址
  percentage?: number   // 上传进度
  raw?: File           // 原始文件对象
  size?: number        // 文件大小
  status: string       // 文件状态（ready, uploading, success, fail）
}
```
