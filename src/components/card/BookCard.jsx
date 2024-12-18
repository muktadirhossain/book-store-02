import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import { CURRENCY } from '../../constants/config'
import toast from 'react-hot-toast'
import { CartContext } from '../../context'
import useCart from '../../hooks/useCart'

const BookCard = ({ book }) => {
    const { title, category_id, price, sell_price, author, cover_photo, published_date } = book || {};

    // const {addToCartHandler} = useContext(CartContext)

    const {addToCartHandler} = useCart()

    const addToCart = () => {
        toast.success("Add to cart")
        addToCartHandler(book)
    }

    return (
        <div className="card bg-base-100 w-full shadow-xl">
            <figure>
                <img
                    crossOrigin='anonymous'
                    src={cover_photo}
                    alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {book?.title}
                    <div className="badge badge-outline badge-ghost">{category_id?.name}</div>
                </h2>
                <p className='font-mono'>By- {author}</p>
                <p>Published: {published_date}</p>
                <div className='flex  items-center justify-between'>
                    <div>
                        <span className='font-medium line-through text-gray-500'>{price} {CURRENCY}</span> <span className='font-medium text-3xl '>{sell_price} {CURRENCY}</span>
                    </div>
                    <div>
                        <button onClick={addToCart} className='btn btn-circle btn-error'>
                            <ShoppingCartIcon className='size-6 ' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard