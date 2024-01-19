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
                <div className=' grid lg:grid-cols-12 grid-cols-1 gap-10'>
                    <div className=' lg:col-span-5 border-2 rounded-lg'>
                        <img src={selectedProduct.img} alt="..." className=' w-full h-auto' />
                    </div>
                    <div className=' lg:col-span-7 p-5 flex flex-col gap-5'>
                        <div className=' grid grid-cols-12 '>
                            <div className='col-span-10'>
                                <h1 className=' text-3xl  font-semibold bg-slate-50 text-slate-600 px-3 py-1 rounded-lg'>{selectedProduct.name}</h1>
                                <table className=' flex flex-col justify-start items-start gap-3 py-5 px-6'>
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
                                </table>
                            </div>
                            <div className=' col-span-2'>
                                <div className=' flex justify-end items-end '>
                                    <Link to="/#contact" className='text-center text-slate-500 hover:text-white w-auto bg-[#e0fffa] hover:bg-theme hover:font-semibold rounded-lg p-2 transition-all duration-300 ease-in '> Buy Now </Link>
                                </div>
                            </div>
                        </div>
                        <div className=' px-5 '>
                            <h1 className=' text-3xl  font-semibold text-slate-600'>Product Details</h1>
                            <hr className=' h-2 ' />
                            <p className=' pt-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cupiditate nulla modi saepe, delectus earum, nihil laboriosam sed hic unde rerum accusantium ipsam mollitia magnam optio placeat laborum nam! Quibusdam.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProductDetails