import {StyledContainer} from "@/components/Layout/SiteHeader/SiteHeaderMiddle/elements";
import {Typography} from "@mui/material";
import Search from "@/components/Layout/Search";
import CustomerService from "@/components/Layout/CustomerService";

function SiteHeaderMiddle() {
  return (
    <StyledContainer>
      <Typography variant={'h5'}>Shop</Typography>
      <Search/>
      <CustomerService/>
    </StyledContainer>
  );
}

export default SiteHeaderMiddle;