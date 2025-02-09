import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode,Suspense, lazy  } from 'react'

import Layout from './components/layout_Website/Layout.jsx'
import Carousel from './components/Carousel.jsx'
import Best_electronics_cards from './components/Best_electronics_cards.jsx'

import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Electronics from './components/Electronics.jsx'
import Add_products from './components/admin_Products/Add_products.jsx'
import Update_product from './components/admin_Products/Update_product.jsx'
import Cart_Data from './components/cart_data/Cart_Data.jsx'
import Search_product from './components/Search_product.jsx'
import Product_Details from './components/Product_Details.jsx'
import Mens_Women_cards from './components/fashion\'s/Mens_Women_cards.jsx'
import Mobiles from './components/category_Filter_Products/Mobiles.jsx'
import Laptops from './components/category_Filter_Products/Laptops.jsx'
import Perfumes from './components/category_Filter_Products/Perfumes.jsx'
import About_page from './components/About_page.jsx'
import Contact from './components/Contact.jsx'
import Protecte_Route from './components/Protecte_Route.jsx'
import Watches from './components/category_Filter_Products/Watch.jsx'
import Mens_Fashion from './components/fashion\'s/Mens_Fashion.jsx'
import Womens_Fashion from './components/fashion\'s/Womens_Fashion.jsx'
import All_Fashion_pro from './components/fashion\'s/All_Fashion_pro.jsx'
import Cycle from './components/category_Filter_Products/Cycle.jsx'
import Books from './components/category_Filter_Products/Books.jsx'
import Loader from './components/Loader.jsx'

// LazyLoader
let LazyHome = lazy(() => import('./components/home/Home.jsx'));
let LazyAdmin = lazy(() => import('./components/admin_Products/Admin_Data.jsx'))
//Routing 
const route = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element:
            <Suspense fallback={<Loader/>}>
              <LazyHome />
            </Suspense>,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/signup',
          element: <Signup />,
        },
        {
          path: '/admin_data',
          element: 
          <Suspense fallback={<Loader/>}>
           <Protecte_Route Component={LazyAdmin} />   {/* // Protect Admin Data route */}
        </Suspense>,                                   
        },
        {
          path: '/add_products',
          element: <Add_products />,
        },
        {
          path: '/update_product/:id',
          element: <Update_product />,
        },
        {
          path: '/carousel',
          element: <Carousel/>,
        },
        {
          path: '/best_electronics_cards',
          element: <Best_electronics_cards />,
        },
        {
          path: '/Product_Details/:id',
          element: <Product_Details />
        },
        {
          path: '/mobiles',
          element: <Mobiles />,
        },
        {
          path: '/laptops',
          element: <Laptops />,
        },
        {
          path: '/watches',
          element: <Watches />,
        },
        {
          path: '/perfume',
          element: <Perfumes />,
        },
        {
          path: '/mens_Fashion',
          element: <Mens_Fashion />
        },
        {
          path: '/womens_Fashion',
          element: <Womens_Fashion />
        },
        {
          path: '/all_Fashion_pro',
          element: <All_Fashion_pro />
        },

        {
          path: '/Mens_Women_cards',
          element: <Mens_Women_cards />,
        },
        {
          path: "/Electronics",
          element: <Electronics />
        },
        {
          path: "/cycle",
          element: <Cycle />
        },
        {
          path: "/books",
          element: <Books />
        },
        {
          path: '/search_product/:term',
          element: <Search_product />
        },
        {
          path: '/cart_data',
          element: <Protecte_Route Component={Cart_Data} />,  //protect route
        },
        {
          path: '/about',
          element: <About_page />,
        },
        {
          path: '/loader',
          element: <Loader />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },

      ],
    },
    {
      path: '*',
      element: <h1>404 Not Found</h1>,
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
