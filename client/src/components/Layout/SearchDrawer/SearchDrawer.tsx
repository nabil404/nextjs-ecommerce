import {useSelector} from "react-redux";
import {Close} from "@mui/icons-material";
import {selectIsSearchOpen} from "@/store/features/layout/selectors";
import {StyledDrawer, StyledIconButton, DrawerContainer} from "@/components/Layout/SearchDrawer/elements";
import {useAppDispatch} from "@/store";
import {setSearchStateAction} from "@/store/features/layout/slice";
import Search from "@/components/Layout/Search";

function SearchDrawer() {
  const dispatch = useAppDispatch()
  const isSearchOpen = useSelector(selectIsSearchOpen)

  const closeButtonClickHandler = () => {
    dispatch(setSearchStateAction(false))
  }

  return (
    <StyledDrawer open={isSearchOpen} onClose={closeButtonClickHandler} anchor={'top'}>
      <DrawerContainer>
        <Search/>
        <StyledIconButton onClick={closeButtonClickHandler}>
          <Close/>
        </StyledIconButton>
      </DrawerContainer>
    </StyledDrawer>
  );
}

export default SearchDrawer;