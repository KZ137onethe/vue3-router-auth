import { IRoute } from "@/typings";
import { RouteRecordRaw, Router } from "vue-router";

function generateRouter(routeTree: IRoute[]) {
  let newRoutes = routeTree.map(route => {
    let _route: RouteRecordRaw = {
      path: route.path,
      name: route.name,
      component: () => import(`@/views/${ route.name }.vue`),
      children: []
    }
    if(route.children) {
      _route.children = generateRouter(route.children)
    }

    return _route
  })

  return newRoutes
}

export default function routeBeforeEach(router: Router, store) {
  router.beforeEach(async (to, from, next) => {
    if(!store.state.hasAuth) {
      console.log("路由加载中...");
      await store.dispatch("set_route_tree");
      console.log("routes: ", store.state.routeTree);
      const newRoutes = generateRouter(store.state.routeTree);
      newRoutes.forEach(route => {
        router.addRoute(route)
      })
      next({ path: to.path})
    } else {
      console.log("路由已加载");
      next()
    }
  })
}