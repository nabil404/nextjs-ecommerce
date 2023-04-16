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
        id: 'electronics',
        title: 'Electronics',
        children: [],
      },
      {
        id: 'jewelery',
        title: 'Jewelery',
        children: [],
      },
      {
        id: 'men\'s clothing',
        title: 'Men\'s clothing',
        children: [],
      },
      {
        id: 'women\'s clothing',
        title: 'Women\'s clothing',
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