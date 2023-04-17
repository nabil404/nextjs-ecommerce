import {NavigationData} from "@/common/types";
import {MappedTreeData} from "@/common/TreeFlattener";

export interface NavigationItemProps {
  data: NavigationData,
  mappedNavigationData: MappedTreeData<NavigationData>
}