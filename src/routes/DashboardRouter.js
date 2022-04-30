import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import Cart from "../components/Cart";
import Description from "../components/Description";
import EditProduct from "../components/EditProduct";
import Footer from "../components/Footer";
import Home from "../components/Home";
import List from "../components/List";
import Main from "../components/Main";
import Search from "../components/Search";
import Header from "../containers/Header";

export function DashboardRouter() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Main" element={<Main></Main>}></Route>
        <Route path="/add" element={<AddProduct></AddProduct>}></Route>
        <Route path="/edit" element={<EditProduct></EditProduct>}></Route>
        <Route path="/list" element={<List></List>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/description" element={<Description></Description>}></Route>
        <Route path="/search/:search" element={<Search></Search>}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}