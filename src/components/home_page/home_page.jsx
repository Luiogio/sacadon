import { useNavigate } from "react-router-dom";
import { useState } from 'react'

// Home Page Component
import MissionSection from './section_mission.jsx';
import ProblemeSection from './section_probleme.jsx';
import SolutionSection from './section_solution.jsx';
import HistorySection from './section_history.jsx';


export default function HomePage() {
  // const navigate = useNavigate();
  
  // const goHomePage = () => {
  //   navigate("/");
  // }

  // const [count, setCount] = useState(0)
  const [showSecond, setShowSecond] = useState(false);
  
  return (
    <div>
      <MissionSection />
      <ProblemeSection />
      <SolutionSection />
      <HistorySection />
    </div>
  );
}
