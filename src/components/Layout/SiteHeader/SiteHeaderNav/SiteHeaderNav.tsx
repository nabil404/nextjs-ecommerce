import {
  StyledAppbar,
  StyledBadge,
  StyledIconButton,
  StyledToolbar
} from "@/components/Layout/SiteHeader/SiteHeaderNav/elements";
import {FavoriteBorder, ShoppingCart, Person2Outlined} from "@mui/icons-material";
import {Container, Typography, Grid} from "@mui/material";
import {useAppDispatch} from "@/store";
import {setCartStateAction} from "@/store/features/layout/slice";

function SiteHeaderNav() {
  const dispatch = useAppDispatch()

  const cartClickHandler = () => {
    dispatch(setCartStateAction(true))
  }

  return (
    <StyledAppbar position="static">
      <Container>
        <StyledToolbar>
          <Typography variant="h6">
            Shop by Category
          </Typography>
          <Grid sx={{flexGrow: 1}}></Grid>
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
      </Container>
    </StyledAppbar>
  );
}

export default SiteHeaderNav;