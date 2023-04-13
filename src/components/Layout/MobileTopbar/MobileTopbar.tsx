import {Typography, Badge} from "@mui/material";
import {StyledAppbar, StyledBadge, StyledIconButton, StyledToolbar} from "@/components/Layout/MobileTopbar/elements";
import {Menu, ShoppingCart, Search} from '@mui/icons-material'
import {useAppDispatch} from "@/store";
import {setCartStateAction, setSidebarStateAction} from "@/store/features/layout/slice";

function MobileTopbar() {
  const dispatch = useAppDispatch()
  const menuButtonClickHandler = () => {
    dispatch(setSidebarStateAction(true))
  }

  const cartButtonClickHandler = () => {
    dispatch(setCartStateAction(true))
  }

  return (
    <StyledAppbar position="static">
      <StyledToolbar>
        <StyledIconButton size="large" sx={{mr: 2}} onClick={menuButtonClickHandler}>
          <Menu/>
        </StyledIconButton>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          Shop
        </Typography>
        <StyledIconButton size="large">
          <Search/>
        </StyledIconButton>
        <StyledIconButton size="large" onClick={cartButtonClickHandler}>
          <StyledBadge badgeContent={4}>
            <ShoppingCart/>
          </StyledBadge>
        </StyledIconButton>
      </StyledToolbar>
    </StyledAppbar>
  );
}

export default MobileTopbar;