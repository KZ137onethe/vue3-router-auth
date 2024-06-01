import http from "@/libs/http.ts";
import qs from "qs";

export function getUserRouteList(uid: number) {
  return http.post("/api/user_route_list", qs.stringify({ uid }))
}