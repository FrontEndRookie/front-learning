<template>
    <Btn @on-click="getNum">
        <template #default>
            按钮slots
        </template>
    </Btn>
</template>
  
<script setup lang='ts'>
import { h, } from 'vue';
type Props = {
    text?: string
}

const Btn = (props: Props, ctx: any) => {
    return h('div', {
        class: 'p-2.5 text-white bg-green-500 rounded shadow-lg w-20 text-center inline m-1',
        onClick: () => {
            ctx.emit('on-click', 123)
        }
    }, ctx.slots.default())
}
 
const getNum = (num: number) => {
    console.log(num);
}
</script>