import {useSelector} from "react-redux";
import {Close, Search} from "@mui/icons-material";
import {InputAdornment} from '@mui/material'
import {selectIsSearchOpen} from "@/store/features/layout/selectors";
import {StyledDrawer, StyledIconButton, DrawerContainer} from "@/components/Layout/SearchDrawer/elements";
import {useAppDispatch} from "@/store";
import {setSearchStateAction} from "@/store/features/layout/slice";
import {StyledTextField} from "@/common/elements";

function SearchDrawer() {
  const dispatch = useAppDispatch()
  const isSearchOpen = useSelector(selectIsSearchOpen)

  const closeButtonClickHandler = () => {
    dispatch(setSearchStateAction(false))
  }

  return (
    <StyledDrawer open={isSearchOpen} onClose={closeButtonClickHandler} anchor={'top'}>
      <DrawerContainer>
        <StyledTextField
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Search/>
              </InputAdornment>
            ),
          }}
          placeholder={'Search for products...'}
        />
        <StyledIconButton onClick={closeButtonClickHandler}>
          <Close/>
        </StyledIconButton>
      </DrawerContainer>
    </StyledDrawer>
  );
}

export default SearchDrawer;