import {NavigationData} from "@/common/types";
import {MappedTreeData} from "@/common/utils";

export interface VerticalNavigationProps {
  navData: NavigationData[]
  open?: boolean
  isSubmenu?: boolean
  mappedNavigationData: MappedTreeData<NavigationData>
}