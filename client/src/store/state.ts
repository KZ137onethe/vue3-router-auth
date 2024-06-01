import { IRoute } from "@/typings"

export interface IState {
  uid: number,
  hasAuth: boolean,
  routeTree: IRoute[]
}

export default {
  uid: 3,
  hasAuth: false,
  routeTree: []
}