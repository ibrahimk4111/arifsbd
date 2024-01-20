import { KeyboardArrowLeft } from '@mui/icons-material'
import { Container, Rating } from '@mui/material'
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'


const ProductDetails = () => {
    const selectedProduct = {
        "id": 1,
        "name": "Product1",
        "route": "/product1",
        "img": "https://drive.google.com/thumbnail?id=1EKuz9Ht-v2dWTp1ivHA35B01wTjgkbPb"
    }

    return (
        <div className=' lg:py-10 py-5 '>
            <Container>
                <div className=' py-5 flex justify-start '>
                    <div className=' flex justify-start items-center gap-1 group'>
                        <KeyboardArrowLeft className=' text-base group-hover:-translate-x-1 duration-300 transition-all ease-linear' />
                        <Link to="/productpage" className='text-center text-slate-500 group-hover:text-white group-hover:bg-slate-700 p-1 rounded-full transition-all duration-300 ease-in '> Go Back </Link>
                    </div>
                </div>
                <div className=' grid lg:grid-cols-12 grid-cols-1 gap-10'>
                    {/* left side image section */}
                    <div className=' lg:col-span-4 flex justify-center items-center border-2 rounded-lg group overflow-hidden'>
                        <img src={selectedProduct.img} alt="..." className=' object-cover w-[70%] h-auto group-hover:skew-y-3 group-hover:scale-105 sca transition-all duration-300 ease-in' loading=' lazy ' />
                    </div>
                    
                    {/* right side details section */}
                    <div className=' lg:col-span-8 px-4 flex flex-col gap-5'>
                        <div>
                            <div className=' grid lg:grid-cols-12 grid-cols-2 '>
                                <div className=' lg:col-span-10'>
                                    <h1 className=' lg:text-3xl text-xl  font-semibold text-slate-600'>{selectedProduct.name}</h1>
                                    <hr className=' h-2 ' />
                                </div>
                                <div className=' lg:col-span-2'>
                                    <div className=' flex justify-end items-end '>
                                        <Link to="#contact" className='lg:text-base text-sm text-center text-slate-500 hover:text-white w-auto bg-[#e0fffa] hover:bg-theme rounded-xl p-1 transition-all duration-300 ease-in '> Buy Now </Link>
                                    </div>
                                </div>
                            </div>
                            <table >
                                <tbody className=' flex flex-col justify-start items-start gap-2 py-3 lg:px-6 lg:text-sm'>
                                    <tr className=' flex gap-3'>
                                        <th>Product Category</th>
                                        <th>:</th>
                                        <td>Medicine</td>
                                    </tr>
                                    <tr className=' flex gap-3'>
                                        <th>In Stock</th>
                                        <th>:</th>
                                        <td className=' text-theme'>Available</td>
                                    </tr>
                                    <tr className=' flex gap-3'>
                                        <th>Rating </th>
                                        <th>:</th>
                                        <td><Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className=''>
                            <h1 className=' lg:text-3xl text-xl  font-semibold text-slate-600'>Product Details</h1>
                            <hr className=' h-2 ' />
                            <p className=' lg:px-6 py-3 lg:text-base text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate nulla modi saepe, delectus earum, nihil laboriosam sed hic unde rerum accusantium ipsam mollitia magnam optio placeat laborum nam! Quibusdam.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProductDetails