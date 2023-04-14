import {useState, memo, useMemo} from "react";
import {List} from "@mui/material";
import Link from "next/link";
import {ExpandMore, ChevronRight} from "@mui/icons-material";
import VerticalNavigation from "@/components/VerticalNavigation";
import ListItemButton from "@mui/material/ListItemButton";
import {NavigationItemProps} from "@/components/VerticalNavigation/NavigationItem/types";
import {
  StyledIcon,
  StyledListItemIcon,
  StyledListItemText
} from "@/components/VerticalNavigation/NavigationItem/elements";

function NavigationItem({data, mappedNavigationData}: NavigationItemProps) {
  const [isItemOpen, setIsItemOpen] = useState(false)
  const {id, title, children, url, disabled, icon} = data
  const hasChild = !!children?.length

  const level = useMemo(() => mappedNavigationData ? (url ? mappedNavigationData[url] : mappedNavigationData[id]).level : 0, [id, mappedNavigationData, url])
  const handleClick = () => {
    setIsItemOpen(o => !o)
  }

  return (
    <>
      {hasChild ? (
        <List disablePadding>
          <ListItemButton onClick={handleClick} disableRipple>
            {icon && (
              <StyledListItemIcon $isOpen={isItemOpen} $level={level}>
                <StyledIcon as={icon}/>
              </StyledListItemIcon>
            )}
            <StyledListItemText>{title}</StyledListItemText>
            <StyledListItemIcon $isOpen={isItemOpen}>
              {isItemOpen ? <ExpandMore/> : <ChevronRight/>}
            </StyledListItemIcon>
          </ListItemButton>
          <VerticalNavigation
            isSubmenu={true}
            open={isItemOpen}
            navData={children}
            mappedNavigationData={mappedNavigationData}
          />
        </List>
      ) : (
        <Link href={url || ''}>
          <ListItemButton disableRipple>
            {icon && (
              <StyledListItemIcon $level={level > 0 ? level + 1 : level} $isOpen={isItemOpen}>
                {icon && <StyledIcon as={icon}/>}
              </StyledListItemIcon>
            )}
            <StyledListItemText $level={icon ? 0 : level}>{title}</StyledListItemText>
          </ListItemButton>
        </Link>
      )}
    </>
  )
}

export default memo(NavigationItem);