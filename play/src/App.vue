<!-- <script setup lang="ts">
  import { ref } from 'vue'
  import { AddCircle } from '@vicons/ionicons5'
  import { Key, TreeOptions } from '@nova-ui/components/tree'
  function createData(level = 4, parentKey = ''): any {
    if (!level) return []
    const arr = new Array(6 - level).fill(0)
    return arr.map((_, idx: number) => {
      const key = parentKey + level + idx
      return {
        label: createLabel(level),
        key: key,
        children: createData(level - 1, key)
      }
    })
  }

  function createLabel(level: number): string {
    if (level === 4) return '道生一'
    if (level === 3) return '一生二'
    if (level === 2) return '二生三'
    if (level === 1) return '三生万物'
    return ''
  }
  // function createData() {
  //   return [
  //     {
  //       label: nextLabel(),
  //       key: 1,
  //       isLeaf: false, // 这里修复了 `iSLeal` 为 `isLeaf`
  //     },
  //     {
  //       label: nextLabel(),
  //       key: 2,
  //       isLeaf: false,
  //     },
  //   ]
  // }

  function nextLabel(
    currentLabel?: string | undefined | string | number
  ): string {
    if (!currentLabel) return 'Out of Tao, One is born'
    if (currentLabel === 'Out of Tao, One is born') return 'Out of One, Two'
    if (currentLabel === 'Out of One, Two') return 'Out of Two, Three'
    if (currentLabel === 'Out of Two, Three') {
      return 'Out of Three, the created universe'
    }
    if (currentLabel === 'Out of Three, the created universe') {
      return 'Out of Tao, One is born'
    }
    return ''
  }

  const data = ref(createData())
  // const data = ref<TreeOptions[]>([
  //   {
  //     key: '0',
  //     label: '0',
  //     children: [
  //       {
  //         key: '0-0',
  //         label: '0-0',
  //       },
  //       {
  //         disabled: true,
  //         key: '0-1',
  //         label: '0-1',
  //         children: [
  //           {
  //             key: '0-1-0',
  //             label: '0-1-0',
  //           },
  //           {
  //             key: '0-1-1',
  //             label: '0-1-1',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ])
  // console.log(data)
  function handleLoad(node: TreeOptions) {
    return new Promise<TreeOptions[]>((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            label: nextLabel(node.label),
            key: node.key + nextLabel(node.label),
            isLeaf: false
          }
        ])
      }, 1000)
    })
  }
  const value = ref<Key[]>([])
  const check = ref(true)
  const handleChange = (val: boolean) => {
    console.log(val)
  }
  const handleClick = () => {
    console.log('handleClick')
  }
  const name = ref('')
</script> -->

<!-- <template> -->
<!-- <div> -->
<!-- <z-icon
      :color="'red'"
      :size="17"
    >
      <AddCircle />
    </z-icon>
    <z-icon
      :color="'yellow'"
      :size="17"
    >
      <AddCircle />
    </z-icon>
    {{ value }}
    <z-tree
      :data="data"
      :on-load="handleLoad"
      v-model:selected-keys="value"
      selectable
      show-checkbox
      :default-checked-keys="['40', '41']"
    >
      <template #default="{ node }">{{ node.key }} - {{ node.label }}</template>
    </z-tree>
    <z-checkbox
      v-model="check"
      :disabled="true"
      :indeterminate="true"
      label="节点"
      @change="handleChange"
    ></z-checkbox> -->
<!-- <z-button>按钮</z-button>
    <z-button
      size="medium"
      type="warning"
      @click="handleClick"
    >
      大按钮
    </z-button>
    <z-button :loading="true">loading</z-button>
    <z-button :disabled="true">loading</z-button>
    <z-button :round="true">loading</z-button>
    <z-button>
      <template #icon>
        <z-icon>
          <AddCircle></AddCircle>
        </z-icon>
      </template>
    </z-button> -->
<!-- <z-input v-model:modelValue="name">
      <template #prepend>123</template>
      <template #prefixIcon>
        <z-icon>
          <AddCircle></AddCircle>
        </z-icon>
      </template>
      <template #sufixIcon>
        <z-icon>
          <AddCircle></AddCircle>
        </z-icon>
      </template>
      <template #append>qwe</template>
    </z-input>
  </div> -->
<!-- </template> -->

<!-- <script setup lang="ts">
  import { reactive } from 'vue'

  const state = reactive({
    username: '',
    password: ''
  })
</script>
<template>
  <z-form
    :model="state"
    :rules="{
      username: {
        min: 3,
        message: '用户名长度至少为3个字符',
        trigger: ['blur', 'change']
      }
    }"
  >
    <z-form-item
      prop="username"
      label="用户名"
      :rules="[
        { required: true, message: '请输入用户名', trigger: 'blur' },
        {
          min: 3,
          message: '用户名长度至少为3个字符',
          trigger: ['blur', 'change']
        }
      ]"
    >
      <z-input
        placeholder="请输入用户名"
        :clearable="true"
        v-model="state.username"
      ></z-input>
    </z-form-item>
    <z-form-item prop="password">
      <z-input
        placeholder="请输入密码"
        :show-password="true"
        :clearable="true"
        v-model="state.password"
      ></z-input>
      <template #label>密码</template>
    </z-form-item>
  </z-form>
</template> -->

<!-- <script lang="ts" setup>
  import { UploadRawFile } from '@nova-ui/components/upload'

  const handleBeforeUpload = (fileRaw: UploadRawFile) => {
    console.log('before upload', fileRaw)
    return true
  }
</script>
<template>
  <z-upload
    :multiple="true"
    :before-upload="handleBeforeUpload"
  >
    <z-button>点我上传</z-button>
  </z-upload>
</template> -->
<!-- 
<template>
  <z-calendar v-model="date">
    <template #date-cell="{ data }">
      {{ data }}
    </template>
  </z-calendar>
</template>
<script setup lang="ts">
  import { ref } from 'vue'

  const date = ref(new Date())
</script> -->

<script setup lang="ts">
  import { Random } from 'mockjs'
  import { DefineComponent, ref } from 'vue'
  import Item from './Item.vue'
  const totalCount = 10000

  interface DataType {
    id: number
    name: string
    desc: string
    index: number
  }

  const data: Array<DataType> = []

  let index = 0
  while (index < totalCount) {
    data.push({
      id: index,
      name: Random.cname(),
      desc: Random.csentence(),
      index: index
    })
    index++
  }

  const items = ref(data)
</script>
<template>
  <z-virtual-scroll-list
    :data-sources="items"
    class="virtual-list"
    data-key="id"
    :keep="30"
    :estimate-size="80"
    :data-component="Item as DefineComponent<{}, {}, any>"
  />
</template>
<style lang="scss">
  .virtual-list {
    width: 100%;
    height: 500px;
    overflow-y: scroll;
    border: 3px solid #000;
  }
</style>
