import { useState } from 'react'
import { AUTH_TOKEN } from '../constants/config'
import { AuthContext } from '../context'


const localData = localStorage.getItem(AUTH_TOKEN)

const parsedData = JSON.parse(localData)
// console.log("TEST", parsedData)

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        token: parsedData?.token,
        user: parsedData?.user
    })
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider