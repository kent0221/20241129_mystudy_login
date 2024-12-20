/**
 * Router.jsx
 * 
 * ページ全体のルーティング管理
 * ページ全体にまたがってメッセージ管理
 */
import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Snackbar, Alert, Slide } from '@mui/material';

import { Login } from '../components/pages/Login';
import { Home } from '../components/pages/Home';
import { Page404 } from "../components/pages/Page404";
import { HomeRoutes } from './HomeRoutes';
import { useSnackbarContext } from '../providers/SnackbarProvider';

export const Router = memo((props) => {
  // Context管理を呼び出す
  const {snackbar, handleClose} =useSnackbarContext();

  return (
      
    <>
    {/* 
    トップ：ログインページ
      ホーム・ユーザー一覧・設定
      どれも当てはまらない→404
      ホームは下層のトップページでこの下に２つのページがある
     */}
        <Routes>
          <Route index path='/' element={<Login/>}/>
          <Route path='home'>
            <Route index element={<Home/>}/>
            {HomeRoutes.map((route)=>{
              return (
                <Route key={route.path} path={route.path} index={route.index} element={route.element}/>
              )
            })}
          </Route>
          <Route path='*' element={<Page404/>}/>
        </Routes>

        {/* 
        メッセージ：全体共通
          MUIのSnackabarで表示、Alertでメッセージの区分と文字列を表示
          全体共通なので状態はContextで管理
         */}
        <Snackbar
        anchorOrigin={{vertical:"bottom", horizontal:"center"}}
        autoHideDuration={2000}
        open={snackbar.open}
        onClose={handleClose}
        TransitionComponent={Slide}
        >
          <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
        </Snackbar>
    </> 
  );
});