import JoinUsInfo from './section_join_us_info.jsx';
import SchemaImpactSection from './section_schema_impact.jsx';

import FAQ from '../FAQ/section_faq.jsx';

export default function JoinUs() {
  return (
    <div className='body'>
      <JoinUsInfo />
      <SchemaImpactSection />

      <FAQ />
    </div>
  );
}
