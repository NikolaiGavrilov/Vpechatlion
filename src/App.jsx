import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppRoutes from "./AppRoutes.jsx";


//Передаю store в провайдер для обеспечения работы с хранилищем во всех компонентах, включенных далее по иерархии
function App() {
  return (
    
    <Provider store={store}>
      
        <AppRoutes />
        
    </Provider>

  );
}

export default App;
