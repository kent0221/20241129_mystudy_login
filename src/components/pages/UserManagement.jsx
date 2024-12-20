/**
 * UserManagement.jsx
 * 
 * ユーザー情報を表示するページ
 * ユーザー情報：JSON PlaceholderのUsersデータを表示させる→カスタムフック化
 * ユーザーカード：organism化→map処理で表示
 * ローディング中：ローディングのアイコンを表示＝circularprogress
 * 
 * ユーザーカードをクリック：クリックされたユーザー情報を保持する→カスタムフック化
 * モーダル：organism化
 */
import { memo, useEffect, useState } from "react";
import { Box, CircularProgress, Grid2 } from "@mui/material";

import { HeaderLayout } from "../templates/HeaderLayout";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDialog } from "../organisms/user/UserDialog";
import { useSelectedUser } from "../../hooks/useSelectedUser";

export const UserManagement = memo(() => {
  // カスタムフックを利用
  const {users, loading, getUsers} = useAllUsers();
  const {selectedUser, onOpenSelectedUser} = useSelectedUser();

  // State管理：モーダル表示
  const [open, setOpen] = useState(false);

  // 副作用の処理（表示に関係のない処理）：JSONPlaceholderからユーザー情報を取得する
  useEffect(() => {
    const fetchData = async () => {
      await getUsers();
    }
    fetchData();
  }, [getUsers])

  // クリックイベント：モーダル開く
  const onClickUserCard =(id) => {
    onOpenSelectedUser({users, id, setOpen});
  }

  // クリックイベント：モーダル閉じる
  const handleCloseModal = () => {
    setOpen(false)
  }
  
  return (
    <HeaderLayout>
      {loading ? (
        <> 
        {/* loading=trueの時→ローディンングのアイコンを表示 */}
          <Box
          sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'`100vh'
          }}
          >
            <CircularProgress/>
          </Box>
        </>
      ) : (
        <>
          {/* loading=falseの時→UserCardを表示
          ユーザー情報一覧
            grid container:グリッド表示の親要素
            grid item:グリッド表示の子要素
            */}
          <Grid2 container
          justifyContent='center'
          spacing={2.5}
          sx={{pt: 3}}
          >
            {users.map((user)=> (
                <Grid2 item 
                key={user.id}
                xs={12} sm={6} md={6} lg={3}
                >
                  <UserCard
                  id={user.id}
                  onClick={onClickUserCard} 
                  imgUrl='https://picsum.photos/800' 
                  username={user.username} 
                  name={user.name}
                  />
                </Grid2>
              )
            )}
          </Grid2>

          {/* モーダル：ユーザー情報詳細 */}
           <UserDialog 
           open={open} 
           onClose={handleCloseModal}
           user={selectedUser}
           />
        </>
      )}
    </HeaderLayout>
  )
});