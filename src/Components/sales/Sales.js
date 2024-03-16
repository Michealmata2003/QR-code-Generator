import React from 'react';
import Text from './Text';
import offer from '../../assets/offer.webp';
import { Container } from '../../Style';
import CountDown from './CountDown';

const Sales = () => {
  return (
    <div className='w-full py-9 bg-design6'>
      <div style={Container}>
        <div className='flex justify-between'>
          <img src={offer} alt='' />
          <div className='w-1/2'>
            <Text />
            {/* <CountDown /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sales