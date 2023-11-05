import React, { useState } from 'react'
import Navbsr from '../../Components/Navbar/Navbar'
import './Edit.css'
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Editusers } from '../../Redux/Slices/Home-slices';
function Edit() {
  const users = useSelector((state)=>state.home.users);
  const dispatch = useDispatch();
  const {Id} = useParams();
  const existuser = users.find((user)=> user.id == Id);
  console.log(existuser)
  const [Name,setname] = useState(existuser.name);
  const [Email,setemail] = useState(existuser.email);
  const [Age,setage] = useState(existuser.age);
  const navigate = useNavigate();
  const handleEdit = (e)=>{
    e.preventDefault();
        dispatch(Editusers({id: Id,name : Name,email: Email,age : Age}))
        navigate('/');
  }
  return (
    <>
    <Navbsr />
    <div className="container-add">
        <div className="title"><h1>Edit User</h1></div>
              <form onSubmit={handleEdit}>
            <div className="form-group">
                <div className="input"><input type='text' className='input-class' placeholder='Name' value={Name} onChange={(e)=>{setname(e.target.value)}}/></div>
                <div className="input"><input type='text' className='input-class' placeholder='Email' value={Email} onChange={(e)=>{setemail(e.target.value)}}/></div>
                <div className="input"><input type='text' className='input-class' placeholder='Age' value={Age} onChange={(e)=>{setage(e.target.value)}} /></div>
                <button type='submit' className='btn-submit'>Edit</button>
                </div>
            </form>
                </div>
    </>
  )
}

export default Edit;
