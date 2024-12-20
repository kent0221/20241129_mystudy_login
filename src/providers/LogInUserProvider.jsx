/**
 * LoginUserProvider.jsx
 * 
 * ログインしたユーザーの情報を保持するContextを作成
 */

import { createContext, useContext, useState } from "react";

export const LoginUserContext = createContext();

// 作成したコンテキストを呼び出すための関数（カスタムフック化）
export const useLoginUserContext = () => useContext(LoginUserContext);

export const LoginUserProvider = (props) => {
  const { children } = props;
  const [ loginUser, setLoginUser ] = useState();
  
  return (
      <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
       { children }
      </LoginUserContext.Provider>
  );
};