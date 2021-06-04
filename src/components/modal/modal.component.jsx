import { useState } from 'react'
import { Modal, Button, Image } from 'react-bootstrap'
import image from '../../images/Lockdown-Timeline-UK.jpg'
 
export default Modal;
const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
              
            

        <Image src={image} alt="timeline" />
            
     
        <Button variant='danger' onClick={props.onHide}>Close</Button>
     
    </Modal>
  );
}

export const ModalComponent = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="info" onClick={() => setModalShow(true)}>
       Lockdown Timeline in the UK
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}


// export default ModalComponent;