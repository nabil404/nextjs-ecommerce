import {styled, IconButton, Button, Grid} from "@mui/material";
import {green, blue} from "@mui/material/colors";

export const StyledIconButton = styled(IconButton)`
  && {
    position: absolute;
    right: 10px;
    top: 10px;

    .MuiSvgIcon-root {
      font-size: 25px;
    }
  }
`

export const AuthButtonContainer = styled(Grid)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 4rem;
  margin-top: 10px;
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
  //padding: 0 1rem;
`