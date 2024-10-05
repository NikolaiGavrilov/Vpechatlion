import "./App.css";
import TravelPage from "./components/TravelPage/TravelPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailedPost from "./components/DetailedPost/DetailedPost";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <Routes>
      <Route path="/" element={<TravelPage />} />
      {posts.map((post) => (
        <Route
          key={post.id}
          path={`/posts/${post.id}`} 
          element={<DetailedPost idToShow={post.id}/>}
        />
      ))}
    </Routes>
  );
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
