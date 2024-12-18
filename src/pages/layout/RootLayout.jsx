import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../global/Header'
import Footer from '../global/Footer'
import { Toaster } from 'react-hot-toast'
import CartProvider from '../../provider/CartProvider'

const RootLayout = () => {
    return (
        <main className='min-h-screen container mx-auto'>
            <CartProvider>
                <Toaster position="top-right"
                    reverseOrder={false} />
                <Header />
                {
                    <Outlet />
                }
                <Footer />
            </CartProvider>
        </main>
    )
}

export default RootLayout