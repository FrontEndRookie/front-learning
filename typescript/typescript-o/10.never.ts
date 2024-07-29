// type num = number & boolean type num =never

function nevers (){
    throw new Error('xxx')
}

function loop(){
    while(true){}

}

interface A {
    type:'a'
}
interface B {
    type:'b'
}
type All = A|B;
function type (val:All){
    switch(val.type){
        case 'a':break;
        case 'b':break;
        default:const n:never=val //走到这会报错，用于限制type函数输入类型
    }
}