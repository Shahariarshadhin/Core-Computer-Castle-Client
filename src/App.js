
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import OrderDetails from './Pages/OrderDetails';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrders from './Pages/Dashboard/MyOrders';
import User from './Pages/Dashboard/User';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Payment from './Pages/Dashboard/Payment';
import AddReview from './Pages/Dashboard/AddReview';
import Review from './Pages/Home/Review';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import NotFound from './Pages/NotFound';
import AddItem from './Pages/Dashboard/AddItem';






function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path="/inventory" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>}>

        </Route>
        <Route path="/review" element={<Review></Review>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/part/:partId" element={<OrderDetails></OrderDetails>}></Route>
        <Route path="/myPortfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>





        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="users" element={<RequireAdmin><User></User></RequireAdmin>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="addProduct" element={<AddItem></AddItem>}></Route>


        </Route>




      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;
