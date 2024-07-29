type valueObserve<T> = {
    value:T,
    on<K extends string & keyof T>(
        eventName:`${K}`,
        cb:(oldValue:T[K],nameValue:T[K])=>void
    )
}
export default function reactive<T>(data:T):valueObserve<T>{
    let selfDefineData = <T>{}
    let handler = <{[key in keyof T]:Function[]}>{}
    for(let key in data){
        Object.defineProperty(selfDefineData,key,{
            get(){
                return data[key]
            },
            set(newValue){
                handler[key].forEach(cb=>cb(data[key], newValue))
                data[key] = newValue
            }
        })
    }
    function on (key,cb){
        if(!handler[key]){
            handler[key] = []
        }
        handler[key].push(cb)
    }
    return {
        value:selfDefineData,
        on
    }
}