/**
 * SnackbarProvider.jsx
 * 
 * ページ遷移してもメッセージを表示できるようにコンテキスト管理する
 * 実際のメッセージはApp.jsxで。
 * ここでは状態の管理を行う
 */
import { createContext, useContext, useState } from "react";

export const SnackbarContext = createContext();

// 作成したコンテキストを呼び出すための関数（カスタムフック化）
export const useSnackbarContext = () => useContext(SnackbarContext);

export const SnackbarProvider = (props) => {
  const { children } = props;
  // コンテキスト（グローバルなState）管理
  const [ snackbar, setSnackbar ] = useState({
    open: false,
    severity: "success",
    message:"ダミー"
  });
  // Snackbarを閉じる動作
  const handleClose = (reason) => {
    if (reason === "clickaway"){ // （Snackbar以外を触れても何も変わらない）
      return;
    }
    setSnackbar({...snackbar, open:false})
  }
  
  return (
      <SnackbarContext.Provider value={{ snackbar, setSnackbar, handleClose }}>
       { children }
      </SnackbarContext.Provider>
  );
};
