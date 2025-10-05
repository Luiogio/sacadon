import { useNavigate } from "react-router-dom";
import { useState } from 'react'

// Our Bags Component
import OurBagsSection from './section_our_bags.jsx';
import ProblemeSection from '../home_page/section_probleme.jsx';
import SolutionSection from '../home_page/section_solution.jsx';
import HistorySection from '../home_page/section_history.jsx';


export default function OurBags() {
  // const navigate = useNavigate();
  
  // const goHomePage = () => {
  //   navigate("/");
  // }

  // const [count, setCount] = useState(0)
  const [showSecond, setShowSecond] = useState(false);
  
  return (
    <div>
      <OurBagsSection />
      <ProblemeSection />
      <SolutionSection />
      <HistorySection />
    </div>
  );
}
