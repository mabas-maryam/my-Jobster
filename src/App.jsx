import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './layouts/DashboardLayOut'
import SideBar from './components/SideBar';
import Stats from './layouts/Stats';
import AllJobs from './layouts/AllJobs';
import AddJob from './layouts/AddJob';
import Profile from './layouts/Profile';

const App = () => {
  return (
    <Router>
      <div className='bg-[#F0F4F8] h-screen'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/dashboard' element={<Dashboard /> } >
          <Route index element={<Stats />} /> 
          <Route path='stats' element={<Stats/>}/>
          <Route path='allJobs' element={<AllJobs/>}/>
          <Route path='addJobs' element={<AddJob/>}/>
          <Route path='profile' element={<Profile/>}/>
          </Route>
          <Route path='/sidebar' element={<SideBar />}>
           
          
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
