import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout";
import HomePage from "./components/home_page/home_page";


export default function App() {
  
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

