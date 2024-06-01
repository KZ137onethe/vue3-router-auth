// 这里这些数据应该存储在数据库中，当为了方便这里用单独的文件去保存它
export interface IUser {
  id: number,
  username: string,
  auth: number[]
}
export default <IUser[]>[
  {
    id: 1,
    username: "zhangsan",
    auth: [2, 3, 6, 7],
  },
  {
    id: 2,
    username: "lisi",
    auth: [2, 3, 5, 6, 7, 8],
  },
  {
    id: 3,
    username: "wangwu",
    auth: [2, 3, 4, 5, 6, 7, 8],
  }
]