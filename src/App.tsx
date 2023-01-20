import { Routes, Route } from "react-router-dom";
import Hero1 from "./heropages/Hero1";
import Hero2 from "./heropages/Hero2";

function App() {
  return (
    <div className=" bg-black">
      <Routes>
        <Route path="/hero1" element={<Hero1 />} />
        <Route path="/hero2" element={<Hero2 />} />
      </Routes>
    </div>
  );
}

export default App;
