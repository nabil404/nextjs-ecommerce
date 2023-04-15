import {navData} from "@/common/__temp__/Navdata";
import {StyledNavContainer} from "@/components/Layout/SiteHeader/SiteHeaderNav/Navigation/elements"
import MenuItem from "@/components/Layout/SiteHeader/SiteHeaderNav/Navigation/MenuItem";
import {Box} from "@mui/material";

function Navigation() {
  return (
    <Box component={'nav'}>
      <StyledNavContainer as={'ul'}>
        {navData.map((nav, index) => {
          const level = 0
          return <MenuItem key={index} items={nav} level={level}/>
        })}
      </StyledNavContainer>
    </Box>
  );
}

export default Navigation;