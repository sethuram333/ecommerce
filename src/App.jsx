
import { createHashRouter ,RouterProvider} from 'react-router-dom'
import AppLayout from './AppLayout'
import Product from './Components/Product/Product'
import Home from './pages/Home/Home'
import NotFound from './Components/NotFound/NotFound'
import ProductDetails from './Components/productDetails/ProductDetails'
import ShoppingCart from './Components/Cart/ShoppingCart'




const App = () => {

  const router = createHashRouter([
    {
      path:'/',
      element:<AppLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        } ,
        {
         path:'products',
         element:<Product/>
        },
        {
          path:'product-details/:id',
          element:<ProductDetails/>

        } ,
        {
          path:'shopping-cart',
          element:<ShoppingCart/>
        }
      ],
      errorElement:<NotFound/>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
