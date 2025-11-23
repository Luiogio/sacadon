import SectionEcological from './section_ecological.jsx';
import SectionPlastic from './section_plastic.jsx';

import FAQ from '../FAQ/section_faq.jsx';

export default function ImpactEcological() {
  return (
    <div className='body'>
      <SectionEcological />
      <SectionPlastic />

      <FAQ />
    </div>
  );
}
