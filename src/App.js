import { Route, Routes } from "react-router-dom";
import "./App.css";
import Meals from "../src/MEAL_DB/Meals/Meals";
// import Cart from "./Components/Cart/Cart";
// import Products from "./Components/Products/Products";
import Header from "./MEAL_DB/Header/Header";

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<Header></Header>}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
