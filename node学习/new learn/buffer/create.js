let buffer = Buffer.alloc(10) //创建时会对使用的内存空间清空

let buffer2 = Buffer.allocUnsafe(10) //不会清空使用的内存空间，可能包含旧的内存数据

let buffer3 = Buffer.from('hello')