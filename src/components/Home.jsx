import heroImg from '../images/heroImg.jpg'
import './Home.css'
import Reasons from './Reasons'
import AutoPlayCarousel from './carousel'

function Home() {
  return (
    <div>
      <div className='hero'>
      <img src={heroImg} className='hero-img'/>
        <div className='hero-content'>
          <h1 className="font-Michroma"> Stryker</h1>
          <p>Precision. Power. Delivered.</p>
        </div>
      </div>
      <div className="text-center mt-10 mb-32">
        <h2 className="text-glow text-5xl mb-32">Source directly from the top suppliers</h2>
        <AutoPlayCarousel />
      </div>
      <div className="mb-20">
        <h1 className="text-glow text-7xl  ">Why Stryker</h1>
      </div>
        <Reasons/>
      </div>
  )
}

export default Home