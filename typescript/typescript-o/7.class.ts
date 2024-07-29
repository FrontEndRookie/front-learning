class Faker {
    //ts中必须要构造器外再声明一次类型
    public name:string
    private age:number
    protected hobby:string
    static s12:string
    constructor(name:string,age:number,hobby:string){
        this.name = name
        this.age = age
        this.hobby = hobby
        //无法直接调用win函数 需要Faker.win
    }
    static win(){
        //static中只能调static声明的元素 无法获取name/age。。
        return this.s12
    }
}
let p = new Faker('lxh',26,'lol')
p.name
// p.age 报错只能在类中访问
// p.hobby 报错只能在类和子类中访问

class Hu extends Faker {
    constructor(){
        super('faker',22,'false')
        this.hobby
    }       
}

interface Person {
    run(type:boolean):boolean
}

interface P2 {
    run2():void
}   

//通过接口约束类
class Man7 implements Person,P2 {
    run(type:boolean):boolean{
        return type
    }
    run2(){}
}

//抽象类
abstract class Ab {
    name:string
    constructor(name:string){
        this.name=name
    }
    abstract getName():string //此处只能声明 实现要到派生类中实现
}
//new Ab() 抽象类无法被实例化

class B extends Ab {
    constructor(){
        super('faker')
    }
    getName(): string {
        return this.name
    }
}