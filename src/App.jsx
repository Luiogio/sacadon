import { useState } from 'react'
import Header from './components/header';
import MenuResponsive from './components/menu_responsive.jsx';
import MissionSection from './components/section_mission.jsx';
import ProblemeSection from './components/section_probleme.jsx';
import SolutionSection from './components/section_solution.jsx';
import HistorySection from './components/section_history.jsx';
import Footer from './components/footer';

function App() {
  // const [count, setCount] = useState(0)
  const [showSecond, setShowSecond] = useState(false);

  return (
    <>
      <Header onShowSecond={() => setShowSecond(!showSecond)} />

      {showSecond && <MenuResponsive activeMenu={showSecond}/>}
      <MissionSection />
      <ProblemeSection />
      <SolutionSection />
      <HistorySection />

      <Footer/>
    </>
  )
}

export default App
