# Next.js

compiling,minifying,bundling,code spilting

## The environment where your code runs: Development vs. Production

代码运行环境(代码的上下文)：开发,生产环境

在不同环境会对代码做不同优化,在开发环境优化开发者体验,在生成环境悠哈用户体验
构建代码时,编译会优化代码,例如去除代码运行不需要的部分(为优化代码阅读而添加的),将不同模块和文
件的代码bundling(捆绑打包)

Next.js支持自动拆分代码,在pages下的代码在构建时会自动拆分(优化加载速度,减少重复加载重用的部分)

## When your code runs: Build Time vs. Runtime

代码运行时：构建时与运行时

## Where rendering happens: Client vs. Server

渲染发生的位置：客户端与服务器

### pre-rendering预渲染

在服务端渲染和静态文件生成称为预渲染
