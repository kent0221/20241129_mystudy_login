/**
 * useSelectedUser.js
 * 
 * 押下したカードのユーザー情報を保持するカスタムフック
 * ユーザー情報を取得
 * ・取得できるかどうかの処理→メッセージもいる
 */

import { useCallback, useState } from "react";
import { useSnackbarContext } from "../providers/SnackbarProvider";

export const useSelectedUser = () => {
 // Context管理
 const {setSnackbar} = useSnackbarContext();
 
 // State管理
 const [selectedUser, setSelectedUser] = useState({})

 // カスタムフックとして再利用したい関数
 const onOpenSelectedUser = useCallback((props) =>{

  // props：全ユーザーのデータ・押下されたユーザーID・モーダル表示の更新関数
  const {users, id, setOpen} = props;

  // usersからIDが同じ情報のものを探す
  const targetUser = users.find((user) => user.id === id);

  // targetUserの情報の有無で条件分岐
  if (targetUser){
    setSelectedUser(targetUser);
    setOpen(true);
  }else{
    setSnackbar({
      open: true,
      severity: 'error',
      message: 'ユーザーが見つかりません'
    })
  }
 },[setSnackbar])
 return { selectedUser, onOpenSelectedUser }
};