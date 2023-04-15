import {DropDownProps} from "@/components/Layout/SiteHeader/SiteHeaderNav/Navigation/MenuItem/DropDown/types";
import MenuItem from "@/components/Layout/SiteHeader/SiteHeaderNav/Navigation/MenuItem";
import {DropDownList} from "@/components/Layout/SiteHeader/SiteHeaderNav/Navigation/MenuItem/DropDown/elements";

function DropDown({level, subMenu, dropdown}: DropDownProps) {
  level = level + 1;
  return (
    <DropDownList $level={level} $show={dropdown}>
      {subMenu.map((nav, index) => (
        <MenuItem
          items={nav}
          key={index}
          level={level}
        />
      ))}
    </DropDownList>
  );
}

export default DropDown