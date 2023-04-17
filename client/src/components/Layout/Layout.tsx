import {PropsWithChildren} from "react";
import MobileTopbar from "@/components/Layout/MobileTopbar";
import MobileNav from "@/components/Layout/MobileNav";
import SiteHeader from "@/components/Layout/SiteHeader";
import CartDrawer from "@/components/Layout/CartDrawer";
import SearchDrawer from "@/components/Layout/SearchDrawer/SearchDrawer";
import {Mobile, DesktopOrTablet, useMobileSize} from "@/common/Devices";
import {LayoutWrapper} from "@/components/Layout/elements";

function Layout({children}: PropsWithChildren) {
  const isMobile = useMobileSize();

  return (
    <>
      <Mobile>
        <MobileTopbar/>
        <MobileNav/>
        <SearchDrawer/>
      </Mobile>
      <DesktopOrTablet>
        <SiteHeader/>
      </DesktopOrTablet>
      <CartDrawer/>
      <LayoutWrapper $isMobile={isMobile}>{children}</LayoutWrapper>
    </>
  );
}

export default Layout;