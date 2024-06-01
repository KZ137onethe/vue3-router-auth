import { Commit } from "vuex/types/index.js";
import { IState } from "./state";
import { IRoute } from "@/typings";
import { getUserRouteList } from "@/services";

export default {
  async set_route_tree({ commit, state }: { commit: Commit, state: IState }) {
    const routeList: IRoute[] = await getUserRouteList(state.uid) as unknown as IRoute[];
    const routeTree = formatRouteTree(routeList);
    // console.log(routeTree);
    commit('set_route_tree', routeTree);
    commit('set_auth', true);
  }
}

function formatRouteTree(data: IRoute[]) {
  const parentRoutes = data.filter(route => route.pid === 0);
  const childrenRoutes = data.filter(route => route.pid !== 0);

  routesToTree(parentRoutes, childrenRoutes);

  return parentRoutes;
}

function routesToTree(parents: IRoute[], children: IRoute[]) {
  parents.map(parent => {
    children.map((child, index) => {
      if(child.pid === parent.id) {
        let _children = JSON.parse(JSON.stringify(children));
        _children.splice(index, 1);
        routesToTree([child], _children);
        if(parent.hasOwnProperty("children")) {
          parent.children.push(child);
        } else {
          parent.children = [child];
        }
      }
    })
  })
}