import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RestaurantPage from "./components/RestaurantPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
