import { useState } from 'react';
import Header from './components/header';
import MenuResponsive from './components/menu_responsive';
import MissionSection from './components/section_mission';
import ProblemeSection from './components/section_probleme';
import SolutionSection from './components/section_solution';
import Footer from './components/footer';

export default function App() {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <div id=''>
      <Header onShowSecond={() => setShowSecond(!showSecond)} />

      {showSecond && <MenuResponsive activeMenu={showSecond}/>}

      <MissionSection />
      <ProblemeSection />
      <SolutionSection />

      <Footer/>
    </div>
  );
}
