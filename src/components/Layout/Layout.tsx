import {PropsWithChildren} from "react";
import MobileTopbar from "@/components/Layout/MobileTopbar";
import MobileNav from "@/components/Layout/MobileNav";
import SiteHeader from "@/components/Layout/SiteHeader";
import CartDrawer from "@/components/Layout/CartDrawer";
import SearchDrawer from "@/components/Layout/SearchDrawer/SearchDrawer";
import {Mobile, DesktopOrTablet} from "@/common/Devices";

function Layout({children}: PropsWithChildren) {
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
      <>{children}</>
    </>
  );
}

export default Layout;