<template>
 <section id="cns-main-app">
      <section class="cns-menu-wrapper">
        <main-menu :menus="menus" />
      </section>
      <section class="cns-frame-wrapper">
        <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
        <router-view v-show="$route.name" />

        <!-- 子应用渲染区，用于挂载子应用节点 -->
        <section v-show="!$route.name" id="frame"></section>
      </section>
    </section>
</template>
<script>
import MainMenu from "@/components/menu.vue";
export default {
  name: 'App',
  components: {
    "main-menu":MainMenu
  },
  data() {
    return {
      menus:[
        {
          key: "Home",
          title: "主页",
          path: "/"
        },
        {
          key: "VueApp",
          title: "Vue 主页",
          path: "/vue"
        },
        {
          key: "ReactApp",
          title: "React 主页",
          path: "/react"
        },
        {
          key: "StaticApp",
          title: "Static 微应用",
          path: "/static"
        }
      ]
    }
  },
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#cns-main-app {
  height: 100%;
  position: relative;
  .cns-menu-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 40;
    width: 172px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .cns-nav-wrapper {
    position: fixed;
    width: 100%;
    min-width: 1060px;
    padding-left: 172px;
    left: 0;
    top: 0;
    z-index: 30;
  }
}

.cns-frame-wrapper {
  padding-left: 172px;
  flex-grow: 1;
  height: 100%;
  width: 100%;
  position: relative;
}

#cns-frame {
  width: 100%;
  height: 100%;
  > :first-child {
    height: 100%;
  }
}
</style>
