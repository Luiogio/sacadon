import SectionContactUs from './section_contact_us.jsx';
import SectionMessageForm from './section_message_form.jsx';
import SectionNetwork from './section_network.jsx';

export default function Contact() {
  return (
    <div className='body'>
      <SectionContactUs />
      <SectionMessageForm />
      <SectionNetwork />
    </div>
  );
}
