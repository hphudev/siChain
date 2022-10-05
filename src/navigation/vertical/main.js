// ** Icons Import
import { Home, Circle, Sun, Package, User, Users } from 'react-feather'

export default [
  {
    id: 'productsManagement',
    title: 'Quản lý sản phẩm',
    icon: <Package size={20} />,
    // badge: 'light-warning',
    // badgeText: '2',
    navLink: '/main/products-management'
    // children: [
    //   {
    //     id: 'productsManagement',
    //     title: 'Quản lý sản phẩm',
    //     icon: <Package size={12} />,
    //   }
      // {
      //   id: 'eCommerceDash',
      //   title: 'eCommerce',
      //   icon: <Circle size={12} />,
      //   navLink: '/dashboard/ecommerce'
      // }
    // ]
  },
  {
    id: 'accountManagement',
    title: 'Quản lý người dùng',
    icon: <Users size={20} />,
    navLink: 'main/users-management'
  }
]
