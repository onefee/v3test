- **webpack**
是一个用于现代 JavaScript 应用程序的 静态模块打包工具。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图(dependency graph)，然后将你项目中所需的每一个模块组合成一个或多个 bundles，它们均为静态资源，用于展示你的内容。

 [中文文档](https://www.webpackjs.com/concepts/)  
 [概念简述](https://www.jianshu.com/p/0492df301dda)，
 [常规总结](https://zhuanlan.zhihu.com/p/443964387)，
 [参考-快速入门](https://www.cnblogs.com/wangyang0210/p/10371064.html) 
 

- **W3C标准** 万维网联盟，World Wide Web Consortium

 万维网联盟标准不是某一个标准，而是一些列标准的集合。网页主要有三部分组成：结构（Structure）、表现（Presentation）、行为（Behavior）。

 对应的标准也有三方面：结构化标准主要包括XHTML和XML，表现标准语言主要包括CSS、行为标准主要包括（如W3C DOM）、ECMAScript等。这些标准大部分是W3C起草发布，也有一是其他标准组织制定的标准，比如ECMAScript（European Computer Manufacturers Association）的ECMAScript的标准。

 [w3school](https://www.w3school.com.cn/)，
[w3c-api](https://github.com/w3c/w3c-api)，
[标准与规范介绍](https://javaforall.cn/192545.html)

- **ES规范**
ECMAScript标准建立在一些原本的技术上，最为著名是Javascript和JScript，而在第一版本到第二版本则是变更了编辑性质，在第三版引入了强大的正则表达式，更加的字符串处理，新的控制语句，try/carth异常处理，更严谨的错误定义，格式化的数字输出以及一些为国际化和未来语言成长预留的小的变更，第四版本因为某些原因流产，第五版本纸面化了很多事实已经在浏览器上形成的共识的语言规范解析并且增加了对自第三版发布以来的新功能的支持，包括访问器属性，反射创建以及对象检测，属性特效的程序控制，新增的数组操作函数，JSON对象编码格式，以及提供了改进的错误检查以及程序安全性的严格模式。

 [一致性](https://www.jianshu.com/p/05aabbee1795)
- **CSS盒模型**
css盒模型是前端开发中非常基础和重要的知识，它是元素大小的呈现方式，它包括margin、border、padding和content。

 [深入理解css盒模型](https://www.jianshu.com/p/0cce72d5387e)
 
 <img src="https://upload-images.jianshu.io/upload_images/4459456-bdbece667159c223.png?imageMogr2/auto-orient/strip|imageView2/2/w/326/format/webp" width="200" />
 
- **浏览器的兼容性**
 
 [简述](https://blog.51cto.com/u_15295057/3088204)，
 [集合](https://www.jianshu.com/p/95a4f7a9b391)，
 [常见的兼容性问题及解决办法](https://www.jianshu.com/p/f971aae86f4d)
 
- **DOM & BOM** JavaScript分为 ECMAScript，DOM，BOM。

 BOM（Browser Object Model）是指浏览器对象模型，它使 JavaScript 有能力与浏览器进行“对话”。

 DOM （Document Object Model）是指文档对象模型，通过它，可以访问HTML文档的所有元素。
 
 [参考简介](https://www.cnblogs.com/ryxiong-blog/articles/10826816.html)
- **常见网络协议** TCP IP UDP HTTP FTP ICMP IGMP 
 
 [参考](https://blog.51cto.com/u_15717393/5470938)
- **HTTP请求过程** 

 1、DNS---IP：浏览器根据域名解析IP地址

 2、建立Tcp：浏览器与WEB服务器建立一个TCP连接  （tcp的三次握手）

 3、发送http：浏览器给WEB服务器发送一个HTTP请求 

 4、响应http：服务器端响应HTTP请求，浏览器得到HTML代码 

 5、解析Html：浏览器解析HTML代码，并请求HTML代码中的资源

 6、关闭Tcp：关闭TCP连接，浏览器对页面进行渲染呈现给用户
 
 [参考简介](https://www.jianshu.com/p/9aeadb18b589)
- **Web 性能** 

 Web 性能是客观的衡量标准，是用户对加载时间和运行时的直观体验。Web 性能指页面加载到可交互和可响应所消耗的时间，以及页面在交互时的流畅度——滚动是否顺滑？按钮能否点击？弹窗能否快速打开，动画是否平滑？Web 性能既包括客观的度量如加载时间，每秒帧数和到页面可交互的时间；也包括用户的对页面内容加载时间的主观感觉。
 
 页面响应时间越长，越多的用户就会放弃该网站。重要的是，通过使体验尽可能早地变得可用和交互，同时异步地加载长尾体验部分，来最大程度地减少加载和响应时间，并添加其他功能以降低延迟。

 有很多工具，API 和最佳实践帮助我们测量和改进网页性能。
 [参考详解](https://developer.mozilla.org/zh-CN/docs/Web/Performance)

 [性能优化](https://www.cnblogs.com/liangyin/p/10875915.html)，[性能优化之关于像素管道及优化](https://www.cnblogs.com/liangyin/p/11270371.html)，
 [性能优化知识点](https://gitee.com/heboliufengjie/front-end-interview/blob/master/性能优化知识点.md)，
 [重绘和回流](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/24)，
 [浏览器是如何渲染网页的](https://zhuanlan.zhihu.com/p/25554352)，

 [关键渲染路径](https://developer.mozilla.org/zh-CN/docs/Web/Performance/Critical_rendering_path)，
 [requestAnimationFrame](https://blog.csdn.net/weixin_44730897/article/details/116532510)，
 [Performance API](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance)，
 [火狐内置分析器](https://profiler.firefox.com/docs/#/./guide-getting-started)， 
 
 [CSS媒体查询](https://www.runoob.com/cssref/css3-pr-mediaquery.html)， [W3媒体查询](https://www.w3school.com.cn/css/css3_mediaqueries_ex.asp)，
 
 JS对性能的负面影响更大，
但并非所有下载的字节都有相同的影响，JS文件必须被下载、解析和执行。
JS会影响下载性能，我们应该尽量减少对下载的影响，JS也会消耗主线程、CPU 和电池，它会让UI反应迟钝或卡顿。

 Web应用程序包含大量JS，许多应用程序都是使用一个或多个JS框架构建的，并具有一些额外的依赖项，通常会添加第三方脚本和API，包括 A/B 测试、跟踪像素以及地图和支持功能等功能。
所有这些JS都必须下载。

 性能优化应包括：
 减少所需的JS数量；简化代码(复杂的功能由简单代码实现)；抽象管理公共库；采用更轻的量或自写JS库；删除未使用的代码；
将JS分割成更小的文件；将JS代码拆分为关键部分和非关键部分；像webpack这样的模块打包器支持代码分割；优化这些较小的文件；
压缩JS文件；Gzipping会进一步压缩文件，即使不缩小也应该使用Brotli与Gzip类似，通常优于Gzip的压缩。

 Web应用程序包含大量JS。许多应用程序都是使用一个或多个JS框架构建的，并具有一些额外的依赖项。通常会添加第三方脚本和API包括 A/B测试、跟踪像素以及地图和支持功能等功能

- **设计模式** 
 单例模式、策略模式、代理模式、迭代器模式、发布—订阅模式、命令模式、组合模式、模板方法模式、享元模式、职责链模式、中介者模式、装饰者模式、状态模式、适配器模式、外观模式
 
 [常见的十五种设计模式](https://www.cnblogs.com/imwtr/p/9451129.html)，
 [23种设计模式总结](https://blog.csdn.net/lgxzzz/article/details/124970034)， 
- **WebAssembly** 
 [参考详解](https://developer.mozilla.org/zh-CN/docs/WebAssembly)
 
- **Vue3** 
 [参考详解](https://cn.vuejs.org/)，[API](https://cn.vuejs.org/api/)
 
 [性能优化](https://cn.vuejs.org/guide/best-practices/performance.html)
 
 内置组件：[Transition](https://cn.vuejs.org/guide/built-ins/transition.html)、[TransitionGroup](https://cn.vuejs.org/guide/built-ins/transition-group.html)、[KeepAlive](https://cn.vuejs.org/guide/built-ins/keep-alive.html)、[Teleport](https://cn.vuejs.org/guide/built-ins/teleport.html)、[Suspense](https://cn.vuejs.org/guide/built-ins/suspense.html)

 