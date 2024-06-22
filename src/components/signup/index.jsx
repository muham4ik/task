import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "@service";
import VerifyModal from '../verify-modal';

const Index = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const movePath = () => {
    navigate("/signin");
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await auth.sign_up(form);
      if(response.status === 200){
        setModal(true)
        localStorage.setItem("email",form.email)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggle = () => {
    setModal(false);
  };

  return (
    <div className='container'>
      <VerifyModal open={modal} toggle={toggle} setModal={setModal} />
      <div className="card">
        <div className="card-header bg-primary">
          <h2 className='text-center fs-1 fw-bold text-white d-flex justify-content-center gap-2'>Sign Up <box-icon name='notepad' size="48px" color="#fff"></box-icon></h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} className='form form-check' id="submit">
            <input onChange={handleChange} type="text" name="email" placeholder='Email' className='my-2 form-control' />
            <input onChange={handleChange} type="text" name="full_name" placeholder='Full name' className='my-2 form-control' />
            <input onChange={handleChange} type="password" name="password" placeholder='Password' className='my-2 form-control' />
            <input onChange={handleChange} type="text" name="phone_number" placeholder='Phone number' className='my-2 form-control' />
          </form>
        </div>
        <div className="card-footer d-flex align-items-center justify-content-between">
          <button type='submit' className='btn btn-success' form="submit">Submit</button>
          <button className='btn btn-primary' onClick={movePath}>Sign IN</button>
        </div>
      </div>
    </div>
  );
}

export default Index;
