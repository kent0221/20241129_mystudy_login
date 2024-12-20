/**
 * useLoginUser.js
 * 
 * ログインユーザーのContext管理をカスタムフック化
 */

import { useLoginUserContext } from "../providers/LogInUserProvider";

export const useLoginUser = () => {
 // Context管理
 const {loginUser, setLoginUser} =useLoginUserContext();

 return { loginUser, setLoginUser }
};