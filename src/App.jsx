import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout";
import HomePage from "./components/home_page/home_page";
import OurBags from "./components/our_bags/our_bags";
import Impact from "./components/impact/impact";


export default function App() {
  
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/nos-sacs" element={<OurBags />} />
          <Route path="/impacts" element={<Impact />} />
        </Route>
      </Routes>
    </Router>
  );
}

