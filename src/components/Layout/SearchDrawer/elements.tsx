import {styled, Drawer, IconButton, Container} from "@mui/material";

export const StyledDrawer = styled(Drawer)`
  && {
    .MuiPaper-root {
      width: 100vw;
    }
    .MuiBackdrop-root {
      background: transparent;
    }
  }
`

export const DrawerContainer = styled(Container)`
  && {
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 4rem;
  }
`

export const StyledIconButton = styled(IconButton)`
  && {
    .MuiSvgIcon-root {
      font-size: 25px;
    }
  }

`