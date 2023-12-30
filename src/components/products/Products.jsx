import { useContext } from 'react'
import { UserContext } from '../context/Context'
import { Container } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'

import 'swiper/css'
import { Link } from 'react-router-dom'

const Products = () => {
    const { productData } = useContext(UserContext)
    // console.log( productData )

    return (
        <div className='py-5'>
            <Container>
                <div>
                    <div className='relative w-full '>
                        <h1 className='uppercase font-semibold text-2xl text-slate-400'> All Our Products </h1>
                    </div>
                    <hr className='h-[1px] bg-slate-300 my-2 rounded-full w-full' />

                    <Swiper
                        speed={1300}
                        freeMode={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            0: {
                                spaceBetween: 5,
                                slidesPerView: 3.2
                            },
                            640: {
                                spaceBetween: 10,
                                slidesPerView: 4.2
                            },
                            768: {
                                spaceBetween: 10,
                                slidesPerView: 5.2
                            },
                            1024: {
                                spaceBetween: 20,
                                slidesPerView: 7.2
                            }
                        }}
                        modules={[Autoplay, FreeMode]}
                        className="py-5 px-2"
                    >
                        {
                            productData && productData.map((item, index) => (
                                <SwiperSlide key={index} className=' h-auto'>
                                    <Link>
                                        <div className=' flex justify-center items-center h-32 overflow-hidden border-2 border-slate-200 rounded-lg '>
                                            <img src={`${item.img}`} alt={item.id} className=' object-cover max-h-full max-w-full w-auto h-auto' loading=' lazy '/>
                                        </div>
                                        <h1 className=' text-sm mt-2 text-slate-500'>{item.name}</h1>
                                    </Link>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}

export default Products