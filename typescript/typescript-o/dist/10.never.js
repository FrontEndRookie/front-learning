// type num = number & boolean type num =never
function nevers() {
    throw new Error('xxx');
}
function loop() {
    while (true) { }
}
function type(val) {
    switch (val.type) {
        case 'a': break;
        case 'b': break;
        default: var n = val; //走到这会报错，用于限制type函数输入类型
    }
}
