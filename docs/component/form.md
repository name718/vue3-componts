# Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。

## 基础用法

最基础的表单包括各种输入表单项，比如 input、checkbox 等。

<demo>

```vue
<template>
  <z-form :model="form" label-width="80px">
    <z-form-item label="用户名">
      <z-input v-model="form.username" placeholder="请输入用户名" />
    </z-form-item>
    
    <z-form-item label="密码">
      <z-input
        v-model="form.password"
        type="password"
        placeholder="请输入密码"
      />
    </z-form-item>
    
    <z-form-item label="记住我">
      <z-checkbox v-model="form.remember">记住密码</z-checkbox>
    </z-form-item>
    
    <z-form-item>
      <z-button type="primary" @click="handleSubmit">登录</z-button>
      <z-button @click="handleReset">重置</z-button>
    </z-form-item>
  </z-form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  username: '',
  password: '',
  remember: false
})

const handleSubmit = () => {
  console.log('提交表单:', form)
}

const handleReset = () => {
  form.username = ''
  form.password = ''
  form.remember = false
}
</script>
```

</demo>

## 表单验证

通过 `rules` 属性传入约定的验证规则，并将 Form-Item 的 `prop` 属性设置为需校验的字段名。

<demo>

```vue
<template>
  <z-form :model="form" :rules="rules" label-width="100px">
    <z-form-item label="用户名" prop="username">
      <z-input v-model="form.username" placeholder="请输入用户名" />
    </z-form-item>
    
    <z-form-item label="邮箱" prop="email">
      <z-input v-model="form.email" placeholder="请输入邮箱" />
    </z-form-item>
    
    <z-form-item label="年龄" prop="age">
      <z-input v-model="form.age" type="number" placeholder="请输入年龄" />
    </z-form-item>
    
    <z-form-item>
      <z-button type="primary" @click="handleSubmit">提交</z-button>
    </z-form-item>
  </z-form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  username: '',
  email: '',
  age: ''
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
  ],
  age: [
    { required: true, message: '请输入年龄', trigger: 'blur' },
    { type: 'number', message: '年龄必须为数字值', trigger: 'blur' }
  ]
}

const handleSubmit = () => {
  console.log('提交表单:', form)
}
</script>
```

</demo>

## 自定义校验规则

可以自定义校验规则来完成更复杂的校验。

<demo>

```vue
<template>
  <z-form :model="form" :rules="rules" label-width="100px">
    <z-form-item label="密码" prop="password">
      <z-input
        v-model="form.password"
        type="password"
        placeholder="请输入密码"
      />
    </z-form-item>
    
    <z-form-item label="确认密码" prop="confirmPassword">
      <z-input
        v-model="form.confirmPassword"
        type="password"
        placeholder="请再次输入密码"
      />
    </z-form-item>
    
    <z-form-item>
      <z-button type="primary" @click="handleSubmit">提交</z-button>
    </z-form-item>
  </z-form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  password: '',
  confirmPassword: ''
})

const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    if (form.confirmPassword !== '') {
      // 验证确认密码
    }
    callback()
  }
}

const validateConfirmPass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== form.password) {
    callback(new Error('两次输入密码不一致!'))
  } else {
    callback()
  }
}

const rules = {
  password: [
    { validator: validatePass, trigger: 'blur' }
  ],
  confirmPassword: [
    { validator: validateConfirmPass, trigger: 'blur' }
  ]
}

const handleSubmit = () => {
  console.log('提交表单:', form)
}
</script>
```

</demo>

## 隐藏错误信息

通过 `show-message` 属性可以控制是否显示错误信息。

<demo>

```vue
<template>
  <z-form :model="form" :rules="rules" :show-message="false" label-width="100px">
    <z-form-item label="用户名" prop="username">
      <z-input v-model="form.username" placeholder="请输入用户名" />
    </z-form-item>
    
    <z-form-item>
      <z-button type="primary" @click="handleSubmit">提交</z-button>
    </z-form-item>
  </z-form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  username: ''
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ]
}

const handleSubmit = () => {
  console.log('提交表单:', form)
}
</script>
```

</demo>

## API

### Form Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model | 表单数据对象 | object | - |
| rules | 表单验证规则 | object | - |
| show-message | 是否显示校验错误信息 | boolean | true |

### Form-Item Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 标签文本 | string | - |
| prop | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string | - |
| rules | 表单验证规则 | object / array | - |
| show-message | 是否显示校验错误信息 | boolean | true |
| error | 表单域验证错误信息 | string | - |

### Form-Item Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 表单项的内容 |
| label | 标签文本的内容 |

## 验证规则

验证规则基于 [async-validator](https://github.com/yiminghe/async-validator)，支持以下规则类型：

- `required`: 必填字段
- `type`: 数据类型（string, number, boolean, email, url 等）
- `min` / `max`: 字符串长度或数字大小范围
- `pattern`: 正则表达式验证
- `validator`: 自定义验证函数
- `trigger`: 触发验证的时机（blur, change）
