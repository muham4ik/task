import React from 'react'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate()

  const movePath = ()=>{
    navigate("/")
  }
  return (
    <div className='container'>
      <div className="card ">
        <div className="card-header bg-primary">
        <h2 className='text-center fs-1 fw-bold text-white d-flex justify-content-center gap-2'>Sign In<box-icon name='edit' size="48px" color="#fff"></box-icon></h2>
        </div>
        
        <div className="card-body">
          <form className='form form-check' id="submit">
            <input type="email" placeholder='Email' name="email" className='my-2 form-control'/>
            <input type="password" placeholder='Password' name="password" className='my-2 form-control'/>
          </form>

        </div>

        <div className="card-footer d-flex align-items-center justify-content-between">
          <button type='submit' className='btn btn-success' form="submit">Submit</button>

          <button className='btn btn-primary' onClick={movePath}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Index
