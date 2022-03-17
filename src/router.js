import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import Login from "./pages/Login/Login";
import Store from "./pages/Store/Store";
import SignUp from "./pages/Sign-up/SignUp";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}
