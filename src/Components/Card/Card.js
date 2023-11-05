import React from 'react'
import './Card.css';
import { useDispatch } from 'react-redux'
import { DeleteUsers } from '../../Redux/Slices/Home-slices';
import { Link} from 'react-router-dom';
function Card({item}) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="card">
        <h2 className='name'>Name : {item.name}</h2>
        <h4 className='email'>Email :{item.email}</h4>
        <h4 className='age'>Age : {item.age}</h4>
        <div className="btn-group">
        <div className="btn-edit"> <Link to={`/edituser/${item.id}`}><button>Edit</button></Link></div>
        <div className="btn-delete"><button onClick={()=>{dispatch(DeleteUsers(item))}}>Delete</button></div>
        </div>
      </div>
    </>
  )
}

export default Card
