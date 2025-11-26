import SectionHuman from './section_human.jsx';
import SectionPlastic from './section_plastic.jsx';
import SectionResponse from './section_response.jsx';
import SectionResponseBis from './section_response_bis.jsx';
import SectionSymbole from './section_symbole.jsx';

export default function ImpactHuman() {
  return (
    <div className='body'>
      <SectionHuman />
      <SectionPlastic />
      <SectionResponse />
      <SectionResponseBis />
      <SectionSymbole />
    </div>
  );
}
