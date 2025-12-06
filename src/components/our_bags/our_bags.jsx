// Our Bags Component
import OurBagsSection from './section_our_bags.jsx';

import SoftGammeSection from './section_soft_gamme.jsx';
import CabaGammeSection from './section_caba_gamme.jsx';
import UpscaleGammeSection from './section_upscale_gamme.jsx';

import FAQ from '../faq/section_faq.jsx';

export default function OurBags() {
  return (
    <div className='body'>
      <OurBagsSection />
      
      <SoftGammeSection />
      <CabaGammeSection />
      <UpscaleGammeSection />

      <FAQ />
    </div>
  );
}
