import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProduct";

import EditProduct from "../components/EditProduct";
import Footer from "../components/Footer";

import List from "../components/List";

import Search from "../components/Search";
import Header from "../containers/Header";

export function DashboardRouter() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<List></List>}></Route>
        <Route path="/add" element={<AddProduct></AddProduct>}></Route>
        <Route path="/edit" element={<EditProduct></EditProduct>}></Route>
        <Route path="/search/:search" element={<Search></Search>}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}