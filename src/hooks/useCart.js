import { useContext } from "react";
import { CartContext } from "../context";


const useCart = () => {
    const { cartData,
        addToCartHandler,
        removeCartItem,
        decrementCartQuantity } = useContext(CartContext)

    return {
        cartData,
        addToCartHandler,
        removeCartItem,
        decrementCartQuantity
    };
}

export default useCart;