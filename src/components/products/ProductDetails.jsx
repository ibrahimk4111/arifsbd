import { KeyboardArrowLeft } from '@mui/icons-material'
import { Container, Rating } from '@mui/material'
import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'


const ProductDetails = () => {
    const selectedProduct = {
        "id": 1,
        "name": "Product1",
        "route": "/product1",
        "img": "https://drive.google.com/thumbnail?id=1HuSNXPQqPSdzyvVNKne114_7B0jGM3T9"
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
                    <div className=' lg:col-span-4 border-2 rounded-lg group overflow-hidden'>
                        <img src={selectedProduct.img} alt="..." className=' object-cover w-full h-auto group-hover:skew-y-3 group-hover:scale-105 sca transition-all duration-300 ease-in' loading=' lazy ' />
                    </div>
                    <div className=' lg:col-span-8 px-4 flex flex-col gap-5'>
                        <div className=' grid grid-cols-12 '>
                            <div className='col-span-8'>
                                <h1 className=' text-3xl  font-semibold text-slate-600'>{selectedProduct.name}</h1>
                                <hr className=' h-2 ' />
                                <table >
                                    <tbody className=' flex flex-col justify-start items-start gap-3 py-3 px-6'>
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
                            <div className=' col-span-4'>
                                <div className=' flex justify-end items-end '>
                                    <Link to="/#contact" className='text-center text-slate-500 hover:text-white w-auto bg-[#e0fffa] hover:bg-theme hover:font-semibold rounded-xl p-2 transition-all duration-300 ease-in '> Buy Now </Link>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className=' text-3xl  font-semibold text-slate-600'>Product Details</h1>
                            <hr className=' h-2 ' />
                            <p className=' px-6 py-3 lg:text-base text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate nulla modi saepe, delectus earum, nihil laboriosam sed hic unde rerum accusantium ipsam mollitia magnam optio placeat laborum nam! Quibusdam.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProductDetails