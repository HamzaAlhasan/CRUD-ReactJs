import './App.css';
import Adduser from './Pages/AddUser/Adduser';
import Edit from './Pages/Edituser/Edit';
import Home from './Pages/Home/Home';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='adduser' element={<Adduser />} />
        <Route path='/edituser/:Id' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
