import React, { useState } from 'react'
import Navbsr from '../../Components/Navbar/Navbar'
import './Adduser.css'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { setName,setAge,setEmail, Addusers } from '../../Redux/Slices/Home-slices';
function Adduser() {
  const users = useSelector((state)=>state.home.users);
  const name = useSelector((state)=>state.home.name);
  const email = useSelector((state)=>state.home.email);
  const age = useSelector((state)=>state.home.age);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [msgError,setmsg] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(name !== '' && email !== '' && age !== ''){
      dispatch(Addusers({id : users.length +1,name,email,age}))
      
      navigate('/');
    }else{
      setmsg('Please enter Name,Email and Age');
    }
  }
  return (
    <>
    <Navbsr />
    <div className="container-add">
        <div className="title"><h1>Add User</h1></div>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="input"><input type='text' className='input-class' placeholder='Name' onChange={(e)=>{dispatch(setName(e.target.value))}}/></div>
                <div className="input"><input type='text' className='input-class' placeholder='Email' onChange={(e)=>{dispatch(setEmail(e.target.value))}}/></div>
                <div className="input"><input type='text' className='input-class' placeholder='Age' onChange={(e)=>{dispatch(setAge(e.target.value))}}/></div>
                <button type='submit' className='btn-submit'>Add</button>
                {msgError && <p style={{color:'red'}}>{msgError}</p>}
                </div>
            </form>
    </div>
    </>
  )
}

export default Adduser
