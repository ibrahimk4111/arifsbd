import Gallery from './components/gallery/Gallery'
import Partners from './components/Partners/Partners'
import Products from './components/products/Products'
import About from './components/About/About'

const Home = () => {
      
  return (
    <div >
      <div><About /> </div>
      <div><Products /></div>
      <div><Gallery /></div>
      <div><Partners /></div>
    </div>
  )
}

export default Home