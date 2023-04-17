import {AppBar, Badge, Container, IconButton, styled, Toolbar} from '@mui/material'
import {brown} from "@mui/material/colors";
import {blue} from "@mui/material/colors";
import {NAVBAR_HEIGHT} from "@/common/constants";

export const StyledAppbar = styled(AppBar)`
  && {
    background: ${brown["700"]};
    box-shadow: none;
    height: ${NAVBAR_HEIGHT}px;
  }
`

export const StyledContainer = styled(Container)`
  height: 100%;
`

export const StyledToolbar = styled(Toolbar)`
  && {
    padding: 0;
    margin: auto 0;
    gap: 10rem;
    min-height: auto;
    height: 100%;
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