import {styled, IconButton, Button, Grid} from "@mui/material";
import {green, blue} from "@mui/material/colors";

export const StyledIconButton = styled(IconButton)`
  && {
    position: absolute;
    right: 20px;
    top: 20px;
    .MuiSvgIcon-root {
      font-size: 25px;
    }
  }
`

export const AuthButtonContainer = styled(Grid)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-top: 5rem;
`

export const StyledLoginButton = styled(Button)`
  && {
    background: ${green[300]};

    &:hover {
      background: ${green[400]};
    }
  }
`

export const StyledRegisterButton = styled(Button)`
  && {
    background: ${blue[400]};

    &:hover {
      background: ${blue[500]};
    }
  }
`

export const NavigationContainer = styled(Grid)`
  margin-top: 2rem;
`