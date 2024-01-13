import { useContext } from 'react'
import { UserContext } from '../context/Context'
import { Container } from '@mui/material'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, FreeMode } from 'swiper/modules'

import 'swiper/css'
import { HashLink as Link } from 'react-router-hash-link'

const Products = () => {
    const { productData } = useContext(UserContext)
    // console.log(productData)

    return (
        <div className='py-16 bg-slate-100'>
            <Container>
                <div>
                    {/* <div className='relative w-full '>
                        <h1 className='uppercase font-semibold text-xl text-slate-400'> All Our Products </h1>
                    </div>
                    <hr className='h-[1px] bg-slate-300 my-2 rounded-full w-full' /> */}

                    <div className=' grid lg:grid-cols-12 grid-cols-1 justify-center items-center gap-5 pb-10 '>
                        <p className=' lg:col-span-6 lg:text-3xl text-4xl lg:[word-spacing:3px] lg:leading-relaxed leading-loosed'>
                            We aim to reach out worldwide mineral importers and distributors, aimed to expand our presence in global markets.
                        </p>
                        <p className='lg:col-span-6 text-base lg:px-10 [word-spacing:3px] leading-7'>
                            We manufacture the best Egyptian minerals completely with passion, simplicity & creativity. We export Calcium Carbonate, LimeStone Lumps, LimeStone 2-3 mm & 250 mesh Feed Grade, Silica Sand, Agriculture Gypsum, Cullet and Glass Powder.
                        </p>
                    </div>
                    <div className=' flex justify-end items-end m-2'><Link to="/productpage" className='text-center text-slate-500 hover:text-white w-auto hover:bg-slate-700 rounded-lg p-1 transition duration-300 ease-in '> see all products </Link></div>

                    {/* <Swiper
                        speed={1300}
                        freeMode={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            0: {
                                spaceBetween: 10,
                                slidesPerView: 2.2
                            },
                            640: {
                                spaceBetween: 10,
                                slidesPerView: 2.2
                            },
                            768: {
                                spaceBetween: 10,
                                slidesPerView: 3.2
                            },
                            1024: {
                                spaceBetween: 20,
                                slidesPerView: 4.2
                            }
                        }}
                        modules={[Autoplay, FreeMode]}
                        className="pt-5 px-2 pb-2"
                    > */}
                    <section className=' grid lg:grid-cols-4 grid-cols-2 gap-2'>
                        {
                            productData && productData.map((item, index) => (
                                index < 4 &&
                                // <SwiperSlide key={index} className=' h-auto '>
                                <Link to="/" key={index} className='group'>
                                    <div className=' relative border-[1px] group-hover:border-theme group-hover:bg-white group-hover:shadow-md shadow-slate-500 rounded-md transition-all duration-700 ease-in'>
                                        <div className=' flex justify-center items-center h-60 overflow-hidden '>
                                            <img src={`${item.img}`} alt={item.id} className=' object-cover max-h-full max-w-full w-auto h-auto group-hover:skew-y-3 group-hover:scale-125 sca transition-all duration-700 ease-in' loading=' lazy ' />
                                        </div>

                                        <div className=' flex justify-center items-end absolute bottom-0 w-full h-0 opacity-0 group-hover:h-28 group-hover:opacity-100 z-10 group-hover:bg-gradient-to-t from-theme p-3 transition-height duration-200 ease-in group-hover:rounded-md'>
                                            <h1 className=' text-sm mt-2 text-white '>{item.name}</h1>
                                        </div>
                                    </div>
                                </Link>
                                /* <Link>
                                    <div className=' flex justify-center items-center h-auto overflow-hidden rounded-md shadow shadow-slate-400 bg-white'>
                                        <img src={`${item.img}`} alt={item.id} className=' object-cover max-h-full max-w-full w-auto h-auto' loading=' lazy ' />
                                    </div>
                                    <h1 className=' text-sm mt-2 text-slate-500'>{item.name}</h1>
                                </Link> */
                                // </SwiperSlide>

                            ))
                        }
                    </section>
                    {/* </Swiper> */}
                </div>
            </Container>
        </div>
    )
}

export default Products