<script setup>
  import qs from "qs";
  import http from "@/libs/http.ts";

  // http.post("/api/user_route_list", qs.stringify({ uid: 1 })).then(res => {
  //   console.log(res);
  // })

  // fetch("/api/user_route_list", {
  //   method: "post",
  //   body: qs.stringify({ uid: 1 }),
  //   headers: {
  //   "Content-type": "application/x-www-form-urlencoded"
  //   }
  // })
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(result => {
  //     console.log("result:", result);
  //   })
</script>

<template>
  <router-view></router-view>
</template>

<style scoped lang="scss"></style>