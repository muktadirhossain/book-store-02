import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { cn } from '../../utils/cn'
import useCart from '../../hooks/useCart'

const Header = () => {
    const { cartData } = useCart()
    return (
        <div className='container mx-auto flex flex-row justify-between items-center my-2'>
            <img src={logo} alt="The Buchhandlung " className='h-10 block' />
            {/* Navigation Links */}
            <ul className="flex justify-center items-center gap-x-6">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            cn(
                                'px-4 py-2 rounded-md transition-all duration-300',
                                isActive
                                    ? 'text-white bg-red-500 shadow-md font-semibold'
                                    : 'text-gray-700 hover:text-red-500 hover:bg-gray-100'
                            )
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            cn(
                                'px-4 py-2 rounded-md transition-all duration-300',
                                isActive
                                    ? 'text-white bg-red-500 shadow-md font-semibold'
                                    : 'text-gray-700 hover:text-red-500 hover:bg-gray-100'
                            )
                        }
                    >
                        Cart {cartData?.length > 0 && <span className='absolute top-2 badge badge-info'>{cartData?.length}</span>}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            cn(
                                'px-4 py-2 rounded-md transition-all duration-300',
                                isActive
                                    ? 'text-white bg-red-500 shadow-md font-semibold'
                                    : 'text-gray-700 hover:text-red-500 hover:bg-gray-100'
                            )
                        }
                    >
                        About
                    </NavLink>
                </li>
            </ul>
            <div className='flex flex-row ite gap-x-10'>
                <Link to={'/login'} className='btn btn-error'>Login</Link>
            </div>
        </div>
    )
}

export default Header