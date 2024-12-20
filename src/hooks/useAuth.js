/**
 * useAuth.js
 * 
 * 入力されたIDでログインできるか処理する関数をカスタムフック化
 * 手順
 *    メッセージを表示させる状態を作る
 *    ローディングの状態を作る
 *    ローディングの状態をtrueにする
 * 1. JSON PlaceholderのURL＋idを取得
 * 2. 成功→ ログイン成功のメッセージを表示・ホームページへ遷移させる
 * 3. 失敗→ エラーメッセージを表示
 * 4. ローディング終了→ ローディングの状態をfalseにする
 */
import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSnackbarContext } from "../providers/SnackbarProvider";
import { useLoginUser } from "./useLoginUser";

export const useAuth = ()=>{
  // Context管理の利用：メッセージ機能・ログインユーザー管理
  const {setSnackbar} = useSnackbarContext();
  const {setLoginUser} = useLoginUser();

  // State管理：ローディング
  const [loading, setLoading] = useState(false);
  
  // ページ遷移関数navigateを定義
  const navigate = useNavigate();

  // 返却したい関数を作成：入力されたIDを元にログイン・またはエラーを出す・ローディングを表示させる処理
  const login = useCallback(async(id) => {
    setLoading(true)
    await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)// URL+idを取得してみる
    .then((res) => {
      setSnackbar({
        open: true,
        severity: "success",
        message: "ログインに成功しました！"
      })
      navigate('/home');
      // 管理者ユーザーの設定（今回は仮にid=10を管理者とする）
      const isAdmin = res.data.id === 10 ? true : false;
      setLoginUser({...res.data, isAdmin});
    })
    .catch(() => {
      setSnackbar({
        open: true,
        severity: "error",
        message: "ユーザーIDが見つかりません"
      })
    })
    .finally(() => {
      setLoading(false)
    })
    },[navigate, setSnackbar, setLoginUser])

  
  return {loading, setLoading, login}
}