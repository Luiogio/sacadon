// Our Bags Component
import BagsSection from './section_bags.jsx';

import SoftGammeSection from './section_soft_gamme.jsx';
import CabaGammeSection from './section_caba_gamme.jsx';
import UpscaleGammeSection from './section_upscale_gamme.jsx';

import FAQBags from '../faq/section_faq_bags.jsx';

export default function Bags() {
  return (
    <div className='body'>
      <BagsSection />
      
      <SoftGammeSection />
      <CabaGammeSection />
      <UpscaleGammeSection />

      <FAQBags />
    </div>
  );
}
