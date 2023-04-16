import {Box, Button, Grid, styled, Typography} from "@mui/material";
import {red} from "@mui/material/colors";

export const StyledBannerContainer = styled(Grid, {
  shouldForwardProp: prop => !prop.toString().startsWith('$')
})<{$background:string}>`
  && {
    position: relative;
    height: 700px;
    background: ${props => `url(${props.$background}) no-repeat`};
    background-size: auto 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

`

export const StyledInfo = styled(Box)`
  && {
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: ${props => props.theme.palette.grey[100]};

    a {
      color: ${props => props.theme.palette.grey[300]};
    }
  }

`

export const StyledContent = styled(Typography)`
  && {
    color: ${props => props.theme.palette.grey[100]};
    text-align: center;
    padding: 0 2rem;
  }
`

export const StyledButton = styled(Button)`
  && {
    margin-left: 1rem;
    background: ${red[400]};
  }
`