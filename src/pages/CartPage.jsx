import { TrashIcon } from '@heroicons/react/24/solid';
import DashboardTitle from '../components/DashboardTitle'
import useCart from '../hooks/useCart';
import { CURRENCY } from '../constants/config';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartData, addToCartHandler, decrementCartQuantity, removeCartItem } = useCart();

  const calculateTotalAmount = (cartItems) => {
    if (!Array.isArray(cartItems)) return 0;

    return cartItems.reduce((total, item) => {
      const itemTotal = item.sell_price * (item.quantity || 0); // Default quantity to 0 if not present
      return total + itemTotal;
    }, 0); // Initial total is 0
  };

  return (
    <div className='min-h-screen container mx-auto'>
      <DashboardTitle>Cart Page</DashboardTitle>

      {
        cartData?.length > 0 ?
          <section className='max-w-4xl mx-auto flex justify-between '>
            <div >
              {
                cartData?.map(item => <div
                  className='flex gap-x-5 m-3'
                  key={item?._id}>
                  <div>
                    <img
                      className='h-36 rounded-md'
                      src={item?.cover_photo} alt={item?.title} crossOrigin='anonymous' />

                  </div>
                  <div>
                    <div className='my-2'>
                      <p className='font-semibold'>{item?.title}</p>
                      <p>Quantity: {item?.quantity}</p>
                      <p>Price: {(item?.quantity * item?.sell_price).toFixed(2)} {CURRENCY}</p>
                    </div>
                    <div className='flex justify-start items-center gap-x-3'>
                      <button className='btn btn-sm btn-success rounded-md'
                        onClick={() => addToCartHandler(item)}
                      >+</button>
                      {
                        item?.quantity == 1 ? <button className='btn btn-sm btn-error rounded-md'
                          onClick={() => removeCartItem(item?._id)}
                        ><TrashIcon className='size-4' /></button> : <button className='btn btn-sm btn-error rounded-md'
                          onClick={() => decrementCartQuantity(item?._id)}
                        >-</button>
                      }
                    </div>
                  </div>
                </div>)
              }
            </div>
            <div>
              <form >

                <p className='text-xl font-medium'>Order Type:</p>

                <p className='text-lg font-medium'>Total Amount: {calculateTotalAmount(cartData).toFixed(2)} {CURRENCY} </p>
                <div className='flex items-center gap-x-3'>
                  <div>
                    <input type="radio" id="cod" name="method" value="cash on delivery" />
                    <label for="cod"> COD(Cash on Delivery)</label>
                  </div>

                  <div>
                    <input type="radio" id="pick-up" name="method" value="pick-up" />
                    <label for="pick-up"> Pick-up</label>
                  </div>
                </div>
                <div>
                  <label className='block text-xl font-semibold' htmlFor="address">Address</label>
                  <textarea className='block ring ring-gray-500 rounded-md my-2 w-full min-h-44' type="text" id='address' name='address' placeholder='Enter Your address...'>

                  </textarea>

                </div>
                <button className='btn btn-primary '>Place Order</button>
              </form>

            </div>
          </section> :
          <Link to={'/'}><h3 className="text-center font-mono hover:underline my-16 text-2xl">
            Start adding items to your cart
          </h3></Link>
      }

    </div>
  )
}

export default CartPage