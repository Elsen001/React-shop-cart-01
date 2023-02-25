import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Component/Cart';
import Category from './Component/Category';
import CategoryItems from './Component/CategoryItems';
import Details from './Component/Details';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Items from './Component/Items';
import Search from './Component/Search';
import Slider from './Component/Slider';
import './Css/App.scss';



const App = () => {


  return (
    <BrowserRouter>
    <Header />
      <Category />
      <Routes>
        <Route path='/' exact element={<> <Slider/> <Items/> </> }/>
        <Route path='/category/:name' element={<CategoryItems/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

