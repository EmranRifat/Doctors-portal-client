import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Login from './Pages/Shared/Login/Login';
import InfoCard from './Pages/Home/Info/InfoCard';
import Appointment from './Pages/Appointment/Appointment';
import Signup from './Pages/Shared/Login/Signup';
import RequireAuth from './Pages/Shared/Login/RequireAuth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Home/Dashboard/Dashboard';
import MyAppointment from './Pages/Home/Dashboard/MyAppointment';
import Myreview from './Pages/Home/Dashboard/Myreview';
import Users from './Pages/Home/Dashboard/Users';
import AddDoctor from './Pages/Home/Dashboard/AddDoctor';
import ManageDoctor from './Pages/Appointment/ManageDoctor';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>

          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<Myreview></Myreview>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='adddoctor' element={<AddDoctor></AddDoctor>}></Route>
          <Route path='managedoctor' element={<ManageDoctor></ManageDoctor>}></Route>
        </Route>
        <Route path="infoCard" element={<InfoCard />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <ToastContainer />

    </div>
  );
}

export default App;
