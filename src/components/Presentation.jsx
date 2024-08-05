import CV from '../assets/CV_NDEBY.pdf'
import Memoji from '../assets/memoji.png'
import BgPeach from '../assets/bg-peach-gradient.jpg'

function Presentation() {
  return (
    <>
      <section className='h-80 md:h-[40em] sm:h-[45em] relative'>
        <section className='bg-[#F0E4DB] h-4/5 flex md:flex-col sm:flex-col justify-around items-center pt-14 sm:pb-5'>
          <img className='h-72 mt-[4.5em] z-20' src={Memoji} alt="Memoji" />
          <div className='w-2/5 x-lg:w-auto md:w-auto sm:w-4/5 z-20'>
            <h1 className='text-3xl mt-20 x-lg:mt-28 md:mt-3 sm:mt-3'>NDEBY Véronique Chimène</h1>
            <h2 className='text-3xl mt-4'>Développeuse Web</h2>
            <p className='x-lg:w-auto w-80 sm:w-full mt-4 mb-10'>Je suis de celle qui aime apprendre de nouveaux savoirs pour développer son imagination.</p>
            <div className='flex justify-center sm:mt-9'><a className='bg-[#EAD6C9] px-8 py-2 rounded-2xl border border-black hover:bg-[#EAD6C9]/70 hover:duration-300' type="button" href={CV} download='CV_NDEBY.pdf'><button >Télécharger Mon CV</button></a> </div>
          </div>
        </section>
        <img className='absolute top-0 h-[21em] md:h-[39em] sm:h-[42em] w-full object-cover opacity-40' src={BgPeach} alt="" />

      </section>
    </>
  )
}

export default Presentation