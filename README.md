# 微前端架构模板

## 介绍

> 微前端是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将单页面前端应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。各个前端应用还可以独立开发、独立部署。同时，它们也可以在共享组件的同时进行并行开发——这些组件可以通过 NPM 或者 Git Tag、Git Submodule 来管理。

本项目是基于 `qiankun` 搭建的微前端架构 `Demo`，你也可以当成 `qiankun-quick-start` 来使用。

本项目使用 `Vue` 作为主应用基座，嵌入了 `Vue、React、Jquery + Express` 等等多个技术栈的微应用,点个 `Star` 不迷路。

## 如何运行

> 本项目使用的端口为 `5000、5001、5002、5003、5004`，运行前请确保这几个端口的空闲。
> 
> 如果需要调试项目查看效果，建议手动启动主应用和所需的微应用。

本仓库基于 `qiankun` 实现微前端架构，运行命令（全量启动）如下：

```bash
yarn install
yarn all:install
yarn all:start
```

## 系列教程

本系列配套教程：

- [基于 qiankun 的微前端最佳实践](https://github.com/a1029563229/Blogs/tree/master/BestPractices/qiankun/Start.md)
- [基于 qiankun 的微前端最佳实践（图文并茂） - 应用间通信篇](https://github.com/a1029563229/Blogs/tree/master/BestPractices/qiankun/Communication.md)
- [万字长文+图文并茂+全面解析微前端框架 qiankun 源码 - qiankun 篇](https://github.com/a1029563229/Blogs/tree/master/Source-Code/qiankun/1.md)


大家可以根据自己的需求切换分支。

## 关于跨域

由于 `qiankun` 内部使用的是 `Fetch HTML` 的方式加载子应用，所以会遇到跨域问题。我们需要先解决跨域问题，使我们的主应用可以正常加载子应用相关资源。

在开发环境下，本项目配置了跨域解决方案，所以在直接运行项目并不会遇到跨域问题。

#### 生产环境的跨域问题可以参考下面的方案。

#### 扩展阅读

本项目在生产环境（和开发环境），采用 `caddy` 解决应用间跨域问题及生产部署问题，`caddy` 的安装和使用可以参照 [`caddy` 入门教程](http://shadows-mall.oss-cn-shenzhen.aliyuncs.com/images/blogs/micro-front/4.png)。

`caddy` 可以在本地开发和生产环境可以提供同一套跨域解决方案，建议使用。如果你不想使用 `caddy`，那么也可以通过其他方案（如 `nginx` 等等）解决跨域问题