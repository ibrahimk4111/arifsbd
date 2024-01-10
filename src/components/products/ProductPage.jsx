import { useContext } from 'react'
import { UserContext } from '../context/Context'
import { Container } from '@mui/material'
import 'swiper/css'
import { HashLink as Link } from 'react-router-hash-link'

const ProductPage = () => {
    const { productData } = useContext(UserContext)

    return (
        <div className='py-16 bg-[#f4fffd]'>
            <Container>
                <div>


                    <div className=' grid lg:grid-cols-12 grid-cols-1 justify-center items-center gap-5 pb-10 '>
                        <p className=' lg:col-span-6 lg:text-3xl text-4xl lg:[word-spacing:3px] lg:leading-relaxed leading-loosed'>
                            We aim to reach out worldwide mineral importers and distributors, aimed to expand our presence in global markets.
                        </p>
                        <p className='lg:col-span-6 text-base lg:px-10 [word-spacing:3px] leading-7'>
                            We manufacture the best Egyptian minerals completely with passion, simplicity & creativity. We export Calcium Carbonate, LimeStone Lumps, LimeStone 2-3 mm & 250 mesh Feed Grade, Silica Sand, Agriculture Gypsum, Cullet and Glass Powder.
                        </p>
                    </div>

                    <section className=' grid lg:grid-cols-4 grid-cols-2 gap-1'>
                        {
                            productData && productData.map((item, index) => (

                                <Link to="/" key={index} className=' relative group border-[1px]'>
                                    <div className=' flex justify-center items-center h-60 overflow-hidden '>
                                        <img src={`${item.img}`} alt={item.id} className=' object-cover max-h-full max-w-full w-auto h-auto group-hover:skew-y-3 group-hover:scale-125 sca transition-all duration-700 ease-in' loading=' lazy ' />
                                    </div>

                                    <div className=' flex justify-center items-end absolute bottom-0 w-full h-0 opacity-0 group-hover:h-28 group-hover:opacity-100 z-10 group-hover:bg-gradient-to-t from-theme p-3 transition-height duration-200 ease-in group-hover:rounded-md'>
                                        <h1 className=' text-sm mt-2 text-white '>{item.name}</h1>
                                    </div>
                                </Link>
                            ))
                        }
                    </section>
                </div>
            </Container>
        </div>
    )
}

export default ProductPage