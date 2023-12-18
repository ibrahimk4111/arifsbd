import Hero from './components/header/Hero'
// import Products from './components/products/Products'
import Contact from './components/contact/Contact'
import Gallery from './components/gallery/Gallery'
import Ourtells from './components/ourTells/Ourtells'
import Partners from './components/Partners/Partners'
import Products from './components/products/Products'
import About from './components/About/About'
import Slider from './components/header/Slider'

const Home = () => {
  return (
    <div>

      {/* <Slider /> */}
      <About />
      <Products />
      {/* <Hero /> */}
      <Gallery />
      {/* <Contact /> */}
      <Partners />
    </div>
  )
}

export default Home