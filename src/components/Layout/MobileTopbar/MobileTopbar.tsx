import {Typography, Badge} from "@mui/material";
import {StyledAppbar, StyledBadge, StyledIconButton, StyledToolbar} from "@/components/Layout/MobileTopbar/elements";
import {Menu, ShoppingCart, Search} from '@mui/icons-material'

function MobileTopbar() {
  return (
    <StyledAppbar position="static">
      <StyledToolbar>
        <StyledIconButton size="large" sx={{mr: 2}}>
          <Menu/>
        </StyledIconButton>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          Shop
        </Typography>
        <StyledIconButton size="large">
          <Search/>
        </StyledIconButton>
        <StyledIconButton size="large">
          <StyledBadge badgeContent={4}>
            <ShoppingCart/>
          </StyledBadge>
        </StyledIconButton>
      </StyledToolbar>
    </StyledAppbar>
  );
}

export default MobileTopbar;