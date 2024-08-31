import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Add from './pages/add/add.jsx';
import List from './pages/list/list.jsx';
import New from './pages/new/newFood.jsx';
import NavBar from './components/navbar/navbar.jsx'
import SideBar from './components/sidebar/sidebar.jsx';

function App() {
  return (
    <div>
      <NavBar/>
      <hr />
      <SideBar/>
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/new' element={<New/>}/>
      </Routes>
      
    </div>
  )
}

export default App

