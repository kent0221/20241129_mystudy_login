import { ListItemButton, ListItemText } from '@mui/material';
import { memo } from 'react';

export const LinkButton = memo((props) => {
  const { onClick, children, sx } = props;
  return (
    <ListItemButton // MUI リンクのリストアイテムのボタン
    onClick={onClick}
    sx={sx}
    >
      <ListItemText>{children}</ListItemText>
    </ListItemButton> 
  );
});