import SectionHuman from './section_human.jsx';
import SectionDon from './section_don.jsx';
import SectionPartners from './section_partners.jsx';

export default function ImpactHuman() {
  return (
    <div className='body'>
      <SectionHuman />
      <SectionDon />
      <SectionPartners />
    </div>
  );
}
