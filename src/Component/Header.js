import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from "../img/logo.jpg"
import { searchItems } from '../redux/SearchSlice'



const Header = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch()
  const total = useSelector((state) => state.cart.cart.length)
  const searchItem = useSelector(state => state.search.item)
  const navigate = useNavigate()

  const getproduct = (e) => {
    setKeyword(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (keyword.length > 0) {
      dispatch(searchItems(keyword))
      navigate("/search")
      setKeyword("")
    }
  }

  useEffect(() => {
    console.log(keyword)
    console.log(searchItem)
  }, [keyword, searchItem])

  let activeStyle = {
    borderBottom:"1px solid white",
    color:"white"
  };



  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="nav-logo" />
          <h1>Baku shop</h1>
        </div>
        <div className="search">
          <form onSubmit={onSubmit} action="">
            <input value={keyword} onChange={getproduct} type="text" placeholder='Enter your product name...' />
            <i onClick={onSubmit} class="fa-solid fa-magnifying-glass"></i>
          </form>
        </div>
        <div className="icon">
          <i class="fa-solid fa-user"></i>
          <i class="fa-solid fa-heart"></i>
          <Link to="/cart"> <span><i class="fa-solid fa-cart-shopping"></i><span>{total}</span></span></Link>
        </div>
        <input type="checkbox" name="" id="check" />
        <label htmlFor="check">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul>
          <li><NavLink exact to="/" style={({ isActive }) => isActive ? activeStyle : undefined}> HOME </NavLink></li>
          <li><NavLink to="/shop" style={({ isActive }) => isActive ? activeStyle : undefined}> SHOP </NavLink></li>
          <li><NavLink to="/blogs" style={({ isActive }) => isActive ? activeStyle : undefined}> BLOGS </NavLink></li>
          <li><NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}> ABOUT </NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
