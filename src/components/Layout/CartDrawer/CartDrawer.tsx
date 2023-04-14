import {useSelector} from "react-redux";
import {Close} from "@mui/icons-material";
import {selectIsCartOpen} from "@/store/features/layout/selectors";
import {StyledIconButton} from "@/components/Layout/CartDrawer/elements";
import {DrawerContainer, StyledDrawer} from "@/components/Layout/elements";
import {useAppDispatch} from "@/store";
import {setCartStateAction} from "@/store/features/layout/slice";

function CartDrawer() {
  const dispatch = useAppDispatch()
  const isCartOpen = useSelector(selectIsCartOpen)

  const closeButtonClickHandler = () => {
    dispatch(setCartStateAction(false))
  }

  return (
    <StyledDrawer open={isCartOpen} onClose={closeButtonClickHandler} anchor={'right'}>
      <DrawerContainer>
        <StyledIconButton onClick={closeButtonClickHandler}>
          <Close/>
        </StyledIconButton>
      </DrawerContainer>
    </StyledDrawer>
  );
}

export default CartDrawer;