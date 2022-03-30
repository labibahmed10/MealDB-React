import { Route, Routes } from "react-router-dom";
import "./App.css";
import Meals from "../src/MEAL_DB/Meals/Meals";
// import Cart from "./Components/Cart/Cart";
// import Products from "./Components/Products/Products";
import Header from "./MEAL_DB/Header/Header";
import NotFound from "./MEAL_DB/NotFound/NotFound";
import MealDetail from "./MEAL_DB/MealDetail/MealDetail";

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<Header></Header>}></Route>
        <Route path="/detail/:MealID" element={<MealDetail></MealDetail>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
