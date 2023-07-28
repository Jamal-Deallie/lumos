import React from 'react';
import Contact from '@/containers/ContactUs';
import ContactForm from '@/components/ContactForm';
type Props = {};

export default function ContactPage({}: Props) {
  return (
    <div className='primary-bg'>
      <div className='pt-nav-height'>
    
          <Contact />
          <ContactForm />
     
      </div>
    </div>
  );
}
