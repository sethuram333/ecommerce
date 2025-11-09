
import { createHashRouter ,RouterProvider} from 'react-router-dom'
import AppLayout from './AppLayout'
import Product from './Components/Product/Product'
import Home from './pages/Home/Home'
import NotFound from './Components/NotFound/NotFound'
import ProductDetails from './Components/productDetails/ProductDetails'
import ShoppingCart from './Components/shoppingcart/ShoppingCart'







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
          path:'shoppingcart',
          element:<ShoppingCart/>,
           children: [
            {
              path: 'products', // This creates /shoppingcart/products
              element: <Product /> // or create a different component if needed
            }
          ]
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
