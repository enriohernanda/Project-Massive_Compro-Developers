import React, { createContext, useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isAuth, setAuth] = useState(false)
    const [token, setToken] = useState('')
    const [userid, setUserId] = useState('')
    const [username, setUsername] = useState('')
    const [photo_profile, setUserphoto_profile] = useState('')
    const navigate = useNavigate()

    const registration = async (username, email, password) => {
        try {
            const response = await axios.post('http://localhost:4000/api/user/registration', {username : username, email : email, password : password })
            console.log(response)
            if (response.data.token) {
                setAuth(true)
                setToken(response.data.token)
                setUserId(response.data.userid)
                setUsername(response.data.username)
                setUserphoto_profile(response.data.photoprofile)
                localStorage.setItem('isauth', 'true')
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('userid', response.data.userid)
                localStorage.setItem('username', response.data.username)
                navigate("/")
            }
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
    }

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:4000/api/user/authentication', {email : email,password :password })
            console.log(response)
            if (response.data.token) {
                setAuth(true)
                setToken(response.data.token)
                setUserId(response.data.userid)
                setUsername(response.data.username)
                setUserphoto_profile(response.data.photoprofile)
                localStorage.setItem('isauth', 'true')
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('userid', response.data.userid)
                localStorage.setItem('username', response.data.username)
                localStorage.setItem('photoprofile', response.data.photoprofile)
                navigate("/")
            }
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
    }
    
    const logout = async () => {
    try {
        const token = localStorage.getItem('token')
        const response = await axios.delete('http://localhost:4000/api/user/unauthorization', { params : {authstatus: isAuth, token : token} }) 
        if (response.data.status === 'success') {
            console.log('========== Erroed 3 ')
            setAuth(false)
            setToken('')
            setUserId()
            setUsername('')
            setUserphoto_profile('')
            localStorage.removeItem('isauth')
            localStorage.removeItem('token')
            localStorage.removeItem('userid')
            localStorage.removeItem('username')
            localStorage.removeItem('photoprofile')
        }
        console.log('========== Erroe 3 ')
        setAuth(false)
        setToken('')
        setUserId()
        setUsername('')
        setUserphoto_profile('')
        localStorage.removeItem('isauth')
        localStorage.removeItem('token')
        localStorage.removeItem('userid')
        localStorage.removeItem('username')
        localStorage.removeItem('photoprofile')
    } catch (error) {
        console.log("Error Logout:" ,error)
        // console.log(error)
        // setAuth(false)
        // setToken('')
        // setUserId()
        // setUsername('')
        // setUserphoto_profile('')
        // localStorage.removeItem('isauth')            
        // localStorage.removeItem('token')
        // localStorage.removeItem('username')
        // localStorage.removeItem('photoprofile')
    }
   }
useEffect (() => {
    const authstatus = localStorage.getItem('isauth') === "true"
    const tokendata = localStorage.getItem('token')
    const urldata = localStorage.getItem('photoprofile')
    const useriddata = localStorage.getItem('userid')
    if (authstatus && tokendata && urldata && useriddata) {
        console.log(tokendata)
        console.log('========== Erroe auth 1 ')
        setAuth(authstatus)
        setToken(tokendata)
        setUserId(useriddata)
        setUserphoto_profile(urldata)
    }
    console.log('========== Erroe 2 ')
},[])
   return (
       <AuthContext.Provider value={{isAuth, token, username, userid, photo_profile, registration, login, logout}} >
            {children}
       </AuthContext.Provider>
   )
}