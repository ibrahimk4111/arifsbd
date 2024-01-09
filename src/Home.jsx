import Gallery from './components/gallery/Gallery'
import Partners from './components/Partners/Partners'
import Products from './components/products/Products'
import About from './components/About/About'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'

const Home = () => {
      
  return (
    <div>
     <About />
      <Products />
      <WhyChooseUs />
      <Gallery />
      <Partners />
    </div>
  )
}

export default Home