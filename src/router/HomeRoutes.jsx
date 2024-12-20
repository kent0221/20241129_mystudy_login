import { Home } from "../components/pages/Home"
import { Page404 } from "../components/pages/Page404"
import { Setting } from "../components/pages/Setting"
import { UserManagement } from "../components/pages/UserManagement"

/**
 * HomeRoutes.jsx
 * 
 * 下層のトップページ内について配列としてまとめたもの
 * 配列の中はそれぞれのページの情報をオブジェクトとしてまとめる
 * path, element, indexを入れる
 * 存在しないURL用にPage404を一番最後に設置、パスはアスタリスクとする（＊）
 */
export const HomeRoutes = [
  {element: <Home/>, index: true, path: ""},
  {element: <UserManagement/>, index: false, path: "userManagement"},
  {element: <Setting/>, index: false, path: "setting"},
  {element: <Page404/>, index: false, path: "*"},
]