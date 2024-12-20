/**
 * UserDialog.jsx
 * 
 * UserManagement.jsxからモーダルをコンポーネント分割化したファイル
 * モーダル全体：
 * ・カードを押下→開く、閉じるボタンまたはモーダル以外を押下→閉じる
 * インプット：
 * ・入力の度に値を更新する
 * 管理者と一般ユーザーで制限を分岐
 * ・インプット入力、編集ボタンの表示
 * →クリックされたユーザー情報を取得するカスタムフックを作成する
 * →Context管理でloginしたユーザー情報を保持する
 */
import { memo, useEffect, useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { useLoginUser } from '../../../hooks/useLoginUser';

export const UserDialog = memo((props) => {
  const { open, onClose, user } = props;

  // カスタムフック：ログインユーザー管理
  const {loginUser} = useLoginUser();

  // 管理者権限のフラグ判定
  const isAdmin = loginUser?.isAdmin ?? false;

  // State管理：入力項目
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // 副作用処理：入力項目の初期値を指定
  useEffect(() => {
    // ユーザー情報があるなら反映
    setUsername(user?.username ?? "未入力")
    setName(user?.name ?? "未入力")
    setEmail(user?.email ?? "未入力")
    setPhone(user?.phone ?? "未入力")
  }, [user])

  // 入力イベント：入力項目の更新
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePhone = (e) => setPhone(e.target.value);

  // クリックイベント：編集ボタンを押下
  const editInfo = () => {
    console.log('edit!')
  }

  return (
    <>
    <Dialog
    open={open}
    onClose={onClose}
    >
      <Box
      sx={{
        mx: 1,
        width: "400px"
      }}
      >
        <DialogActions>
          <IconButton  onClick={onClose} aria-label="close">
            <CloseIcon/>
          </IconButton>
        </DialogActions>
        <DialogTitle>ユーザー詳細</DialogTitle>
        <DialogContent>
          <Box
          sx={{
            display:"flex",
            flexDirection: "column",
            alignItems: "stretch",
            gap: 2,
            p: 2
          }}
          >
            <TextField 
            variant="outlined" id="username" label="ユーザーネーム"
            value={username} onChange={onChangeUsername}
            slotProps={{
              input:{readOnly: !isAdmin }
            }}
            />
            <TextField 
            variant="outlined" id="name" label="フルネーム"
            value={name} onChange={onChangeName}
            slotProps={{
              input:{readOnly: !isAdmin }
            }}
            />
            <TextField 
            variant="outlined" id="email" label="メール"
            value={email} onChange={onChangeEmail}
            slotProps={{
              input:{readOnly: !isAdmin }
            }}
            />
            <TextField 
            variant="outlined" id="phone" label="TEL"
            value={phone} onChange={onChangePhone}
            slotProps={{
              input:{readOnly: !isAdmin }
            }}
            />
          </Box>
        </DialogContent>
        {isAdmin ? (
        <DialogActions sx={{pt:4}}>
          <Button variant="contained" startIcon={<EditIcon/>} onClick={editInfo}>編集する</Button>
        </DialogActions>
        ) : ("")}
      </Box>
    </Dialog> 
    </>
  );
});