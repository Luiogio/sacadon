import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Layout from "./components/layout";

import HomePage from "./components/home_page/home_page";
import Solution from "./components/solution/solution";
import History from "./components/history/history";

import Impact from "./components/impact/impact";
import OurBags from "./components/our_bags/our_bags";

export default function App() {
  // Scroll to top quand on arrive sur une nouvelle page
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/histoire" element={<History />} />
          
          <Route path="/impacts" element={<Impact />} />
          
          <Route path="/nos-sacs" element={<OurBags />} />
        </Route>
      </Routes>
    </Router>
  );
}

