import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import like from '../assets/icon-like.png';
import save from '../assets/icon-save.png';

import {createLike, createCollection} from '../service/apiService'

import { useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
const ButtonLSComp = () => {
  const { isAuth, token } = useContext(AuthContext)
  const { id } = useParams()
  const location = useLocation()

  const LikeButtonFunction = async () => {
    try {
      if (location.pathname === '/') {
        const response = await createLike(isAuth, 1, token)
        if (response.status === "failed") {
          alert("you have liked")
      }
        console.log(response)
      } else {
        const response = await createLike(isAuth, id, token)
        if (response.status === "failed") {
          alert("you have liked")
      }
        console.log(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const CollectionButtonFunction = async () => {
    try {
      if (location.pathname === '/') {
        const response = await createCollection(isAuth, 1, token)
        
        console.log(response)
      } else {
        const response = await createCollection(isAuth, id, token)
        console.log(response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="btn_ls mt-2">
      <ButtonGroup>
        <Button>
          <img src={like} onClick={LikeButtonFunction} alt="like" />
        </Button>
        <Button>
          <img src={save} onClick={CollectionButtonFunction} alt="save" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonLSComp;
