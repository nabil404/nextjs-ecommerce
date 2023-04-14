import {styled, ListItemText, ListItemIcon, SvgIcon} from "@mui/material";
import {SUBMENU_OFFSET} from "@/common/constants";

export const StyledListItemText = styled(ListItemText, {
  shouldForwardProp: prop => !prop.toString().startsWith('$'),
})<{ $level?: number }>`
  && {
    & .MuiTypography-root {
      font-weight: 500;
      color: ${({theme}) => theme.palette.grey[800]};
      padding-left: ${({$level}) => ($level ? `${+$level * SUBMENU_OFFSET}px` : 'initial')};
    }
  }
`

export const StyledListItemIcon = styled(ListItemIcon, {
  shouldForwardProp: prop => !prop.toString().startsWith('$'),
})<{ $isOpen?: boolean; $level?: number }>`
  && {
    min-width: auto;
    margin-right: 8px;
    padding-left: ${({$level}) => ($level ? `${+$level * SUBMENU_OFFSET}px` : 'initial')};

    & .MuiSvgIcon-root {
      font-weight: bold;
      fill: ${({$isOpen, theme}) =>
              $isOpen ? theme.palette.grey[800] : theme.palette.grey[600]};
      font-size: 16px;
    }
  }
`

export const StyledIcon = styled(SvgIcon)`
  margin-top: -1px;
`
