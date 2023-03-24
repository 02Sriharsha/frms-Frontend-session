import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/authentication/Register";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
