// 为了引入.vue文件时，ts能够正确解析它的类型。否则引入.vue文件会报错
declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{},{},any>;
    export default component
}