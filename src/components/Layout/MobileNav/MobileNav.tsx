import {useSelector} from "react-redux";
import {Close} from "@mui/icons-material";
import {selectIsSidebarOpen} from "@/store/features/layout/selectors";
import {StyledIconButton} from "@/components/Layout/MobileNav/elements";
import {DrawerContainer, StyledDrawer} from "@/components/Layout/elements";
import {useAppDispatch} from "@/store";
import {setSidebarStateAction} from "@/store/features/layout/slice";

function MobileNav() {
  const dispatch = useAppDispatch()
  const isSidebarOpen = useSelector(selectIsSidebarOpen)

  const closeButtonClickHandler = () => {
    dispatch(setSidebarStateAction(false))
  }

  return (
    <StyledDrawer open={isSidebarOpen} onClose={closeButtonClickHandler}>
      <DrawerContainer>
        <StyledIconButton onClick={closeButtonClickHandler}>
          <Close/>
        </StyledIconButton>
      </DrawerContainer>
    </StyledDrawer>
  );
}

export default MobileNav;