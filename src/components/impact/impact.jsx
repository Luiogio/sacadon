import Impacts from './section_impacts.jsx';
import SchemaImpactSection from './section_schema_impact.jsx';

import FAQImpacts from '../FAQ/section_faq_impacts.jsx';

export default function Impact() {
  return (
    <div className='body'>
      <Impacts />
      <SchemaImpactSection />

      <FAQImpacts />
    </div>
  );
}
