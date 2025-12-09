import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Layout from "./components/layout";

import HomePage from "./components/home_page/home_page";
import Solution from "./components/solution/solution";
import History from "./components/history/history";
import Bags from "./components/bags/bags";

import Impact from "./components/impact/impact";
import ImpactEcological from "./components/impact_ecological/impact_ecological";
import ImpactHuman from "./components/impact_human/impact_human";
import ImpactInfoPeda from "./components/impact_info_peda/impact_info_peda";

import Contact from "./components/contact/contact";
import JoinUs from "./components/join_us/join_us";
import FAQ from "./components/faq/faq";

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
          <Route path="/nos-sacs" element={<Bags />} />
          
          <Route path="/impacts" element={<Impact />} />
          <Route path="/impact-ecologique" element={<ImpactEcological />} />
          <Route path="/impact-humanitaire" element={<ImpactHuman />} />
          <Route path="/information-pedagogie" element={<ImpactInfoPeda />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/nous-rejoindre" element={<JoinUs />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>
      </Routes>
    </Router>
  );
}

