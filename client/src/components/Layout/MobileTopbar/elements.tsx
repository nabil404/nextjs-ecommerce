import {AppBar, Badge, IconButton, styled, Toolbar} from '@mui/material'
import {brown,red} from "@mui/material/colors";
import {NAVBAR_HEIGHT} from "@/common/constants";

export const StyledAppbar = styled(AppBar)`
  && {
    height: ${NAVBAR_HEIGHT}px;
    background: ${brown["400"]};
    box-shadow: none;
  }
`

export const StyledToolbar = styled(Toolbar)`
  && {
    height: 60px;
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
      background: ${red[500]};
    }
  }
`