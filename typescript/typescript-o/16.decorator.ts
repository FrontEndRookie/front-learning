const watchs:ClassDecorator = (target:Function) => {
    target.prototype.getName = <T>(name:T):T => {
        return name
    }
}

const watchss = (name:string):ClassDecorator => {
    return (target:Function) =>{
        target.prototype.getName = <T>(name:T):T => {
            return name
        }
    }
}

const log = <T>(property: T):PropertyDecorator => {
    return (target: object, propertyKey: string | symbol) => {
        target[propertyKey] = property;
    }
}
 
@watchs 
@watchss('组合式装饰器')
class ABC {
    @log(123)
    name:string
}
let abc = new ABC();
console.log(abc.name);
(<any>abc).getName(123)