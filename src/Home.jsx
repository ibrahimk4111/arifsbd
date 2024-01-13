import Gallery from './components/gallery/Gallery'
import Partners from './components/Partners/Partners'
import Products from './components/products/Products'
import About from './components/About/About'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Clients from './components/Partners/Clients'

const Home = () => {

  return (
    <div>
      <About />
      <Products />
      <WhyChooseUs />
      <Gallery />
      <Partners />
      <Clients />
    </div>
  )
}

export default Home