import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import like from '../assets/icon-like.png';
import save from '../assets/icon-save.png';

const ButtonLSComp = () => {
  return (
    <div className="btn_ls mt-2">
      <ButtonGroup>
        <Button>
          <img src={like} alt="like" />
        </Button>
        <Button>
          <img src={save} alt="save" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonLSComp;
