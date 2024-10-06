import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TravelPage from "./components/TravelPage/TravelPage";
import { useSelector } from "react-redux";
import UserProfile from "./components/ProfileWindow/ProfileWindow";

const AppRoutes = () => {
  const users = useSelector((state) => state.users.users);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TravelPage />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
