import {List, styled} from "@mui/material";
import {NAVBAR_HEIGHT} from "@/common/constants";

export const DropDownList = styled(List, {
  shouldForwardProp: prop => !prop.toString().startsWith('$')
})<{ $level: number, $show: boolean }>`
  position: absolute;
  top: ${props => props.$level > 1 ? '-8px' : `${NAVBAR_HEIGHT}px`};;
  left: ${props => props.$level > 1 ? '100%' : 'auto'};
  min-width: 15rem;
  border-radius: 2px;
  box-shadow: ${props=>props.theme.shadows[1]};
  display: ${props => props.$show ? 'block' : 'none'};
`

