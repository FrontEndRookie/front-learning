function getComponent() {
  return import ('lodash').then(({ default: _ }) => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'webpack'], '');
    return element;
  });
}
getComponent().then((element)=>{
    document.body.appendChild(element)
})

function getComponents(){
    return import (/*webpackChunkName:'math',webpackPrefetch:true*/'./testESM').then(({default:esm})=>{ //prefetch 预加载功能。在页面打开后网络空闲状态下加载该js
                                                                                                        //preload类似懒加载
        console.log(esm())
    })
}
document.getElementById('async').addEventListener('click',()=>{
    getComponents().then(()=>{
    })
})
