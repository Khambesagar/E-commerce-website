import React from 'react'

//Add toaster
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Outlet } from 'react-router' // by default take children components and show
import Navbar from '../Navbar'
import Footer from '../Footer'
import Show_navbar_product from '../Show_navbar_products'

import { CartProvider } from '../cart_data/CartContext';// use for cart #(context api)
import ScrollButton from '../ScrollButton';

function Layout() {
   return (
      <>
         <CartProvider> 
              <ScrollButton/>
              
            <section className='wrapper conatainer flex flex-col min-h-screen'>
               <header className='sticky top-0 z-50'>
                  <Navbar />
               </header>

               <ToastContainer />

               <div className='mx-2'>
                  <Show_navbar_product />
               </div>


               {/* main  */}
               <main className='flex-1 mx-2 mb-3 flex-grow'>
                  <Outlet />
               </main>


               {/* footer  */}
               <footer className='bottom-0'>
                  <Footer />
               </footer>
            </section>
         </CartProvider>
      </>
   )
}

export default Layout