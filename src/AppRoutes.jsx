import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TravelPage from "./components/TravelPage/TravelPage";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TravelPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
