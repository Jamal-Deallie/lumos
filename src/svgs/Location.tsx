import React from 'react';

type Props = {};

export default function Location({}: Props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
      <defs>
        <style>
          {
            '.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}'
          }
        </style>
      </defs>
      <g id='Layer_2' data-name='Layer 2'>
        <g id='Layer'>
          <g id='_19_location' data-name='19_location'>
            <path
              d='M36 13c0 6.63-12 27-12 27S12 19.63 12 13a12 12 0 0 1 24 0Z'
              className='cls-1'
            />
            <circle cx={24} cy={12} r={5} className='cls-1' />
            <path d='M31 33h6l10 14H1l10-14h6' className='cls-1' />
          </g>
        </g>
      </g>
    </svg>
  );
}
