# 打包windows应用

打包windows应用基本上和上节课介绍的打包 macOS应用大同小异，但是有一些注意点：

1. 在打包 windows 应用的时候，需要填写 author 字段。
2. 关于图标，对应的是一个具体的 ico 格式的文件，而非一组文件
3. nsis 配置打包出来就是 exe 文件，对应的常见配置项：
   - oneClick：false
     - 表示是否需要一键式安装程序，当你设置为 true 的时候，安装包在进行安装的时候，就不会给用户提供相应的选项（用户组的选择、安装路径的选择），全部按照默认配置去安装。
   - allowElevation：true
     - 安装程序是否在需要的时候，能够请求提升权限
       - true：表示安装包在进行安装的时候，如果遇到权限不足的情况，那么会向用户请求提升权限。
       - false：表示安装包在进行安装的时候，如果遇到权限不足的场景，直接安装失败。
   - allowToChangeInstallationDirectory：true
     - 布尔类型，如果是 true，表示允许用户在安装的过程中修改安装路径。
   - createDesktopShortcut：true
     - 是否创建桌面快捷方式
   - createStartMenuShortcut：true
     - 是否在 windows 系统的开始菜单创建快捷方式
   - shortcutName：string
     - 快捷方式显示的名称

