import React, { createContext, useEffect, useState} from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom' 

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isauth, setAuth] = useState(false)
    const [token, setToken] = useState()
    const history = useHistory()

    const login = async (email, password) => {
        try {
            const response = await axios.get('localhost:3000/api/authorization', { email, password })
            console.log(response)
            if (response.data.token) {
                setAuth(true)
                setToken(response.data.token)
                localStorage.setItem('isauth', isauth)
                localStorage.setItem('token', token)
                history.push("/")
            }
        } catch (error) {
            console.log(error)
        }
    }
    
   const logout = async () => {
    try {
        const response = await axios.delete('localhost:4000/api/user/unauthorization', {token}) 
        if (response.data.status === 'success') {
                setAuth(false)
                setToken('')
                localStorage.removeItem('isauth')
                localStorage.removeItem('token')
        }
    } catch (error) {
        console.log(error)
    }
   }
}