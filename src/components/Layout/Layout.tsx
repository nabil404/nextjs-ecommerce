import {PropsWithChildren} from "react";
import MobileTopbar from "@/components/Layout/MobileTopbar";
import {Mobile} from "@/common/elements";
import MobileNav from "@/components/Layout/MobileNav";

function Layout({children}: PropsWithChildren) {
  return (
    <>
      <Mobile>
        <MobileTopbar/>
        <MobileNav/>
      </Mobile>
      <>{children}</>
    </>
  );
}

export default Layout;