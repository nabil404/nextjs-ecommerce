import SiteHeaderTop from "@/components/Layout/SiteHeader/SiteHeaderTop";
import SiteHeaderMiddle from "@/components/Layout/SiteHeader/SiteHeaderMiddle";
import SiteHeaderNav from "@/components/Layout/SiteHeader/SiteHeaderNav";

function SiteHeader() {
  return (
    <>
      <SiteHeaderTop/>
      <SiteHeaderMiddle/>
      <SiteHeaderNav/>
    </>

  );
}

export default SiteHeader;