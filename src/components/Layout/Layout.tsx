import {PropsWithChildren} from "react";
import MobileTopbar from "@/components/Layout/MobileTopbar";
import {Desktop, Mobile} from "@/common/elements";
import MobileNav from "@/components/Layout/MobileNav";
import SiteHeader from "@/components/Layout/SiteHeader";
import CartDrawer from "@/components/Layout/CartDrawer";
import SearchDrawer from "@/components/Layout/SearchDrawer/SearchDrawer";

function Layout({children}: PropsWithChildren) {
  return (
    <>
      <Mobile>
        <MobileTopbar/>
        <MobileNav/>
        <SearchDrawer/>
      </Mobile>
      <Desktop>
        <SiteHeader/>
      </Desktop>
      <CartDrawer/>
      <>{children}</>
    </>
  );
}

export default Layout;