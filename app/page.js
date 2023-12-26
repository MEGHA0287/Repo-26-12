import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import BestSellers from './components/BestSellers'
import Hotdeals from './components/Hotdeals'
import About from './about/page'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Base from './components/Base'

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <BestSellers/>
      <Hotdeals/>
      <About/>
      <Footer/>
      <Testimonials/>
      <Base/>
    </>
  )
}
