import { Routes, Route } from "react-router-dom";
import Hero1 from "./heropages/Hero1";

function App() {
  return (
    <div className=" bg-black">
      <Routes>
        <Route path="/hero1" element={<Hero1 />} />
      </Routes>
    </div>
  );
}

export default App;
