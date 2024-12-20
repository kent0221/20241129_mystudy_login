/**
 * MenuDrawer.jsx
 * 
 * ヘッダー内メニューアイコン押下で表示するドロワー
 */
import { Box, Drawer, List } from '@mui/material';
import { memo } from 'react';
import { LinkButton } from '../atoms/buttons/LinkButton';

export const MenuDrawer = memo((props) => {
  const { open, onClose, onClickToHome, onClickToUserManagement, onClickToSetting, onClickToLogout } = props;
  return (
    <Drawer //  MUI ドロワー（メニューアイコン押下で表示させる）
    open={open} // ドロワーの状態
    onClose={onClose} // ドロワーを閉じる時の動作
    >
     <Box // MUI ドロワー内のコンテナ要素
     sx={{
      width:'300px',
      textAlign:'center'
     }}
     >
      <List // MUI ドロワーに表示させるリスト
      >
        <LinkButton onClick={onClickToHome} sx={{textAlign:"center"}}>Top</LinkButton>
        <LinkButton onClick={onClickToUserManagement} sx={{textAlign:"center"}}>ユーザー一覧</LinkButton>
        <LinkButton onClick={onClickToSetting} sx={{textAlign:"center"}}>設定</LinkButton>
        <LinkButton onClick={onClickToLogout} sx={{textAlign:"center"}}>ログアウト</LinkButton>
      </List>
     </Box>
    </Drawer>
  );
});