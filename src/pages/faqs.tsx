import React from 'react';
import { Heading } from '@/components/Heading';
import { Accordion } from '@/components/Accordion';
import { faqItems } from '@/data';
type Props = {};

export default function faqs({}: Props) {
  return (
    <div className='pt-nav-height primary-bg'>
      <div className='py-lg-128 py-sm-64'>
        <Heading
          title='Frequently Asked Questions'
          desc={
            '<p>Got questions about Lumos? Find answers to frequently asked questions here. Learn about our services, sustainability focus, and past projects. Illuminate your understanding and embark on a brilliant partnership with us.</p>'
          }
        />

        <div className='main-cont mt-lg-96 mt-sm-48'>
          {faqItems.map(({ id, question, answer }) => {
            return <Accordion key={id} title={question} content={answer} />;
          })}
        </div>
      </div>
    </div>
  );
}
