import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import { GolfCourse, LanguageRounded, WebSharp } from '@mui/icons-material'
import { HashLink } from 'react-router-hash-link'
import { Container } from '@mui/material'

const ProductCompany = () => {
    const { productNavItem } = useContext(UserContext)
    return (
        <div>
            <Container>
                {
                    productNavItem.map((item, index) => (
                        <div key={index} className='py-5'>
                            <h2 className=' text-2xl font-bold uppercase '>{item.company_name}</h2>
                            <h2 className=' text-theme py-3'> <LanguageRounded /> <span className=' font-semibold'>Website :</span> <HashLink to={item.website}> {item.website}</HashLink></h2>
                            <h2> <span className=' font-semibold'>Product Category :</span> {item.product_category}</h2>
                            {
                                console.log(item.products)
                            }
                        </div>
                    ))
                }
            </Container>
        </div>
    )
}

export default ProductCompany