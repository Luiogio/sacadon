import { useNavigate } from "react-router-dom";
import { useState } from 'react'

import Header from './home_page/header.jsx';
import Footer from './home_page/footer.jsx';

// Home Page Component
import MenuResponsive from './home_page/menu_responsive.jsx';
import MissionSection from './home_page/section_mission.jsx';
import ProblemeSection from './home_page/section_probleme.jsx';
import SolutionSection from './home_page/section_solution.jsx';
import HistorySection from './home_page/section_history.jsx';


export default function HomePage() {
  // const navigate = useNavigate();
  
  // const goHomePage = () => {
  //   navigate("/");
  // }

  // const [count, setCount] = useState(0)
  const [showSecond, setShowSecond] = useState(false);
  
  return (
    <div>
      <Header onShowSecond={() => setShowSecond(!showSecond)} />

      {showSecond && <MenuResponsive activeMenu={showSecond}/>}
      <MissionSection />
      <ProblemeSection />
      <SolutionSection />
      <HistorySection />

      <Footer/>
    </div>
  );
}
