import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import { ToastContainer } from 'react-toastify';
import AddService from './Pages/Home/Home/AddService/AddService';
import ManageServices from './Pages/Home/Home/ManageServices/ManageServices';
import RequireAuth from './Components/RequireAuth/RequireAuth';
// import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/reset" element={<ResetPassword></ResetPassword>} />
        <Route path="/addservice" element={<RequireAuth><AddService></AddService></RequireAuth>} />
        <Route path="/manage" element={<RequireAuth><ManageServices></ManageServices></RequireAuth>} />
        <Route path="*" element={<NotFound></NotFound>} />
        {/* <RequireAuth path="/manage/" component={ManageServices} /> */}
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>

  );
}

export default App;
