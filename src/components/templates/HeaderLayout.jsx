/**
 * HeaderLayout.jsx
 * 
 * ヘッダーのみ適用したレイアウト
 * テンプレートなので、organisms以下で構成
 * データは含まずレイアウト構成のみ
 */
import { memo } from 'react';

import { Header } from '../organisms/Header';

export const HeaderLayout = memo((props) => {
  const { children } = props;
  return (
      <>
      <Header/>
      {children}
      </> 
  );
});