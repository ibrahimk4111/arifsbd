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
                        <p className=' lg:col-span-6 text-3xl lg:[word-spacing:3px] lg:leading-relaxed leading-loosed'>
                            We aim to reach out worldwide Veterinary medicines, vaccines, Livestock nutritional products and equipments aimed to expand our presence in global markets.
                        </p>
                        <p className='lg:col-span-6 text-base lg:px-10 [word-spacing:3px] leading-7'>
                            We manufacture the best Veterinary medicines, vaccines, Livestock nutritional products and equipments completely with passion, simplicity & creativity. We export Veterinary medicines, vaccines, Livestock nutritional products and equipments throughout the country.
                        </p>
                    </div>

                    <section className=' grid lg:grid-cols-4 grid-cols-2 gap-1'>
                        {
                            productData && productData.map((item, index) => (

                                <Link to="/productDetails/:id" key={index}>
                                    <div className=' relative group border-[1px] rounded-md'>
                                        <div className=' flex justify-center items-center h-60 overflow-hidden '>
                                            <img src={`${item.img}`} alt={item.id} className=' object-cover max-h-full max-w-[90%] lg:w-[50%] w-[70%] h-auto group-hover:skew-y-2 group-hover:scale-105 sca transition-all duration-700 ease-in' loading=' lazy ' />
                                        </div>

                                        <div className=' flex justify-center items-end absolute bottom-0 w-full h-0 opacity-0 group-hover:h-28 group-hover:opacity-100 z-10 group-hover:bg-gradient-to-t from-theme p-3 transition-height duration-200 ease-in group-hover:rounded-md'>
                                            <h1 className=' text-sm mt-2 text-white '>{item.name}</h1>
                                        </div>
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
