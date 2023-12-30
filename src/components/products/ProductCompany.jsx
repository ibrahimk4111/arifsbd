import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { GolfCourse, LanguageRounded, WebSharp } from '@mui/icons-material'
import { HashLink } from 'react-router-hash-link'
import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'

const ProductCompany = () => {
    const { productNavItem } = useContext(UserContext)
    const { name } = useParams()
    return (
        <div>
            <Container>
                {
                    productNavItem.map((item, index) => (
                        item.company_name === name &&
                        <div key={index} className='py-5'>
                            <h2 className=' lg:text-3xl text-xl font-bold uppercase '>{item.company_name}</h2>
                            <HashLink to={`http://${item.website}`} target='_blank'> <h4 className=' text-theme py-3'> <LanguageRounded /> <span className=' ml-2 font-semibold'>Website :</span> {item.website}</h4> </HashLink>
                            <h4 > <span className=' font-semibold'>Product Category :</span> {item.product_category}</h4>
                            {
                                (item.products).map((item, index) => (
                                    <div key={index} className=' p-5 '>
                                        <h2 className=' font-bold text-theme lg:text-xl text-base'>{item.name}</h2>
                                        <hr className=' h-1 mb-3'/>
                                        <p className=' text-justify '>{item.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </Container>
        </div>
    )
}

export default ProductCompany