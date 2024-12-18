import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootLayout from './pages/layout/RootLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/global/ErrorPage.jsx';
import CartPage from './pages/CartPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import PrivetRoute from './pages/layout/PrivetRoute.jsx';
import AuthProvider from './provider/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },

      {
        path: "/login",
        element: <Login />,
        // loader: allCountryLoader,
      },
      {
        path: "/register",
        element: <Register />,
        // loader: allCountryLoader,
      },
    ]
  },

  {
    element: <PrivetRoute />,
    children: [
      {
        path: "/dashboard/home",
        element: <Dashboard />,
      },

    ]
  }


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
