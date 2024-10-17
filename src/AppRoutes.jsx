import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TravelPage from "./components/TravelPage/TravelPage";
import { useSelector } from "react-redux";
import UserProfile from "./components/ProfileWindow/ProfileWindow";
import CulinaryPage from "./components/СulinaryPage/CulinaryPage";
import CreativityPage from "./components/CreativityPage/CreativityPage";
import LoginPage from "./components/LoginPage/LoginPage";
import MyProfilePage from "./components/MyProfilePage/MyProfilePage";
import MainPage from "./components/MainPage/MainPage";

//Данный компонент нужен, чтоб не перегружать App. Мне показалось логичным выделить маршрутизацию в отдельный компонент и файл, чтоб всё было нагляднее
const AppRoutes = () => {
  const { loggedIn, userID } = useSelector((state) => state.loggedIn);
  const users = useSelector((state) => state.users.users);
  const currentUser = users.find((user) => user.userID === userID);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/culinary" element={<CulinaryPage />} />
        <Route path="/creativity" element={<CreativityPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/myprofile"
          element={<MyProfilePage user={currentUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
