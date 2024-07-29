import reactive from "./reactive/index.js";
const observer = reactive({
    name:'xxx',
    age:'18'
})
observer.on('name',(oldValue,newValue)=>{
    console.log(1,oldValue,newValue)
})
observer.on('name',(oldValue,newValue)=>{
    console.log(2,oldValue,newValue)
})

setTimeout(()=>{
    observer.value.name="mmm"
})
