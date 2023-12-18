import React, { useContext } from 'react';
import { UserContext } from '../context/Context';

export default function Hero() {
  const { productData } = useContext(UserContext)
  const products = productData.slice(49, 54)
  console.log(products)

  return (
    <div className=' '>
      <div className=' max-h-[95vh] overflow-hidden'>
        {products.length > 0 ? (products.map((product, index) => (
          index == 1 &&
          <div key={index} style={{backgroundImage:`url( /${product.img})`, backgroundSize:'cover', backgroundAttachment: 'fixed'}} className=' w-full h-full '>
            <h1>hello</h1>
          </div>
        ))) : (
          <div className='w-full sm:h-[95vh] h-[30vh] flex justify-center items-center'>
            <h1 className=' animate-spin'><FaRedoAlt className=' text-3xl text-[#00cba9]' /></h1>
          </div>
        )
        }
      </div>
    </div>
  );
}
