import { useState, useContext, useEffect, useRef } from "react"
import { AuthContext } from "../context/AuthContext"
import { getNotification } from '../service/apiService'

const Notification = () => {
    const contentRef = useRef(null)
    const { isAuth, token } = useContext(AuthContext)
    const [result, setresult] = useState([])
    
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await getNotification(isAuth, token, '')
                console.log("Response Notification : ", response)
                setresult(response? response: [])
            } catch (error) {
                console.log(error)
            }
        }
        fetchdata()
    }, [])
    return (
    <div ref={contentRef} class="notif-container">
        <div class="head-notif">
            Pemberitahuan
        </div>
        {result.length > 0 ? 
        result.map((eachnotif, index) => 
            <div class="notification">
                {eachnotif.message}
            </div>
            ) : ""}
    </div>
    )
}
export default Notification;