### 网页多标签 tab 通讯

```
websocket:允许跨域，但需要服务端，成本高
localstorage：必须同域，使用简单
sharedWorker： 调试不方便，不兼容ie11
```

### http 对比 udp

```
http是应用层，TCP UDP是传输层
TCP有连接和断开，稳定传输
UDP无连接和断开，不稳定传输但效率高
```

### http 各版本对比

```
2.0 压缩header，减少请求传输的文件体积，多路复用，一次tcp连接中可以多个http并行请求，服务端推送
1.1 缓存策略，长连接connection：keep-alive 一次tcp连接多次请求，大文件断点续传 状态码206，支持新的请求方法put delete可用于restful api
1.0 最基础的http协议，支持基本的get和post方法，目前已没人使用

```

### https

```
服务端响应请求时携带数字证书（包含公钥A），客户端取出公钥，用公钥加密随机码，将随机码发送给服务器，服务端使用私钥解密（至此为非对称加密）。将解密后的随机码作为密钥进行后续对称加密

中间人攻击就是黑客伪造服务端公钥进行和服务端相同的操作（可以通过正规的数字证书防止该攻击）
```

### prefetch 和 preload

```
preload资源在当前页面使用，会优先加载
prefetch资源在未来页面使用，空闲时加载
```

### websocket 和 http

```
协议名字：ws/http
双端请求
ws没有跨域限制
ws通过send和onmessage通讯，http通过req和res
```

### http 长轮询和 websocket

```
长轮询是客户端发起请求，服务端阻塞，不会立即返回，依赖客户端发起请求且客户端需要处理timeout机制，timeout后客服端需要重新发起请求。
ws是客户端和服务端都可以发起请求，双端通信。
```

### 从 url 到网页显示全过程

```
网络请求：DNS解析，HTTP请求
解析： DOM树，CSSOM树，Render树
渲染： 计算，绘制，同时执行js
```
