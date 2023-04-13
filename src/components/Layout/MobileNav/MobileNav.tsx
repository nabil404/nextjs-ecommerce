import {Drawer} from '@mui/material'
import {useSelector} from "react-redux";
import {selectIsSidebarOpen} from "@/store/features/layout/selectors";

function MobileNav() {
  const isSidebarOpen = useSelector(selectIsSidebarOpen)

  return (
    <Drawer open={isSidebarOpen}>
      <div>Sidebar</div>
    </Drawer>
  );
}

export default MobileNav;