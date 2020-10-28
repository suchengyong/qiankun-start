/**
  * 渲染函数
  * 两种情况：主应用生命周期钩子中运行 / 微应用单独启动时运行
  */
if (window.__POWERED_BY_QIANKUN__) {
  // 动态设置 webpack publicPath，防止资源加载出错
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
// 全局注册
((global) => {
  /**
   * 注册微应用生命周期钩子函数
   * global[appName] 中的 appName 与主应用中注册的微应用名称一致
   */
  global["qiankun-static"] = {
    /**
     * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
     * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
     */
    bootstrap: function(){
      console.log("MicroJqueryApp bootstraped");
      return Promise.resolve();
    },
    /**
     * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
     */
    mount: function(){
      console.log("MicroJqueryApp mount");
      return Promise.resolve();
    },
    /**
     * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
     */
    unmount: function(){
      console.log("MicroJqueryApp unmount");
      return Promise.resolve();
    },
  };
})(window);