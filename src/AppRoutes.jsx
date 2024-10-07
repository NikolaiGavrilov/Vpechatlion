import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TravelPage from "./components/TravelPage/TravelPage";
import { useSelector } from "react-redux";
import UserProfile from "./components/ProfileWindow/ProfileWindow";
import CulinaryPage from "./components/СulinaryPage/CulinaryPage";

const AppRoutes = () => {
  const users = useSelector((state) => state.users.users);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TravelPage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/culinary" element={<CulinaryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
