import {AppBar, Badge, IconButton, styled, Toolbar} from '@mui/material'
import {brown} from "@mui/material/colors";
import {blue} from "@mui/material/colors";

export const StyledAppbar = styled(AppBar)`
  && {
    background: ${brown["700"]};
    box-shadow: none;
  }
`

export const StyledToolbar = styled(Toolbar)`
  && {
    height: 60px;
    padding: 0;
    margin: 0;
  }
`

export const StyledIconButton = styled(IconButton)`
  && {
    color: ${props => props.theme.palette.common.white};
  }
`

export const StyledBadge = styled(Badge)`
  && {
    .MuiBadge-badge {
      background: ${blue[500]};
    }
  }
`