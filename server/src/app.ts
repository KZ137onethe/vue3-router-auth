import express, {
  Application,
  Request,
  Response,
  response,
} from "express";
import {
  users,
  routes,
  IUser,
  IRoute
} from "./data";
import bodyParser from "body-parser";

interface IBody {
  uid: string
}

const app: Application = express();
const PORT: number = 8081;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 定义接口
app.post("/user_route_list", (request: Request, response: Response) => {
  const { uid }: IBody = request.body;
  if(uid) {
    const userInfo: IUser | undefined = users.find((user: IUser) => user.id.toString() === uid)
    if(userInfo) {
      const authRouteList: IRoute[] = [];
      userInfo.auth.map((rid: number) => {
        routes.map((route: IRoute) => {
          if(route.id === rid) {
            authRouteList.push(route);
          }
        })
      })
      response.status(200).send({
        msg: "Request Success",
        data: authRouteList,
      })
    } else {
      response.status(200).send({
        msg: "No userInfo for this UID",
        data: null
      })
    }
  } else {
    response.status(200).send({
      msg: "No UID received",
      data: null
    })
  }
})

app.listen(PORT, () => {
  console.log('Server is running on ' + PORT + '.');
})