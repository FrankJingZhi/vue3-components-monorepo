# 图标

w-ui 推荐使用 xicons 作为图标库

```
$ yarn add @vicons/ionicons5
```

## 使用图标

- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目中使用。

<script setup lang="ts">
import {AddCircle} from '@vicons/ionicons5'
</script>

<WIcon color="red" size="40">
  <AddCircle/>
</WIcon>

## API

### Icon Props

| 名称  | 类型             | 默认值    | 说明     |
| ----- | ---------------- | --------- | -------- |
| color | string           | undefined | 图标颜色 |
| size  | number \| string | undefined | 图片大小 |
