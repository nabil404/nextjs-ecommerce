import {HeaderWrapper, StyledContainer, StyledLink} from "@/components/Layout/SiteHeader/SiteHeaderTop/elements";
import {Grid} from "@mui/material";

function SiteHeaderTop() {
  return (
    <HeaderWrapper>
      <StyledContainer>
        <Grid display={'flex'} gap={1}>
          <StyledLink href={'/'}>About Us</StyledLink>
          <StyledLink href={'/'}>Contacts</StyledLink>
          <StyledLink href={'/'}>Store Location</StyledLink>
        </Grid>
      </StyledContainer>
    </HeaderWrapper>
  );
}

export default SiteHeaderTop;