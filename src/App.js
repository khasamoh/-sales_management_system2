import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashb from './Pages/Dashb';
import Product from './Pages/Product';
import User from './Pages/User';
import Customer from './Pages/Customer';
import Sale from './Pages/Sale';
import ReportSummary from './Pages/ReportSummary';
import Login from './Pages/Login';
import TopNavBar from './Components/TopNavBar';
import Sidebar1 from './Components/Sidebar1';
import Dtable from './Components/Dtable';

function App() {
  return (
    <>
    <BrowserRouter>
      {/* <Sidebar/> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashb/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/sale' element={<Sale/>}/>
        <Route path='/report' element={<ReportSummary/>}/>
        <Route path='/nav' element={<TopNavBar/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/sidebar1' element={<Sidebar1/>}/>
        <Route path='/table' element={<Dtable/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
