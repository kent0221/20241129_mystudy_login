/**
 * Header.jsx
 * 
 * ヘッダーのレイアウト
 * PC：タイトル・リンクが左寄せで横並び表示
 * モバイル：タイトル・ハンバーガーメニューが両端揃えで横並び表示
 * ハンバーガーを押下するとドロワーが左から表示
 * ドロワーにはタイトル・リンクボタンが存在
 */
import { AppBar, Box, List, Toolbar, Typography } from '@mui/material';
import { memo, useState } from 'react';

import { MenuDrawer } from '../molecules/MenuDrawer';
import { MenuIconButton } from '../atoms/buttons/MenuIconButton';
import { LinkButton } from '../atoms/buttons/LinkButton';
import { useNavigate } from 'react-router-dom';
import { useLoginUser } from '../../hooks/useLoginUser';
import { useSnackbarContext } from '../../providers/SnackbarProvider';

export const Header = memo((props) => {
  // カスタムフック：ログイン管理
  const {setLoginUser} = useLoginUser();
  const {setSnackbar} = useSnackbarContext();

  // State管理
  const [open, setOpen] = useState(false);
  
  // ページ遷移の関数navigateを定義
  const navigate = useNavigate();

  // クリックイベント ページ遷移
  const onClickToHome = () => {
    navigate("/home");
  }
  const onClickToUserManagement = () => {
    navigate("/home/userManagement");
  }
  const onClickToSetting = () => {
    navigate("/home/setting")
  }
  
  // ログアウト機能の追加
  const onClickToLogout = () => {
    setLoginUser({});
    navigate("/")
    setSnackbar({
      open: true,
      severity: 'success',
      message: '正常にログアウトしました'
    })
  }
  
  // クリックイベント ドロワーの開閉
  const onClickOpenDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  
  return (
    <>
      <AppBar // MUI 全体をナビゲーションとして設置
      sx={{
        position:"static",
        p:{xs:1, md:2} // paddingを4px、960pxから8pxにする
      }}
      >
        <Toolbar // MUI AppBarの中に入れるコンテナ要素
        sx={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center"
        }}
        >
          <Box // MUI タイトルのラッパー
          component="a" // リンク要素にする
          onClick={onClickToHome} // ホーム画面へ遷移
          sx={{
            mr:2, // margin-rightを8px
            cursor:"pointer"
          }}
          >
            <Typography // MUI テキスト要素 
            variant='h6' // h6として定まったスタイルを当てる
            component="h1" // 要素をh1にする
            sx={{
              fontSize:{xs: "1.25rem", md:"1.5rem"} // ベース1.25rem、960PXから1.5remにする
            }}
            >
              ユーザー管理アプリ
            </Typography>
          </Box>
          <Box // MUI リンクのラッパー
          sx={{
            display:{xs:"none", md: "flex"}, // モバイルで非表示になるように設定
            alignItems:"center",
            flexGrow:2, // Boxを引き伸ばす
            fontSize:"1rem"
          }}
          >
            <List // MUI リンクのリスト
            sx={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}
            >
              {/* リンクボタンのatomsコンポーネント */}
              <LinkButton onClick={onClickToUserManagement}>ユーザー一覧</LinkButton>
              <LinkButton onClick={onClickToSetting}>設定</LinkButton>
              <LinkButton onClick={onClickToLogout}>ログアウト</LinkButton>
            </List>
          </Box>
          <MenuIconButton
          onClick={onClickOpenDrawer}
          />
        </Toolbar>
      </AppBar>
      <MenuDrawer //メニュー表示のドロワーコンポーネント
      open={open}
      onClose={onClose}
      onClickToHome={onClickToHome}
      onClickToUserManagement={onClickToUserManagement}
      onClickToSetting={onClickToSetting}
      onClickToLogout={onClickToLogout}
      />
    </>
    
  );
});