### 1.通过h函数转化虚拟dom -> dom/h.js
### 2.patch函数比较
####  2-1 非相同元素-暴力删除旧的节点，创建插入新的节点
####  2-2 相同元素 
#####  2-2-1 新节点没有children 替换旧节点innerText
#####  2-2-2 新节点有children 
######   2-2-2-1 旧节点没有children -清空旧节点 新建新节点
######   2-2-2-2 旧节点有children 
######               依次对比新前旧前/新后旧后/新后旧前/新前旧后/查找  前四种前则指针++ 后则指针-- /查找 新指针++

###### 查找
 1.创建对象,遍历oldStartIdx-oldEndIdx key作对象键名 索引做对象键值
 2.判断newStartVnode的key 是否存在于对象中
 2-1 存在说明有相同元素，先递归调用patch，处理children，将old的当前元素设置undefined 将new中相同key元素添加到old元素之前
 2-2 不存在则直接创建newStartVnode 置于当前old元素之前

 ###### 最后判断新旧前后指针的大小进行多余元素的删除和创建

