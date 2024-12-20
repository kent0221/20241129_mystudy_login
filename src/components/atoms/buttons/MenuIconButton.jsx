import { Box } from '@mui/material';
import { memo } from 'react';
import MenuIcon from "@mui/icons-material/Menu";

export const MenuIconButton = memo((props) => {
  const { onClick } = props;
  return (
    <Box // MUI メニューアイコンのラッパー
    sx={{
      display:{xs:'block',md:'none'}
    }}
    >
      <MenuIcon // MUI メニューアイコンを使用
      onClick={onClick}
      />
    </Box> 
  );
});