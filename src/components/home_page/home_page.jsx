import MissionSection from './section_mission.jsx';
import ProblemeSection from './section_probleme.jsx';
import SolutionSection from './section_solution.jsx';
import HistorySection from './section_history.jsx';

export default function HomePage() {  

  return (
    <div className='body'>
      <MissionSection />
      <ProblemeSection />
      <SolutionSection />
      <HistorySection />
    </div>
  );
}
