import Gallery from './components/gallery/Gallery'
import Partners from './components/Partners/Partners'
import Products from './components/products/Products'
import About from './components/About/About'

const Home = () => {
  return (
    <div>
      <About />
      <Products />
      <Gallery />
      <Partners />
    </div>
  )
}

export default Home