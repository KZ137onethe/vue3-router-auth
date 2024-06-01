import { IRoute } from "@/typings";
import { IState } from "./state";

export default {
  set_route_tree(state: IState, routeTree: IRoute[]) {
    state.routeTree = routeTree;
  },
  set_auth(state: IState, auth: boolean) {
    state.hasAuth = auth;
  }
}