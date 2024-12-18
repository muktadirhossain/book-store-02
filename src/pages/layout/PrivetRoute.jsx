import React from 'react'
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivetRoute = () => {
    const { auth } = useAuth();
    return (
        <>
            {

                auth?.token ? <main>
                    show the content
                </main> : <Navigate to='/login' />
            }

        </>
    )
}

export default PrivetRoute