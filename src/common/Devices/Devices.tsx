import {PropsWithChildren} from "react";
import {useWindowSize} from "@/hooks/useWindowSize";
import {WindowSize} from "@/common/constants";

export const Mobile = ({children}: PropsWithChildren) => {
  const {width} = useWindowSize()
  if (width <= WindowSize.MOBILE) return <>{children}</>
  return <></>
}

export const Tablet = ({children}: PropsWithChildren) => {
  const {width} = useWindowSize()
  if (width >= WindowSize.MOBILE && width <= WindowSize.TABLET) return <>{children}</>
  return <></>
}

export const Desktop = ({children}: PropsWithChildren) => {
  const {width} = useWindowSize()
  if (width >= WindowSize.LARGE) return <>{children}</>
  return <></>
}

export const DesktopOrTablet = ({children}: PropsWithChildren) => {
  const {width} = useWindowSize()
  if (width >= WindowSize.MOBILE) return <>{children}</>
  return <></>
}