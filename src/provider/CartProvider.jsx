import { useEffect, useState } from 'react';
import { CartContext } from '../context';
import { CART_DATA } from '../constants/config';



const CartProvider = ({ children }) => {
    const [cartData, setCartData] = useState([]);


    useEffect(() => {
        const localData = localStorage.getItem(CART_DATA);
        const parsedData = JSON.parse(localData);
        console.log(parsedData);

        setCartData(parsedData ?? []);

    }, [])

    // Add to cart Handler::
    const addToCartHandler = (product) => {
        console.log("ADD TO CART ocn")
        if (!product) {
            return;
        }

        const existingCartItem = cartData?.find((item) => item._id === product._id);

        if (existingCartItem) {
            const updatedCartItems = cartData.map((item) =>
                item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
            );
            localStorage.setItem(CART_DATA, JSON.stringify(updatedCartItems));
            setCartData(updatedCartItems);
        } else {
            const newCartItems = [...cartData, { ...product, quantity: 1 }];
            localStorage.setItem(CART_DATA, JSON.stringify(newCartItems));
            setCartData(newCartItems);
        }
    };

    // Remove Items from CART::
    const removeCartItem = (productId) => {
        const updatedCartItems = cartData.filter((item) => item._id !== productId);
        localStorage.setItem(CART_DATA, JSON.stringify(updatedCartItems));
        setCartData(updatedCartItems);
    };

    // Decrement Cart Quantity::
    const decrementCartQuantity = (productId) => {
        const updatedCartItems = cartData.map((item) => {
            if (item._id === productId) {
                return {
                    ...item,
                    quantity: Math.max(0, item.quantity - 1), // Ensure quantity doesn't go below 0
                };
            }
            return item;
        });
        localStorage.setItem(CART_DATA, JSON.stringify(updatedCartItems));
        setCartData(updatedCartItems);
    };

    return (
        <CartContext.Provider
            value={{
                cartData,
                addToCartHandler,
                removeCartItem,
                decrementCartQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
