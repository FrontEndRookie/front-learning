import { domFragmentDeal } from './compile.js'
import observe from './observe.js'
 export default class MyVue {
    constructor(options){
        this.data = options.data
        this.el = options.el
        //数据劫持
        observe(this.data, this);
        //处理dom
        this.dealDom()
        //挂载
        this.domMount()
    }
    dealDom(){
        // console.log(this.el)
        this.dom = domFragmentDeal(document.getElementById(this.el), this);
    }
    domMount(){
        document.getElementById(this.el).appendChild(this.dom);
    }
  }