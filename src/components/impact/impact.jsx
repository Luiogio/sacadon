import Impacts from './section_impacts.jsx';
import SchemaImpactSection from './section_schema_impact.jsx';

import FAQ from '../FAQ/section_faq.jsx';

export default function Impact() {
  return (
    <div className='body'>
      <Impacts />
      <SchemaImpactSection />

      <FAQ />
    </div>
  );
}
