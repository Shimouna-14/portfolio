import { CssBtn } from '../styles/index.jsx'
import Header from './Header.jsx'
import CV from '../assets/CV_NDEBY.pdf'

function Presentation() {

  const downloadFile = () => {
    const fileUrl = CV.default;

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'CV_NDEBY.pdf'; 

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header titre='Présentation' />
      <section className='h-full'>
        {/* Presentation */}
        <section className="h-full flex justify-center items-center">
          {/* Border */}
          <div className="relative h-[430px] w-[340px] border border-black mt-16 rounded-tl-[150px] rounded-tr-[150px] rounded-br-[70px] rounded-bl-[70px] ">
          </div>
          {/* Bg Cream */}
          <div className="absolute h-[400px] w-[310px] bg-light-cream mt-16 rounded-tl-[140px] rounded-tr-[140px] rounded-br-[70px] rounded-bl-[70px] ">
          </div>
          {/* Paragraph */}
          <div className="absolute flex justify-center items-center flex-col mt-32 lg:mt-40">
            <h2 className="elsie-swash text-center text-6xl sm:text-5xl mb-3 text-col">NDEBY</h2>
            <h2 className="elsie-swash text-center text-6xl sm:text-5xl mb-9 mx-16 text-col">Véronique Chimène</h2>
            <p className="text-center text-3xl sm:text-2xl mb-4">Développeuse web</p>
            <CssBtn onClick={downloadFile} className='absolute p-5' >Télécharger mon CV</CssBtn>
          </div>
        </section>
      </section>
    </>
  )
}

export default Presentation