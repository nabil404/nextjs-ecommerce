import {Stack, styled, Typography} from "@mui/material";

export const StyledContainer = styled(Stack)`
  min-width: 10rem;
`
export const StyledHeader = styled(Typography)`
  font-size: 14px;
  color: ${props => props.theme.palette.grey[500]};
`

export const StyledNumber = styled(Typography)`
  font-size: 18px;
  color: ${props => props.theme.palette.grey[700]};
`