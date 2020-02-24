<h1 align='center'>react-visual-editor</h1>

## 特性

- :fire:**任意拖拽嵌套**：通过组件预览面板拖拽组件，到设计面板实现任意嵌套，设计面板中的组件也可随意拖拽嵌套
- :computer:**实时预览**：设计面板中会实时展示组件的属性效果和样式效果，并且与真实页面无异
- :christmas_tree:**DomTree展示**：页面组件dom树的展示并实现dom实时追踪
- :gift:**可视化属性配置**：结合React 特性和JS语法定制了可视化的组件属性配置，实现复杂数据结构的可视化配置
- :fireworks:**可视化样式配置**：通过样式配置面板修改样式，实时在页面中显示样式效果
- :video_camera:**模板功能**：可以选中局部或者整个页面做为可复用的模板，提高页面配置效率减少重复工作
- :lock:**组件约束**：根据组件特性配置组件约束，减少组件间的错误嵌套和报错
- :eyeglasses:**预览与代码生成**：可随时预览页面的真实效果，和页面的jsx代码与样式代码
- :dvd:**组件库替换** ：通过简单的配置可以对接任何React组件库

## SNAPSHOT

![SNAPSHOT](./snapshot.png)


## Usage

```sh
// 下载项目单独运行
git clone https://github.com/anye931123/react-visual-editor.git
npm install 
npm run dev

// umi项目可通过添加block方式添加此项目
umi block add https://github.com/anye931123/react-visual-editor
```
## 目录结构
```
- src
  |- components
  |- configs   //全局配置信息
     |- componentConfgs  //组件配置信息包括react和html的组件信息
        |- Ant         //Antd组件配置信息
        |- HTML    //html标签配置信息
     |- htmlCategory.ts   //html组件分类
     |- index.ts    // 配置信息汇总
     |- reactCategory.ts   //react组件分类组件分类
  |- locales
  |- modules
  |- service
  |- types
  |- utils
```
### types
- CategoryType 组件分类数据结构定义
- ComponentConfigType  组件信息属性结构定义
- ConfigTypes   全局配置信息数据结构定义
- ModelType   model数据结构定义

### configs
通过配置config可以实现拖拽组件库的替换，更改为你需要的组件库或者组件。具体配置如下

- OriginalComponents 所有的需要拖拽的原始组件汇总
- AllComponentConfigs 所有的组件配置信息
- CONTAINER_CATEGORY 容器组件分类
- NON_CONTAINER_CATEGORY 非容器组件分类


## LICENSE

MIT
