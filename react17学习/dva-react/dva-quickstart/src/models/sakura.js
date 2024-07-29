export default {
    namespace: 'sakura' ,
    state: {
        isShow:true
    },
    subscriptions: {
        setup({ dispatch, history }) {
            console.log('chishuhua')
        }
    },
    //异步
    effects:{
        *getCinemaList(action, { call, put}){
            // console.log(obj)
            yield call()
        }
    }
}