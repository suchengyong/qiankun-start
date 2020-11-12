const apps = [
    /**
     * name: 微应用名称 - 具有唯一性
     * entry: 微应用入口 - 通过该地址加载微应用
     * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
     * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
     * props :传递给子应用的参数
     */
    {
      name: "qiankun-vue",
      entry: "//localhost:5001",
      container: "#frame",
      activeRule: "/vue"
    },
    {
      name: "qiankun-react",
      entry: "//localhost:5002",
      container: "#frame",
      activeRule: "/react",
      props:{
        a:'传递给子应用的参数'
      }
    },
    {
      name: "qiankun-static",
      entry: "//localhost:5003",
      container: "#frame",
      activeRule: "/static"
    },
    {
      name: "desk-mobile-h5",
      entry: "//localhost:8001",
      container: "#frame",
      activeRule: "/deskMobileH5"
    },
  ];
  
  export default apps;
  