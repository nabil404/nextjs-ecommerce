import {Container, Grid, styled} from '@mui/material'
import Link from "next/link";

export const HeaderWrapper = styled(Grid)`
  && {
    background: ${props => props.theme.palette.grey[200]};
    height: 2rem;
  }
`

export const StyledContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledLink = styled(Link)`
  && {
    color: ${props => props.theme.palette.grey[600]};
    &:hover {
      color: ${props => props.theme.palette.grey[800]};
    }
  }
`