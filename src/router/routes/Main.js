import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const ProductsManagement = lazy(() => import('../../views/pages/main/ProductsManagement'))
const UsersManagement = lazy(() => import('../../views/pages/main/UsersManagement'))

const MainRoutes = [
  {
    path: '/main/products-management',
    element: <ProductsManagement />
  },
  {
    path: '/main/users-management',
    element: <UsersManagement/>
  }
]

export default MainRoutes