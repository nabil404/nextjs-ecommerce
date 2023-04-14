export const NAVBAR_WIDTH = 350
export const SUBMENU_OFFSET = 6

export enum WindowType {
  LARGE = 'LARGE',
  MOBILE = 'MOBILE',
  TABLET = 'TABLET',
}

export const WindowSize: Record<WindowType, number> = {
  [WindowType.LARGE]: 1440,
  [WindowType.TABLET]: 1024,
  [WindowType.MOBILE]: 768,
}