import React, { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import {auth} from "@service"
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const VerifyModal = ({ open, toggle}) => {
    const navigate = useNavigate()
  const [code, setCode] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    const payload = {
        code: code,
        email: localStorage.getItem("email")
    }

    try{
        const response = await auth.verify_code(payload)
        if(response.status === 200){
            toggle()
            navigate("/users")
        }
    }catch(error){
        console.log(error)
    }
  };



  return (
    <div>
      <Modal isOpen={open} toggle={toggle} className="verify-modal">
      <ModalBody>
        <form onSubmit={handleSubmit} id="code">
          <input
            type="text"
            placeholder="Code"
            className="form-control my-2"
            onChange={(e) => setCode(e.target.value)}
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <Button variant="contained" type="submit" form="code">
          Submit
        </Button>
      </ModalFooter>
    </Modal>
</div>
);
}

export default VerifyModal;
