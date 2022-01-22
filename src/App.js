import { Routes, Route } from "react-router-dom";
// Style
import "./index.css";
import Home from "./pages/Home/Home";

// Components
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* Pages */}
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
