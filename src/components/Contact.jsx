import { Chevron } from '../assets/chevron'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { CssBtn, CssTextField } from '../styles/materialui';
import Header from './Header';

function Contact() {
    return ( 
        <>
            <Header titre='Contact' />
            <section className="h-full flex justify-center items-center">
                <section className=' lg:w-[65%] w-[65%] mt-40 ml-12 flex flex-col lg:flex-row'>
                    {/* Bg brown */}
                    <section className='lg:w-2/4 p-2 bg-silk border lg:rounded-l-xl m:rounded-t-xl sm:rounded-t-xl border-black flex justify-center items-center'>
                        <h3 className='elsie-swash text-center lg:text-[4em] text-[3em] leading-tight '>Pour Me Contacter</h3>
                    </section>
                    {/* Form */}
                    <section className='lg:w-2/4 border lg:rounded-r-xl m:rounded-b-xl sm:rounded-b-xl border-black'>
                        <form className='px-5 py-6 flex flex-col justify-center items-center'>
                            <div className='w-full mb-7'>
                                <CssTextField label="Prénom" fullWidth required size="small"/>
                            </div>
                            <div className='w-full mb-7'>
                                <CssTextField label="Nom" fullWidth required size="small"/>
                            </div>
                            <div className='w-full mb-7'>
                                <CssTextField label="Email" fullWidth required size="small"/>
                            </div>
                            <div className='w-full mb-7'>
                                <CssTextField label="Message" fullWidth required multiline rows={3} size="small"/>
                            </div>
                            <CssBtn>Envoyer</CssBtn> 
                        </form>
                    </section>
                </section>

                <div className='absolute top-[10.5em] sm:top-[9.5em] border-t border-black w-full'></div>
                {/* Up Chevron */}
                <span className='absolute rotate-90 top-28 sm:top-24 ease-in-out duration-300 hover:top-[104px] cursor-pointer'><Chevron /></span>

                <div className='absolute left-0 border-r border-black h-full w-16 bg-white z-[4]'></div>
                {/* left Chevron */}
                <span className='absolute left-2 ease-in-out duration-300 hover:left-0 cursor-pointer z-[5]'><Chevron /></span>
            </section>
        
        </>
     );
}

export default Contact;