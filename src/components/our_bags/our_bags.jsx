import { useNavigate } from "react-router-dom";
import { useState } from 'react'

// Our Bags Component
import OurBagsSection from './section_our_bags.jsx';
import SoftGammeSection from './section_soft_gamme.jsx';
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
      <SoftGammeSection />
      <SolutionSection />
      <HistorySection />
    </div>
  );
}
