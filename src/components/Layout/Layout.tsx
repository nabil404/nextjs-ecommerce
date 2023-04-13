import {PropsWithChildren} from "react";
import MobileTopbar from "@/components/Layout/MobileTopbar";
import {Desktop, Mobile} from "@/common/elements";
import MobileNav from "@/components/Layout/MobileNav";
import SiteHeader from "@/components/Layout/SiteHeader";

function Layout({children}: PropsWithChildren) {
  return (
    <>
      <Mobile>
        <MobileTopbar/>
        <MobileNav/>
      </Mobile>
      <Desktop>
        <SiteHeader/>
      </Desktop>
      <>{children}</>
    </>
  );
}

export default Layout;