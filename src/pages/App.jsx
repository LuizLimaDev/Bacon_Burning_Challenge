import Cases from 'components/Cases/Cases'
import Decoy from 'components/Decoy/Decoy'
import Footer from 'components/Footer/Footer'
import Hero from 'components/Hero/Hero'
import Plans from 'components/Plans/Plans'
import Program from 'components/Program/Program'

function App() {

  return (
    <main className='w-screen h-screen'>
      <Hero />
      <Decoy />
      <Cases />
      <Program />
      <Plans />
      <Footer />
    </main>
  )
}

export default App
