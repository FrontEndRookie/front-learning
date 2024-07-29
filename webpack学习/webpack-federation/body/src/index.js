import Header from './body'
import('nav/nav').then(res=>{
    import('header/header').then(res2=>{
        const div = document.createElement('div')
        div.appendChild(res.default())
        div.appendChild(res2.default())
        div.appendChild(Header())
        document.body.appendChild(div)
    })
   
})

