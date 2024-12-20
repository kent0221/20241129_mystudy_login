/**
 * UserCard.jsx
 * 
 * UserManagement.jsxにあったユーザーカードをコンポーネント分割したもの
 * 画像・名前・フルネーム・クリックイベントをpropsとして受け取る
 * 
 * クリックイベント
 * ・onClick={()=>onClick(id)}とする
 *  →アロー関数にすることで、引数を入れた関数が読み取れるようになる
 */
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { memo } from 'react';

export const UserCard = memo((props) => {
  const { id, onClick, imgUrl, username, name } = props;
  return (
    <>
      {/* 
        card: MUI カードタイプのコンポーネント
        cardmedia: Cardの中に入れるimg要素
        cardcontent: Cardの中に入れるテキストなどのコンテナ要素
      */}
      <Card
      onClick={()=>onClick(id)}
      sx={{
        width:'260px',
        height:'260px',
        borderRadius:'10px',
        boxShadow:'0 0 5px #ccc',
        textAlign:'center',
        p:3,
        '&:hover':{
          cursor:'pointer',
          opacity:'0.8'
        }
      }}
      >
        <CardMedia
        component='img'
        image={imgUrl}
        sx={{
          width:'160px',
          height:'160px',
          borderRadius:'50%',
          m: '0 auto'
        }}
        />
        <CardContent>
          <Typography variant="h6" sx={{fontWeight:'bold'}}>{username}</Typography>
          <Typography variant="body2" sx={{color:'gray'}}>{name}</Typography>
        </CardContent>
      </Card> 
    </>
  );
});