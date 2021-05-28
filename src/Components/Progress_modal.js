import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Progress } from 'reactstrap';
import Projects from './Projects'

const ProgressModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
       <Progress 
        value="50" 
        id="progressTooltip" 
        style={{marginTop:"1.25rem"}}
        onClick={toggle}
        />
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <Projects/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ProgressModal;