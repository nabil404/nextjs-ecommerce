import {styled, Drawer, Grid} from "@mui/material";
import {NAVBAR_WIDTH} from "@/common/constants";

export const StyledDrawer = styled(Drawer)`
  && {
    .MuiPaper-root {
      width: 100vw;
      max-width: ${NAVBAR_WIDTH}px;
    }
  }
`

export const DrawerContainer = styled(Grid)`
  position: relative;
  padding: 10px 20px;
`