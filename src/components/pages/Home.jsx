import { memo } from "react";

import { HeaderLayout } from "../templates/HeaderLayout";

export const Home = memo(() => {
  
  return (
    <HeaderLayout>
      <p>ホームページ</p>
    </HeaderLayout>
  )
});