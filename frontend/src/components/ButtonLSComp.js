import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import like from '../assets/icon-like.png';
import save from '../assets/icon-save.png';
import love from '../assets/love-fill.png';
import love_unfill from '../assets/love-unfill.png'
import collect from '../assets/collect-fill.png'
import collect_unfill from '../assets/collect.png'

import {createLike, createCollection, getimagedetail, deleteLike, deleteCollection} from '../service/apiService'

import { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
const ButtonLSComp = () => {
  const { isAuth, token, userid } = useContext(AuthContext)
  const { id } = useParams()
  const location = useLocation()
  const [islike, setislike] = useState(false)
  const [iscollect, setiscollect] = useState(false)
  const [trigger, setrigger] = useState(false)
  console.log("=== Button ===")

  useEffect(() => {
    const fetchdata = async () =>{
      try {
        console.log("Response Button Auth: ", isAuth)
        const response = await getimagedetail(isAuth, id?id :1, token, userid)
        console.log("Response Button : ",response)
        setiscollect(response.iscollect? true : false)
        setislike(response.islike? true : false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchdata()
  }, [trigger, id])

  // useEffect(() => {
  //   setrigger(false)
  //   setislike(false)
  //   setiscollect(false)
  // }, [id])

  const LikeButtonFunction = async () => {
    try {
      if (location.pathname === '/') {
        if (islike) {
          const response = await deleteLike(isAuth, 1, token)
          console.log(response)
          setrigger(!trigger)
          return
        }
        const response = await createLike(isAuth, 1, token)
        if (response.status === "failed") {
          alert("you have liked")
        }
        
        console.log(response)
      } else {
        if (islike) {
          const response = await deleteLike(isAuth, id, token)
          console.log(response)
          setrigger(!trigger)
          return
        }
        const response = await createLike(isAuth, id, token)
        if (response.status === "failed") {
          alert("you have liked")
        }
        console.log(response)
      }
      setrigger(!trigger)
    } catch (error) {
      console.log(error)
    }
  }
  
  const CollectionButtonFunction = async () => {
    try {
      console.log("location: ", location)
      if (location.pathname === '/') {
        console.log("return collection if beranda")
        if (iscollect) {
          const response = await deleteCollection(isAuth, 1, token)
          setrigger(!trigger)
          return
        } else {
          const response = await createCollection(isAuth, 1, token)
          console.log("Create Collection : ", response)
        }
      } else {
        console.log("return collection else")
        if (iscollect) {
          const response = await deleteCollection(isAuth, id, token)
          setrigger(!trigger)
          return
        } else {
          const response = await createCollection(isAuth, id, token)
          console.log("Create Collection : ", response)
        }
      }
      console.log("return collection ")
      setrigger(!trigger)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="btn_ls mt-2">
      <ButtonGroup>
        <Button onClick={LikeButtonFunction} >
          <img src={islike? love : love_unfill} onClick={LikeButtonFunction} alt="like" />
        </Button>
        <Button onClick={CollectionButtonFunction}>
          <img src={iscollect? collect : collect_unfill} onClick={CollectionButtonFunction} alt="save" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonLSComp;
