import { CssBtn } from '../styles/index.jsx'
import Header from './Header.jsx'
import CV from '../assets/CV_NDEBY.pdf'
import Memoji from '../assets/memoji.png'

function Presentation() {
  return (
    <>
      <section className='h-80 md:h-[40em] sm:h-[40em] relative'>
        <section className='bg-[#F0E4DB] h-4/5 flex md:flex-col sm:flex-col justify-around items-center pt-14'>
          <img className='h-72 mt-12' src={Memoji} alt="" />
          <div className='w-2/5 x-lg:w-auto md:w-auto sm:w-4/5'>
            <h1 className='text-3xl mt-20 x-lg:mt-28 md:mt-3 sm:mt-3'>NDEBY Véronique Chimène</h1>
            <h2 className='text-3xl mt-4'>Développeuse Web</h2>
            <p className='x-lg:w-auto w-80 mt-4'>Je suis de celle qui aime apprendre de nouveaux savoirs pour développer son imagination.</p>
            <a href={CV} download='CV_NDEBY.pdf'><button className='bg-[#EAD6C9] px-8 py-2 rounded-2xl border border-black mt-10 md:mx-20 sm:mx-20' type="button">Télécharger Mon CV</button></a>
          </div>
        </section>

      </section>
    </>
  )
}

export default Presentation