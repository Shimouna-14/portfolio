import { Chevron } from './assets/chevron.jsx'

function App() {

  return (
    <main className="w-100vw h-full flex justify-center items-center">
      {/* Border */}
      <div className="relative h-[430px] w-[340px] border border-black mt-16 rounded-tl-[150px] rounded-tr-[150px] rounded-br-[70px] rounded-bl-[70px] ">
      </div>
      {/* Bg Cream */}
      <div className="absolute h-[400px] w-[310px] bg-light-cream mt-16 rounded-tl-[140px] rounded-tr-[140px] rounded-br-[70px] rounded-bl-[70px] ">
      </div>
      {/* Paragraph */}
      <div className="absolute flex justify-center items-center flex-col mt-48">
        <h2 className="elsie-swash text-center text-6xl mb-3">NDEBY</h2>
        <h2 className="elsie-swash text-center text-6xl mb-12">Véronique Chimène</h2>
        <p className="text-center text-3xl mb-4">Développeuse web</p>
      </div>

      {/* Up Chevron */}
      {/* <span className='absolute rotate-90'><Chevron /></span> */}

      {/* Right Chevron */}
      <span className='absolute rotate-180 right-0'><Chevron /></span>

      {/* Down Chevron */}
      <span className='absolute -rotate-90 bottom-0'><Chevron /></span>
      
      {/* left Chevron */}
      {/* <span className='absolute'><Chevron /></span> */}

    </main>
  )
}

export default App
