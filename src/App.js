import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Appointment from "./Pages/Appointment/Appointment";
import Footer from "./Pages/Shared/Footer";
import SignUp from "./Pages/Login/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import ResetPassword from "./Pages/Login/ResetPassword";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctor from "./Pages/Dashboard/ManageDoctor";
import Payment from "./Pages/Dashboard/Payment";

function App() {
  return (
    <div className="mx-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route
            element={<MyReview></MyReview>}
            path="/dashboard/review"
          ></Route>
          <Route
            element={<MyHistory></MyHistory>}
            path="/dashboard/myHistory"
          ></Route>
          <Route
            path="/dashboard/users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/addDoctor"
            element={
              <RequireAdmin>
                <AddDoctor></AddDoctor>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/manageDoctor"
            element={
              <RequireAdmin>
                <ManageDoctor></ManageDoctor>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/payment/:id"
            element={<Payment></Payment>}
          ></Route>
        </Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/resetPassword"
          element={<ResetPassword></ResetPassword>}
        ></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
