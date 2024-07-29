import { defineStore } from 'pinia'
type User = {
    name:string,
    age:number
}
const login = ():Promise<User>=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({name:'faker',age:26})
        },2000)
    })
}
export const useTestStore = defineStore('sakura',{
    state:()=>{
        return {
            name:'hide on bush',
            user:<User>{}
        }
    },
    getters:{
        setName():string{
            return this.user.name + 'will win' + this.setNameT
        },
        setNameT():string{
            return this.name+'will win'
        }
    },
    actions:{
        changeName(){
            this.name = 'faker'
        },
       async getLogin(){
            let res = await login()
            this.user = res
        }
    }
})