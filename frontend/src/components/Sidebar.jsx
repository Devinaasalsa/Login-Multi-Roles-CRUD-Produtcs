import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import "../style.css"

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };
  
  return (
    <div className='sidebar-custom'>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">
          General
        </p>
        <ul className="menu-list">
          <li><NavLink to="/dashboard"><IoHome className='icon'/>Dashboard</NavLink></li>
          <li><NavLink to="/products"><IoPricetag className='icon'/>Products</NavLink></li>
        </ul>
        {user && user.role === "admin" && (
          <div className="">
            <p className="menu-label">
              Admin
            </p>
            <ul className="menu-list">
              <li><NavLink to="/users"><IoPerson className='icon'/>Users</NavLink></li>
            </ul>
          </div>
        )}
        <p className="menu-label">
          Settings
        </p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className='button is-white'>
              <IoLogOut className='icon'/>Log Out
            </button>
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar