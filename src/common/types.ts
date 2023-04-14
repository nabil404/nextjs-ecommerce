import {ElementType} from 'react'

export interface NavigationData {
  id: string
  icon?: ElementType
  url?: string
  title: string
  children?: NavigationData[]
  disabled?: boolean
}
