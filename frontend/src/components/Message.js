
import submitbuttonchat from '../assets/send_button.png'
import profile from '../assets/pembuat-male.png'
import { AuthContext } from '../context/AuthContext'
import { useContext, useState, useEffect, useRef } from 'react'
import { getMassage, sendMassage } from "../service/apiService"
const Message = () => {
    const contentRef = useRef(null)
    const { token , isAuth, userid} = useContext(AuthContext)
    const [receiveruserid, setreceiveruserid] = useState()
    const [roomid, setroomid] = useState()
    const [massageid, setmassageid] = useState()
    const [listuser, setlistuser] = useState([])
    const [massage, setmassage] = useState([])
    const [newmassage, setnewmassage] = useState([])
    const [responsesave, setresponse] = useState([])
    const [rawtext, setrawtext] = useState([])
    const [triger, setTriger] = useState(false)

    useEffect(() => {
        const fetchdata = async () => {
            try {
                console.log(isAuth ,roomid, massageid, "", token)
                const Response = await getMassage(isAuth ,roomid, massageid, receiveruserid, token)
                console.log(Response, "Response Message")
                setlistuser(Response.listroom ? Response.listroom : [])
                setresponse(Response.listroom ? Response.listroom : [])
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
            <div className="message-body">
            <div className="sidebar">
                {console.log(responsesave)}
                {responsesave.length === 0 ? (
                <div className='notif-massage'>
                    Belum Memiliki Pesan
                </div>
                ) : responsesave.map(responsemap => (
                    <div className="user" onClick={() => handleclicluser(responsemap.room.listroom, responsemap.room.usertarget)}>
                        <img src={responsemap.photo? `http://${responsemap.photo}`: profile } alt=""/>
                        <div className="userdetail">
                            <div className="username">{responsemap.username }</div>
                            <div className="lastmassage">{responsemap.lastmassage? responsemap.username + " : " + responsemap.lastmassage : ""}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="message-main">
                <div className="massage-container">
                    {/* <div className="massage-box">
                        <div className="text right">
                            <p >
                                Pelajari semua tentang cara mengimplementasikan font menggunakan kode API CSS. Font web
                                adalah font apa pun yang digunakan dalam desain situs web yang tidak diinstal secara default di perangkat 
                                sistem. Lihat artikel di bawah ini untuk panduan lebih lanjut:
                                pengguna addkhir—serupa dengan font sistem. Lihat artikel di bawah ini untuk panduan lebih lanjut:
                            </p>
                            <div className="time">
                                14.50
                            </div>
                        </div>
                    </div> */}
                    {massage.length > 0 ? 
                        massage.map(massages => (
                            <div className="massage-box">
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
                </div>
                <div className="input-wrap">
                <textarea placeholder="Pesan" value={rawtext} className="text-input" name="" id="" onChange={(e) => setrawtext(e.target.value)}></textarea>
                    {/* <textarea type="text"  className="text-input" ><textarea/> */}
                    <img src={submitbuttonchat} alt="" onClick={sendtext}/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Message