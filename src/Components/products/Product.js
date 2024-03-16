import React, { useEffect } from 'react';
import Text from './text';
import axios from 'axios';


const Product = () => {

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('https://prakem-api.onrender.com/api/product/all/')
      console.log(response)
    }
    getProducts()
  },[])
  return (
    <div className=''>
      <Text />
      <div>
        <div className='py-7 w-full'>
          <div className='grid grid-cols-4  w-1/2 m-auto gap-6 text-center'>
            <h6 className='text-xl font-semibold hover:text-logo'>New Arrival</h6>
            <h6 className='text-xl font-semibold hover:text-logo'>Featured</h6>
            <h6 className='text-xl font-semibold hover:text-logo'>On Sale</h6>
            <h6 className='text-xl font-semibold hover:text-logo'>Trending</h6>
          </div>
          {/* {getProducts.map((res,index) =>(
            <div key={index}>
              <img />
            </div>
          ))} */}

        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Product