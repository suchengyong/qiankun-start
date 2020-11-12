/**
 * 配置文件
 * @type {{apiDomain}}
 */
var ENV = (function () {

    var rootPath = '/';
    var apiDomain = "http://10.0.3.121";
    var loginDomain = 'http://10.0.3.121';
    var ssoLoginUrl = '/ssoLogin.html';
    var restApi = "http://10.0.3.121"; // douc跳转验证前缀
    var serviceApi = window.location.origin;
    var redirectUrl = "http://10.0.3.121/dosm-h5/login";
    var appId = 'cli_9fdf19751aa0500d';

    return {
        rootPath: rootPath,                                 // 根路由前缀
        apiDomain: apiDomain,
        serviceApi:serviceApi,// 根路由前缀
        apiPrefix: "/",
        ssoLoginUrl: ssoLoginUrl,
        redirectUrl:redirectUrl,
        appId:appId,
        login: {
            loginOutButton:true,
            loginUrl: rootPath + "login",
            defaultRedirectUrl: rootPath + 'myStarted', // 登录成功后默认跳转页面
            loginProxyUrl: loginDomain + "/douc/api/v1/sso/source/proxy.html",   //登陆地址
            loginAPI: apiDomain + '/api/v1/dosm_web/menuPermission',
            logoutAPI: loginDomain + "/douc/api/v1/sso/logout",   //登出
            restapi: restApi + '/api/v1/dosm_web/checkLogin',      //sso跳转后默认请求后端的接口
        },
        // enumCustomMenus : [
        //     {
        //         icon: {
        //             appType:"custom",
        //             iconType:"reportOrderAll"
        //         },
        //         label: "工单统计",
        //         permissionType: 'dosm_my_work_orde',
        //         url: "/dosm-h5/fixed?uri=http://www.baidu.com",  // 将项目上的地址配置到这里
        //     },
        // ]
    }
})();
