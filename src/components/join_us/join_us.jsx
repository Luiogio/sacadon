import JoinUsInfo from './section_join_us_info.jsx';
import HowToJoin from './section_how_to_join.jsx';

import FAQJoin from '../faq/section_faq_join.jsx';

export default function JoinUs() {
  return (
    <div className='body'>
      <JoinUsInfo />
      <HowToJoin />

      <FAQJoin />
    </div>
  );
}
