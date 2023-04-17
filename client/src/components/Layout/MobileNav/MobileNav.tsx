import {useMemo} from "react";
import {useSelector} from "react-redux";
import {Divider} from '@mui/material'
import {Close} from "@mui/icons-material";
import {selectIsSidebarOpen} from "@/store/features/layout/selectors";
import {
  StyledIconButton,
  StyledLoginButton,
  StyledRegisterButton,
  AuthButtonContainer,
  NavigationContainer,
} from "@/components/Layout/MobileNav/elements";
import {DrawerContainer, StyledDrawer} from "@/components/Layout/elements";
import {useAppDispatch} from "@/store";
import {setSidebarStateAction} from "@/store/features/layout/slice";
import VerticalNavigation from "@/components/VerticalNavigation";
import {NavigationData} from "@/common/types";
import {TreeFlattener} from "@/common/utils";
import {navData} from "@/common/__temp__/Navdata";

function MobileNav() {
  const dispatch = useAppDispatch()
  const isSidebarOpen = useSelector(selectIsSidebarOpen)

  const mappedNavigation = useMemo(() => new TreeFlattener<NavigationData>(navData).mapTreeData(), [])

  const closeButtonClickHandler = () => {
    dispatch(setSidebarStateAction(false))
  }


  return (
    <StyledDrawer open={isSidebarOpen} onClose={closeButtonClickHandler}>
      <DrawerContainer>
        <StyledIconButton onClick={closeButtonClickHandler}>
          <Close/>
        </StyledIconButton>
        <AuthButtonContainer>
          <StyledLoginButton variant={'contained'} disableElevation>Login</StyledLoginButton>
          <Divider orientation="vertical">
            -or-
          </Divider>
          <StyledRegisterButton variant={'contained'} disableElevation>Register</StyledRegisterButton>
        </AuthButtonContainer>
        <NavigationContainer>
          <VerticalNavigation navData={navData} mappedNavigationData={mappedNavigation}/>
        </NavigationContainer>
      </DrawerContainer>
    </StyledDrawer>
  );
}

export default MobileNav;