/**
 * PrimaryButton.jsx
 * 
 * ログインで使ったボタンをatomとしてコンポーネント化
 * ローディング中の表示
 *  →loadingをpropsで受け取る、LoadingButtonにしてローディング中の挙動を追加
 * 入力が空なら不活性にする
 *  →idNumberをpropsで受け取る、disableに追加
 */
import { LoadingButton } from '@mui/lab';
import { memo } from 'react';

export const PrimaryButton = memo((props) => {
  const { onClick, children, loading, id } = props;
  return (
    
    <LoadingButton
    loading={loading}
    disabled={id === ""}
    onClick={onClick}
    variant='contained'
    sx={{"&:hover": {opacity: "0.8"}}}
    >
     {children}
    </LoadingButton>
  );
});