import {AppBar, Badge, IconButton, styled, Toolbar} from '@mui/material'
import {brown} from "@mui/material/colors";
import {blue} from "@mui/material/colors";
import {NAVBAR_HEIGHT} from "@/common/constants";

export const StyledAppbar = styled(AppBar)`
  && {
    background: ${brown["700"]};
    box-shadow: none;
  }
`

export const StyledToolbar = styled(Toolbar)`
  && {
    height: ${NAVBAR_HEIGHT}px;
    padding: 0;
    margin: 0;
    gap: 10rem;
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