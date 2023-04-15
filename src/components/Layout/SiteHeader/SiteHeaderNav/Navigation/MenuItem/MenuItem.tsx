import {useState} from "react";
import {MenuItemProps} from "@/components/Layout/SiteHeader/SiteHeaderNav/Navigation/MenuItem/types";
import {
  NavigationTitle,
  StyledList,
  StyledLink,
  StyledItem
} from "@/components/Layout/SiteHeader/SiteHeaderNav/Navigation/MenuItem/elements";
import Link from "next/link";
import {useRouter} from "next/router";
import DropDown from "@/components/Layout/SiteHeader/SiteHeaderNav/Navigation/MenuItem/DropDown";
import {Grid, ListItemButton, ListItemIcon, Typography} from "@mui/material";
import {ChevronRight} from "@mui/icons-material";

function MenuItem({items, level}: MenuItemProps) {
  const router = useRouter()
  const [dropdown, setDropdown] = useState(false);
  const hasChild = !!items.children?.length
  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <StyledList onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {
        level === 0 ? (
          <>
            <Link href={items.url || ''}>
              <NavigationTitle $active={router.pathname === items.url}>{items.title}</NavigationTitle>
            </Link>
            {
              hasChild && (<DropDown subMenu={items.children || []} dropdown={dropdown} level={level}/>)
            }
          </>
        ) : (
          <>
            <StyledLink href={items.url || ''}>
              <StyledItem disableRipple>
                <Typography>{items.title}</Typography>
                {
                  hasChild && (
                    <ListItemIcon>
                      <ChevronRight fontSize={'small'}/>
                    </ListItemIcon>
                  )
                }
              </StyledItem>
            </StyledLink>
            {
              hasChild && (<DropDown subMenu={items.children || []} dropdown={dropdown} level={level}/>)
            }
          </>
        )
      }
    </StyledList>
  )
}

export default MenuItem
