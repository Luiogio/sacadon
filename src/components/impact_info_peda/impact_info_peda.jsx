import SectionInfo from './section_info.jsx';
import SectionMessage from './section_message.jsx';
import SectionPeda from './section_peda.jsx';
import SectionActu from './section_actu.jsx';

export default function ImpactInfoPeda() {
  return (
    <div className='body'>
      <SectionInfo />
      <SectionMessage />
      <SectionPeda />
      <SectionActu />
    </div>
  );
}
