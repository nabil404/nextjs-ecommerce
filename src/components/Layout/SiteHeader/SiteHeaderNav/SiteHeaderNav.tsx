import {
  StyledAppbar,
  StyledBadge,
  StyledContainer,
  StyledIconButton,
  StyledToolbar
} from "@/components/Layout/SiteHeader/SiteHeaderNav/elements";
import {FavoriteBorder, ShoppingCart, Person2Outlined} from "@mui/icons-material";
import {Grid} from "@mui/material";
import {useAppDispatch} from "@/store";
import {setCartStateAction} from "@/store/features/layout/slice";
import Navigation from "@/components/Layout/SiteHeader/SiteHeaderNav/Navigation";

function SiteHeaderNav() {
  const dispatch = useAppDispatch()

  const cartClickHandler = () => {
    dispatch(setCartStateAction(true))
  }

  return (
    <StyledAppbar position="sticky">
      <StyledContainer>
        <StyledToolbar>
          <Grid flexGrow={1}><Navigation/></Grid>
          <Grid display={'flex'} gap={1}>
            <StyledIconButton size="large">
              <StyledBadge badgeContent={4}>
                <FavoriteBorder/>
              </StyledBadge>
            </StyledIconButton>
            <StyledIconButton size="large" onClick={cartClickHandler}>
              <StyledBadge badgeContent={4}>
                <ShoppingCart/>
              </StyledBadge>
            </StyledIconButton>
            <StyledIconButton size="large">
              <Person2Outlined/>
            </StyledIconButton>
          </Grid>
        </StyledToolbar>
      </StyledContainer>
    </StyledAppbar>
  );
}

export default SiteHeaderNav;