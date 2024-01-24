import { useContext } from 'react'
import { UserContext } from '../context/Context'
import { Container } from '@mui/material'
import { HashLink as Link } from 'react-router-hash-link'

const Products = () => {
    const { productData } = useContext(UserContext)


    return (
        <div className='py-16 bg-slate-100'>
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
                    <div className=' flex justify-end items-end m-2'><Link to="/productpage" className='text-center text-slate-500 hover:text-white w-auto hover:bg-slate-700 rounded-lg p-1 transition duration-300 ease-in '> see all products </Link></div>

                    <section className=' grid lg:grid-cols-4 grid-cols-2 gap-2'>
                        {
                            productData && productData.map((item, index) => (
                                index < 4 &&

                                <Link to="/productDetails/:id" key={index} className='group'>
                                    <div className=' relative border-[1px] group-hover:border-theme group-hover:bg-white group-hover:shadow-md shadow-slate-500 rounded-md transition-all duration-700 ease-in'>
                                        <div className=' flex justify-center items-center h-60 overflow-hidden '>
                                            <img src={`${item.img}`} alt={item.id} className=' object-cover max-h-full max-w-[90%] lg:w-[50%] lg:w-[70%] h-auto group-hover:skew-y-2 group-hover:scale-125 sca transition-all duration-700 ease-in' loading=' lazy ' />
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

export default Products
