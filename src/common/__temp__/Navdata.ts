import {NavigationData} from "@/common/types";

export const navData: NavigationData[] = [
  {
    id: 'home',
    title: 'Home',
    url: '/',
    children: []
  },
  {
    id: 'category',
    title: 'Categories',
    children: [
      {
        id: 'category-1',
        title: 'Category 1',
        children: [],
      },
      {
        id: 'category-2',
        title: 'Category 2',
        children: [],
      },
      {
        id: 'category-3',
        title: 'Category 3',
        children: [],
      },
      {
        id: 'category-4',
        title: 'Category 4',
        children: [],
      }
    ]
  },
  {
    id: 'brand',
    title: 'Brands',
    children: [
      {
        id: 'brand-1',
        title: 'Brand 1',
        children: [],
      },
      {
        id: 'brand-2',
        title: 'Brand 2',
        children: [],
      },
      {
        id: 'brand-3',
        title: 'Brand 3',
        children: [],
      },
      {
        id: 'brand-4',
        title: 'Brand 4',
        children: [],
      }
    ]
  },
  {
    id: 'about',
    url: '/about-us',
    title: 'About Us',
    children: []
  }
]