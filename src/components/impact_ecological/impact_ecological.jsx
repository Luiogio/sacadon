import SectionEcological from './section_ecological.jsx';
import SectionPlastic from './section_plastic.jsx';
import SectionResponse from './section_response.jsx';

export default function ImpactEcological() {
  return (
    <div className='body'>
      <SectionEcological />
      <SectionPlastic />
      <SectionResponse />
    </div>
  );
}
