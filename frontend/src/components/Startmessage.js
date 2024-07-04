import moment from 'moment';
import submitbuttonchat from '../assets/send_button.png'
import profile from '../assets/pembuat-male.png'
import { AuthContext } from '../context/AuthContext'
import { useContext, useState, useEffect, useRef } from 'react'
import { getMassage, sendMassage, getProfile } from "../service/apiService"

import { useParams } from 'react-router-dom'
const StartMessage = () => {
    const contentRef = useRef(null)
    const messagecontainer = useRef(null)
    const { id } = useParams()
    const { token , isAuth, userid} = useContext(AuthContext)
    const [receiveruserid, setreceiveruserid] = useState(id)
    const [roomid, setroomid] = useState()
    const [massageid, setmassageid] = useState()
    const [listuser, setlistuser] = useState([])
    const [massage, setmassage] = useState([])
    const [newmassage, setnewmassage] = useState([])
    const [responsesave, setresponse] = useState([])
    const [rawtext, setrawtext] = useState([])
    const [triger, setTriger] = useState(false)
    const [islast, setIsLast] = useState(false)
    const [user, setuser] = useState([])

    useEffect(() => {
        const fetchdata = async () => {
            try {
              console.log("Token : ",token)
              const response = await getProfile(isAuth, id, token)
              console.log("Response :",response)
              setuser(response.userdata)
          } catch (error) {
              console.log(error)
          }
      }
      fetchdata()
    }, [id])

    useEffect(() => {
        const fetchdata = async () => {
            try {
                console.log(isAuth ,roomid, massageid, "", token)
                const Response = await getMassage(isAuth ,roomid, massageid, receiveruserid, token)
                console.log(Response, "Response Message")
                setlistuser(Response.listroom ? Response.listroom : [])
                setmassage(Response.result? Response.result : [])
            } catch (error) {
                console.log("Error Message",error)
            }
        }
        fetchdata()
    }, [])
    const handleclicluser = async (room, receiver) => {
        try {
            console.log(room, receiver)
            // setreceiveruserid(receiver)
            setreceiveruserid(receiver)
            setroomid(room)
            console.log(receiveruserid)
            const Response = await getMassage(isAuth , room, massageid, receiver, token)
            console.log("response chat : ", Response)
            setmassage(Response.result? Response.result : [])
            setIsLast(Response.islast? Response.islast : false)
            // if (receiver !== receiveruserid) {
            //     // setmassage(massage.concat(response.result? response.result : []))
            // }
        } catch (error) {
            console.log(error)
        }
    }
    const sendtext = async () => {
        try {
            // (messageRoomId, receiverUserId ,message, token)
            console.log("Value : ", rawtext)
            console.log("Room ID :", roomid)
            console.log("Receiver ID:", receiveruserid)
            const response = await sendMassage(isAuth, roomid, receiveruserid, rawtext, token)
            console.log("Response Send Text:",response)
            await handleclicluser(roomid, receiveruserid)
            setrawtext('')
            // setmassage(massage.concat(response.result? response.result : []))
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className="message-startbody">
        <div className="message-main">
            <div className="user">
                <img className='Photo_Profile ' src={ user.photo_profile === "0" ? profile : `${user.photo_profile}` } alt=""/>
                <p>
                    Bergabung pada tanggal {moment(user?.created || '').format('DD MMMM YYYY')}
                </p>
                {/* <p>Anda Sudah Menfollownya</p> */}
            </div>
            {islast? (<div className="more-masssage" >
                <p>
                    Chat lebih Lama
                </p>
            </div>) : ""}
            <div className="massage-container" ref={messagecontainer}>
            {massage.length > 0 ? 
                        massage.map((massages, index) => (
                            <div key={index} className="massage-box">
                                <div className={massages.receiver_user_id == userid? `text right` : `text left` } >
                                    <p >
                                        {massages.message}
                                    </p>
                                    <div className="time">
                                        {massages.createdAt.substring(12, 16)}
                                    </div>
                                </div>
                            </div>
                        ))
                    : ("")}
                
                {/* <div className="day-tag">
                    05 June
                </div> */}
            </div>
            <div className="input-wrap">
                {/* <!-- <input type="text" placeholder="Pesan" className="text-input"> --> */}
                <textarea placeholder="Pesan" value={rawtext} onChange={(e) => setrawtext(e.target.value)} className="text-input" name="" id=""></textarea>
                <img src={submitbuttonchat} onClick={sendtext} alt=""/>
            </div>
            </div>
        </div>
    </div>
    )
}

export default StartMessage