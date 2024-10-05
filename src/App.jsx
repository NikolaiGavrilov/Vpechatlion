import { useState, useSelector } from "react";
import "./App.css";
import TravelPage from "./components/TravelPage/TravelPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailedPost from "./components/DetailedPost/DetailedPost";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TravelPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
