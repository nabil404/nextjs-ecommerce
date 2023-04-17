import {createElement, useCallback} from "react";
import {Collapse, List} from "@mui/material";
import {VerticalNavigationProps} from "@/components/VerticalNavigation";
import NavigationItem from "@/components/VerticalNavigation/NavigationItem";

function VerticalNavigation({open, isSubmenu, navData, mappedNavigationData}: VerticalNavigationProps) {
  const Navigation = useCallback((props: any) => {
    if (!isSubmenu) return createElement(List, {...props})
    return createElement(Collapse, {
      ...props,
      in: open,
      timeout: 'auto',
      unmountOnExit: true,
    })
  }, [isSubmenu, open])

  return (
    <Navigation>
      {navData.map(data => (
        <NavigationItem key={data.id} data={data} mappedNavigationData={mappedNavigationData}/>
      ))}
    </Navigation>
  );
}

export default VerticalNavigation;