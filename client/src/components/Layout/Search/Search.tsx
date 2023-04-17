import {StyledTextField} from "@/common/elements";
import {InputAdornment} from "@mui/material";
import {Search as SearchIcon} from "@mui/icons-material";

function Search() {
  return (
    <StyledTextField
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon/>
          </InputAdornment>
        ),
      }}
      placeholder={'Search for products...'}
    />
  )
}

export default Search