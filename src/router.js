import React from "react";
import { Route, Routes } from "react-router";
import {
  Home,
  Cart,
  Wishlist,
  Login,
  Store,
  SignUp,
  ErrorPage,
  Mockman,
} from "./pages/pagesExport";

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
        <Route path="/*" element={<ErrorPage />}></Route>
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}
