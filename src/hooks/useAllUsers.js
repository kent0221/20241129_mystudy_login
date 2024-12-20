/**
 * useAllUsers.js
 * 
 * JSON Placeholderからユーザー情報を取得するカスタムフック
 * 処理中（ローディング）時の表示も作りたいので状態管理する
 * エラー時はメッセージが出るように設定する
 */

import { useCallback, useState } from "react";
import { useSnackbarContext } from "../providers/SnackbarProvider"
import axios from "axios";

export const useAllUsers = () => {
  // Context
  const {setSnackbar} = useSnackbarContext(); // メッセージ設定

  // State
  const [loading, setLoading] = useState(false); // ローディング
  const [users, setUsers] = useState([]); // ユーザー情報
  
  // 関数：非同期関数の書き方をPromiseチェーンからasync/awaitに書き換えてみるパターン
  const getUsers = useCallback(async ()=>{
    setLoading(true);
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      // 成功時の処理
      setUsers(res.data);
    } catch (error) {
      // エラー時の処理
      setSnackbar({
        open:true,
        severity: 'error',
        message: 'データを取得できませんでした'
      });
    } finally {
      // 最後に必ず実行される処理
      setLoading(false);
    }
  },[setUsers, setSnackbar])


  return {loading, setLoading, users, setUsers, getUsers}
}

