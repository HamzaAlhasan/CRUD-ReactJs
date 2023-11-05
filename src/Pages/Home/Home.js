import React from 'react'
import Navbsr from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import './Home.css';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux'

function Home() {
  const users = useSelector((state)=>state.home.users)
  return (
    <>
    <Navbsr />
    <div className="container-home">
    <div className="btn"><Link to='adduser'><button>Add user</button></Link></div>
    <div className="card-group">
    {users.map((user) => {
      return <Card key={user.id} item={user} />
    })}
    </div>
    </div>
    </>
  )
}

export default Home
