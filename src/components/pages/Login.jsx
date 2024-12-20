/**
 * Login.jsx
 * 
 * トップページ
 * 入力欄：
 * ユーザーIDを入力できるようにする
 *  →状態を管理・入力の都度表示する値を更新させる
 * ボタン：
 * idが空：ボタン押せない、成功時：ログイン、失敗時：ログインできない
 * いずれにせよメッセージ表示
 * ローディング中を表示
 *  →loadingをボタンに渡す
 */
import { Box, Divider, TextField, Typography } from '@mui/material';
import { memo, useState } from 'react';

import { PrimaryButton } from '../atoms/buttons/PrimaryButton';
import { useAuth } from '../../hooks/useAuth';

export const Login = memo(() => {
// インプットに入力できるようにする
  // State：入力欄の状態管理
  const [idNumber, setIdNumber] = useState("");
  // 入力欄の値を入力された値に更新する
  const onChangeIdNumber = (e) => {
    setIdNumber(e.target.value);
  }

// カスタムフックを利用する
  const {loading, login} = useAuth();

  // クリックイベント
  const onClickLogin = () => {
    // 入力されたIDを元にログインできるか否かの処理→カスタムフック化
    login(idNumber);
  }
  
  return (
    // 大枠
    <Box
    sx={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh",
      textAlign:"center",
      bgcolor:"#eee"
    }}>
      {/* ログインカード */}
      <Box
      sx={{
        display:"grid",
        gap:3,
        bgcolor:"#fff",
        width:"300px",
        boxShadow:"0 0 5px #ccc",
        p:3,
        borderRadius:3,
        textAlign:"center"
      }}>
        {/* タイトル・線引き・入力欄・ボタン */}
        <Typography component="h1" variant='h5' sx={{fontWeight:"bold"}}>ユーザー管理アプリ</Typography>
        <Divider variant='middle'/>
        <Box
        sx={{
          display:"grid",
          gap:2,
        }}
        >
          <TextField onChange={onChangeIdNumber}  value={idNumber}
           id="loginNumber" variant='outlined' label="ユーザーID"/>
          <PrimaryButton id={idNumber} loading={loading} onClick={onClickLogin}>ログイン</PrimaryButton>
        </Box>
      </Box>
    </Box>
  );
});