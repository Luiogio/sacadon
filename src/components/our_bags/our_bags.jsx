import { useNavigate } from "react-router-dom";
import { useState } from 'react'

// Our Bags Component
import OurBagsSection from './section_our_bags.jsx';

import SoftGammeSection from './section_soft_gamme.jsx';
import CabaGammeSection from './section_caba_gamme.jsx';
import UpscaleGammeSection from './section_upscale_gamme.jsx';

import FAQ from '../FAQ/section_faq.jsx';

export default function OurBags() {
  // const navigate = useNavigate();
  
  // const goHomePage = () => {
  //   navigate("/");
  // }

  // const [count, setCount] = useState(0)
  const [showSecond, setShowSecond] = useState(false);
  
  return (
    <div>
      <OurBagsSection />
      
      <SoftGammeSection />
      <CabaGammeSection />
      <UpscaleGammeSection />

      <FAQ />
    </div>
  );
}
