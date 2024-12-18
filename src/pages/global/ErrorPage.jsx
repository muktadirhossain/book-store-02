import React from 'react'
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (

        <div className='min-h-screen flex flex-col justify-center items-center max-w-3xl mx-auto'>
            <div className='border shadow-md p-7 rounded-md'>
                <h2 className='text-5xl font-bold text-center'>Oops!</h2>
                <p className='my-3 text-center'>Sorry, an unexpected error has occurred.</p>
                <p className='text-center'>
                    <i className='text-center text-xl font-semibold'>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    )
}

export default ErrorPage