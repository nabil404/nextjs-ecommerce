import {ListItem, styled, Typography} from "@mui/material";
import Link from "next/link";
import {NAVBAR_HEIGHT} from "@/common/constants";
import {brown} from "@mui/material/colors";
import ListItemButton from "@mui/material/ListItemButton";

export const StyledList = styled(ListItem)`
  && {
    position: relative;
    padding: 0 5px 0 0;
  }
`
export const NavigationTitle = styled(Typography, {
  shouldForwardProp: prop => !prop.toString().startsWith('$')
})<{ $active?: boolean }>`
  && {
    color: ${props => props.theme.palette.common.white};
    cursor: pointer;
    line-height: ${NAVBAR_HEIGHT}px;
    background: ${props => props.$active ? brown[400] : 'inherit'};
    padding: 0 1rem;
    border-radius: 2px;
    text-align: center;
    width: 100%;

    &:hover {
      background: ${brown[400]};
    }
  }
`

export const StyledLink = styled(Link)`
  color: ${brown[400]};
  width: 100%;
`

export const StyledItem = styled(ListItemButton)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`