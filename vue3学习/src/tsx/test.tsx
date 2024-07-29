import {ref} from 'vue'
let v = ref<string>('')
let show = ref<boolean>(true)
let arrays = ref<number[]>([1,2,3])
type Props = {
    title:string
}
const renderDom = (props:Props,ctx:any)=>{
    return  (
        <div>
            <div>{props.title}</div>
            <div onClick={()=>{sendEmit(ctx)}}>emit</div>
            <div v-model={v.value}></div>
            <div v-show={show.value}>{v.value}</div>
            {/* <div v-if={show.value}>{v.value}</div> v-if不支持 需要通过js来控制*/}
            { show.value ? <div>if true</div>:<div>if false</div>}
            {/* v-for 也不支持 通过js使用map遍历 */}
            {arrays.value.map(item=>{return <div>{item}</div>})}
            {/* v-bind v-on 不支持 v-on用 onclick={} */}
        </div>
    )   
}
const sendEmit = (ctx:any) => {
    ctx.emit('name',123)
}
export default renderDom